import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface QuizAnswers {
  email: string;
  score: number;
  answers: Record<number, string | string[]>;
  quizSteps: Array<{
    question: string;
    type: string;
    options: Array<{ value: string; label: string; points: number }>;
  }>;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, score, answers, quizSteps }: QuizAnswers = await req.json();

    // Get business type and prepare context for AI
    const businessType = answers[0] as string;
    const businessTypeLabel = quizSteps[0].options.find(o => o.value === businessType)?.label || businessType;
    
    // Calculate dimensional scores
    const dimensions = calculateDimensionalScores(answers, quizSteps);
    
    // Generate base opportunities
    const opportunities = generateAutomationOpportunities(answers, quizSteps);
    
    // Use AI to enhance opportunities with business-specific insights
    const enhancedOpportunities = await getAIEnhancedSuggestions(
      businessTypeLabel,
      answers,
      opportunities,
      dimensions,
      score
    );
    
    // Generate tool recommendations
    const toolRecommendations = generateToolRecommendations(answers, opportunities);
    
    // Calculate ROI estimates
    const roiEstimates = calculateROIEstimates(answers, quizSteps);
    
    // Generate stage-specific recommendations
    const stage = getStage(score);
    const stageRecommendations = getStageRecommendations(stage, dimensions);

    const htmlContent = generateEmailHTML({
      email,
      score,
      stage,
      dimensions,
      opportunities: enhancedOpportunities,
      toolRecommendations,
      roiEstimates,
      stageRecommendations,
      businessType: businessTypeLabel,
    });

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY is not set");
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "humanstuff.ai <onboarding@resend.dev>",
        to: [email],
        subject: `Your ${businessTypeLabel} AI Readiness Score: ${score}% - ${stage.name}`,
        html: htmlContent,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error("Resend API error:", errorText);
      throw new Error(`Failed to send email: ${errorText}`);
    }

    console.log("Email sent successfully to:", email);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-quiz-results function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

async function getAIEnhancedSuggestions(
  businessType: string,
  answers: Record<number, string | string[]>,
  baseOpportunities: Array<{ title: string; description: string; impact: string; effort: string; category: string }>,
  dimensions: { cultural: number; technical: number; useCase: number },
  score: number
): Promise<Array<{ title: string; description: string; impact: string; effort: string; category: string }>> {
  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.warn("LOVABLE_API_KEY not set, returning base opportunities");
      return baseOpportunities;
    }

    const processes = Array.isArray(answers[3]) ? answers[3] : [];
    const manualHours = answers[2] as string;
    
    const prompt = `You are an AI automation consultant specializing in ${businessType} businesses.

Business Context:
- Industry: ${businessType}
- Team processes: ${processes.join(", ") || "general operations"}
- Manual hours per week: ${manualHours}
- Readiness Score: ${score}/100 (Cultural: ${dimensions.cultural}%, Technical: ${dimensions.technical}%, Use Case: ${dimensions.useCase}%)

Base automation opportunities identified:
${baseOpportunities.map((opp, i) => `${i + 1}. ${opp.title}: ${opp.description}`).join("\n")}

Task: Enhance these automation opportunities with specific, actionable examples relevant to ${businessType} companies. For each opportunity, provide:
1. Industry-specific use cases and examples
2. Concrete ROI metrics typical for ${businessType} businesses
3. Common tools/platforms used in ${businessType} industry
4. Real implementation considerations for ${businessType} context

Keep descriptions concise (2-3 sentences) and focus on practical, business-specific insights.

Return ONLY a JSON array with this structure (no markdown, no code blocks):
[
  {
    "title": "Original title",
    "description": "Enhanced business-specific description with concrete ${businessType} examples",
    "impact": "Specific impact with ${businessType} metrics",
    "effort": "Low/Medium/High",
    "category": "Original category"
  }
]`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: "You are an expert AI automation consultant. Always respond with valid JSON only, no markdown formatting."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      console.error("AI API error:", response.status, await response.text());
      return baseOpportunities;
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    
    if (!content) {
      console.warn("No content from AI, using base opportunities");
      return baseOpportunities;
    }

    // Clean up response - remove markdown code blocks if present
    const cleanedContent = content
      .replace(/```json\n?/g, "")
      .replace(/```\n?/g, "")
      .trim();
    
    const enhancedOpportunities = JSON.parse(cleanedContent);
    
    // Validate structure
    if (Array.isArray(enhancedOpportunities) && enhancedOpportunities.length > 0) {
      return enhancedOpportunities;
    }
    
    return baseOpportunities;
  } catch (error) {
    console.error("Error enhancing with AI:", error);
    return baseOpportunities;
  }
}

function calculateDimensionalScores(
  answers: Record<number, string | string[]>,
  quizSteps: QuizAnswers["quizSteps"]
): { cultural: number; technical: number; useCase: number } {
  // Culture: questions 6, 9, 11, 12 (team AI readiness, documentation, budget, timeline)
  // Technology: questions 4, 8, 10 (data infrastructure, tech stack, compliance)
  // Process: questions 1, 2, 3, 7 (team size, manual hours, processes, workflow complexity)
  
  const culturalIndices = [6, 9, 11, 12];
  const technicalIndices = [4, 8, 10];
  const useCaseIndices = [1, 2, 3, 7];
  
  const calculateDimension = (indices: number[]) => {
    let total = 0;
    let max = 0;
    indices.forEach(i => {
      const answer = answers[i];
      const step = quizSteps[i];
      if (Array.isArray(answer)) {
        answer.forEach(val => {
          const opt = step.options.find(o => o.value === val);
          if (opt) total += opt.points;
        });
        max += Math.max(...step.options.map(o => o.points)) * 2;
      } else if (typeof answer === "string") {
        const opt = step.options.find(o => o.value === answer);
        if (opt) total += opt.points;
        max += Math.max(...step.options.map(o => o.points));
      }
    });
    return max > 0 ? Math.round((total / max) * 100) : 0;
  };
  
  return {
    cultural: calculateDimension(culturalIndices),
    technical: calculateDimension(technicalIndices),
    useCase: calculateDimension(useCaseIndices),
  };
}

function generateAutomationOpportunities(
  answers: Record<number, string | string[]>,
  quizSteps: QuizAnswers["quizSteps"]
): Array<{ title: string; description: string; impact: string; effort: string; category: string }> {
  const opportunities: Array<{ title: string; description: string; impact: string; effort: string; category: string }> = [];
  
  // Get primary processes (question 3)
  const processes = answers[3] as string[] || [];
  const manualHours = answers[2] as string || "0-5";
  const dataInfra = answers[4] as string || "siloed";
  
  // Customer Support automation
  if (processes.includes("customer_support")) {
    opportunities.push({
      title: "AI-Powered Customer Support Agent",
      description: "Deploy an AI agent to handle tier-1 support tickets, FAQs, and routine inquiries. Integrates with ticketing systems to respond automatically.",
      impact: "High - Reduce support volume by 40-60%",
      effort: dataInfra === "unified" || dataInfra === "integrated" ? "Medium" : "High",
      category: "Customer Support",
    });
  }
  
  // Document generation automation
  if (processes.includes("document_generation")) {
    opportunities.push({
      title: "Automated Report & Document Generation",
      description: "Create AI agents that generate reports, proposals, and documents from templates and data sources.",
      impact: manualHours.startsWith("30+") || manualHours.startsWith("15-30") ? "Very High - Save 10-20 hours/week" : "High - Save 5-10 hours/week",
      effort: "Medium",
      category: "Document Processing",
    });
  }
  
  // Data entry automation
  if (processes.includes("data_entry")) {
    opportunities.push({
      title: "Intelligent Data Entry & Processing",
      description: "Automate data extraction from emails, PDFs, and forms. Use OCR and AI to parse unstructured data.",
      impact: "Very High - Eliminate 70-90% of manual data entry",
      effort: dataInfra === "siloed" ? "High - Requires integration" : "Medium",
      category: "Data Processing",
    });
  }
  
  // Research automation
  if (processes.includes("research")) {
    opportunities.push({
      title: "AI Research Assistant",
      description: "Deploy agents that monitor industry news, gather competitive intelligence, and synthesize research reports.",
      impact: "High - Save 5-15 hours/week",
      effort: "Low - Quick to implement",
      category: "Research & Analysis",
    });
  }
  
  // Always include at least one email automation
  if (manualHours.startsWith("15-30") || manualHours.startsWith("30+")) {
    opportunities.push({
      title: "Email & Communication Automation",
      description: "Deploy AI agents to draft responses, categorize emails, and handle routine communications.",
      impact: "Very High - Save 5-10 hours/week per person",
      effort: "Low - Quick wins available",
      category: "Communications",
    });
  }
  
  return opportunities.slice(0, 5);
}

function generateToolRecommendations(
  answers: Record<number, string | string[]>,
  opportunities: Array<{ category: string }>
): Array<{ name: string; use_case: string; pricing: string; complexity: string }> {
  const tools: Array<{ name: string; use_case: string; pricing: string; complexity: string }> = [];
  const categories = new Set(opportunities.map(o => o.category));
  
  const budget = answers[11] as string || "exploring";
  const techStack = answers[8] as string || "basic";
  
  if (budget !== "exploring") {
    tools.push({
      name: "n8n",
      use_case: "Workflow automation connecting 400+ apps. Great for data workflows and custom automations.",
      pricing: "Free self-hosted, Cloud from $20/mo",
      complexity: techStack === "basic" ? "Medium" : "Low",
    });
  }
  
  if (categories.has("Customer Support")) {
    tools.push({
      name: "Relevance AI",
      use_case: "Build custom AI agents for customer support without code.",
      pricing: "Contact for pricing",
      complexity: "Low",
    });
  }
  
  tools.push({
    name: "Make (Integromat)",
    use_case: "Visual automation platform for multi-step workflows.",
    pricing: "Free tier, Pro from $9/mo",
    complexity: "Low",
  });
  
  return tools.slice(0, 5);
}

function calculateROIEstimates(
  answers: Record<number, string | string[]>,
  quizSteps: QuizAnswers["quizSteps"]
): { weeklyHoursSaved: string; annualCostSavings: string; paybackPeriod: string; details: string } {
  const teamSize = parseInt((answers[1] as string).split("-")[0]) || 1;
  const manualHoursStr = answers[2] as string || "0-5";
  const manualHours = parseInt(manualHoursStr.split("-")[0]) || 0;
  
  const automationRate = 0.5;
  const hoursSavedPerWeek = Math.round(manualHours * automationRate * teamSize);
  const hourlyCost = 50;
  const annualSavings = hoursSavedPerWeek * 52 * hourlyCost;
  
  const budget = answers[11] as string || "exploring";
  let implementationCost = 15000;
  if (budget === "small") implementationCost = 10000;
  if (budget === "medium") implementationCost = 25000;
  if (budget === "large") implementationCost = 40000;
  
  const paybackMonths = Math.ceil(implementationCost / (annualSavings / 12));
  
  return {
    weeklyHoursSaved: `${hoursSavedPerWeek}-${Math.round(hoursSavedPerWeek * 1.2)} hours/week`,
    annualCostSavings: `$${Math.round(annualSavings / 1000)}k - $${Math.round(annualSavings * 1.3 / 1000)}k/year`,
    paybackPeriod: `${paybackMonths} months`,
    details: `Based on ${teamSize}+ team members spending ${manualHoursStr} hours/week on manual tasks.`,
  };
}

function getStage(score: number): { name: string; description: string; color: string } {
  if (score >= 70) {
    return {
      name: "AI Ready",
      description: "You have the infrastructure and culture to scale AI automation.",
      color: "#22c55e",
    };
  }
  if (score >= 40) {
    return {
      name: "AI Pilot",
      description: "Ready for structured pilots and proof-of-concepts.",
      color: "#3b82f6",
    };
  }
  return {
    name: "AI Explorer",
    description: "Early exploration phase - focus on building foundations.",
    color: "#f97316",
  };
}

function getStageRecommendations(
  stage: { name: string },
  dimensions: { cultural: number; technical: number; useCase: number }
): { immediate: string[]; next30Days: string[]; next90Days: string[] } {
  const recommendations = {
    immediate: [] as string[],
    next30Days: [] as string[],
    next90Days: [] as string[],
  };
  
  if (stage.name === "AI Explorer") {
    recommendations.immediate = [
      "Start with simple email/calendar automation",
      "Identify 2-3 repetitive tasks for quick wins",
      "Set up pilot budget ($500-2000)",
    ];
    recommendations.next30Days = [
      "Document top 5 manual processes",
      "Evaluate automation platforms (n8n, Make)",
      "Run 1-2 small automation pilots",
    ];
    recommendations.next90Days = [
      "Establish AI governance framework",
      "Create process documentation standards",
      "Plan data integration roadmap",
    ];
  } else if (stage.name === "AI Pilot") {
    recommendations.immediate = [
      "Launch 2-3 structured pilots",
      "Establish ROI tracking metrics",
      "Form automation taskforce",
    ];
    recommendations.next30Days = [
      "Deploy production-ready automation",
      "Create internal training program",
      "Evaluate enterprise platforms",
    ];
    recommendations.next90Days = [
      "Scale successful pilots",
      "Invest in data integration",
      "Build AI Center of Excellence",
    ];
  } else {
    recommendations.immediate = [
      "Deploy multiple production agents",
      "Create metrics dashboard",
      "Launch automation marketplace",
    ];
    recommendations.next30Days = [
      "Scale agents across organization",
      "Implement automated monitoring",
      "Build custom agents",
    ];
    recommendations.next90Days = [
      "Develop proprietary AI agents",
      "Integrate into product offerings",
      "Establish innovation pipeline",
    ];
  }
  
  return recommendations;
}

function generateEmailHTML(data: {
  email: string;
  score: number;
  stage: { name: string; description: string; color: string };
  dimensions: { cultural: number; technical: number; useCase: number };
  opportunities: Array<{ title: string; description: string; impact: string; effort: string; category: string }>;
  toolRecommendations: Array<{ name: string; use_case: string; pricing: string; complexity: string }>;
  roiEstimates: { weeklyHoursSaved: string; annualCostSavings: string; paybackPeriod: string; details: string };
  stageRecommendations: { immediate: string[]; next30Days: string[]; next90Days: string[] };
  businessType: string;
}): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your ${data.businessType} AI Readiness Results</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Crimson+Pro:wght@400;500;600&display=swap');
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Crimson Pro', Georgia, serif;
      line-height: 1.7;
      color: #1a1a1a;
      background-color: #fafafa;
      padding: 20px;
    }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 2px;
      overflow: hidden;
      border: 1px solid #e5e5e5;
    }
    
    .header {
      background: #ffffff;
      padding: 48px 32px 32px;
      text-align: center;
      border-bottom: 1px solid #e5e5e5;
    }
    
    .logo {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 16px;
      font-weight: 500;
      color: #1a1a1a;
      margin-bottom: 24px;
      letter-spacing: -0.02em;
    }
    
    .score-container {
      margin: 32px 0;
    }
    
    .score-badge {
      font-size: 72px;
      font-weight: 600;
      color: ${data.stage.color};
      line-height: 1;
      margin-bottom: 16px;
      font-family: 'IBM Plex Mono', monospace;
    }
    
    .stage-name {
      font-size: 24px;
      font-weight: 500;
      color: #1a1a1a;
      margin-bottom: 12px;
      letter-spacing: -0.01em;
    }
    
    .stage-description {
      font-size: 16px;
      color: #666;
      max-width: 400px;
      margin: 0 auto;
      line-height: 1.6;
    }
    
    .content {
      padding: 32px;
    }
    
    .section {
      margin-bottom: 40px;
    }
    
    .section-title {
      font-size: 18px;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 20px;
      padding-bottom: 12px;
      border-bottom: 1px solid #e5e5e5;
      letter-spacing: -0.01em;
    }
    
    .dimensions-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-top: 20px;
    }
    
    .dimension-card {
      background: #fafafa;
      padding: 20px 16px;
      border: 1px solid #e5e5e5;
      border-radius: 2px;
      text-align: center;
    }
    
    .dimension-score {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 32px;
      font-weight: 600;
      color: ${data.stage.color};
      line-height: 1;
      margin-bottom: 8px;
    }
    
    .dimension-label {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11px;
      text-transform: uppercase;
      color: #666;
      letter-spacing: 0.05em;
      margin-bottom: 4px;
    }
    
    .dimension-description {
      font-size: 11px;
      color: #999;
      line-height: 1.4;
    }
    
    .roi-grid {
      background: #fafafa;
      border: 1px solid #e5e5e5;
      border-radius: 2px;
      padding: 24px;
      margin-top: 20px;
    }
    
    .roi-item {
      margin-bottom: 16px;
    }
    
    .roi-item:last-child {
      margin-bottom: 0;
    }
    
    .roi-label {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11px;
      text-transform: uppercase;
      color: #666;
      letter-spacing: 0.05em;
      margin-bottom: 4px;
    }
    
    .roi-value {
      font-size: 20px;
      font-weight: 600;
      color: #1a1a1a;
    }
    
    .roi-details {
      font-size: 13px;
      color: #666;
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid #e5e5e5;
    }
    
    .opportunity-card {
      background: #ffffff;
      border: 1px solid #e5e5e5;
      border-radius: 2px;
      padding: 20px;
      margin-bottom: 12px;
    }
    
    .opportunity-title {
      font-size: 16px;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 8px;
      letter-spacing: -0.01em;
    }
    
    .opportunity-description {
      font-size: 14px;
      color: #666;
      line-height: 1.6;
      margin-bottom: 12px;
    }
    
    .opportunity-meta {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11px;
      color: #999;
      padding-top: 12px;
      border-top: 1px solid #f0f0f0;
    }
    
    .action-plan {
      background: #fafafa;
      border: 1px solid #e5e5e5;
      border-radius: 2px;
      padding: 24px;
      margin-top: 20px;
    }
    
    .action-plan h3 {
      font-size: 15px;
      font-weight: 600;
      color: #1a1a1a;
      margin: 24px 0 12px 0;
      letter-spacing: -0.01em;
    }
    
    .action-plan h3:first-child {
      margin-top: 0;
    }
    
    .action-plan ul {
      list-style: none;
      padding: 0;
    }
    
    .action-plan li {
      font-size: 14px;
      color: #666;
      padding: 8px 0 8px 20px;
      position: relative;
      line-height: 1.6;
    }
    
    .action-plan li:before {
      content: "→";
      position: absolute;
      left: 0;
      color: ${data.stage.color};
      font-weight: 600;
    }
    
    .cta-section {
      text-align: center;
      padding: 40px 32px;
      background: #fafafa;
      border-top: 1px solid #e5e5e5;
    }
    
    .cta-button {
      display: inline-block;
      padding: 16px 32px;
      background: ${data.stage.color};
      color: #ffffff;
      text-decoration: none;
      border-radius: 2px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: -0.02em;
      transition: opacity 0.2s;
    }
    
    .cta-button:hover {
      opacity: 0.9;
    }
    
    .footer {
      text-align: center;
      padding: 32px;
      color: #999;
      font-size: 13px;
      border-top: 1px solid #e5e5e5;
    }
    
    .footer a {
      color: ${data.stage.color};
      text-decoration: none;
    }
    
    @media only screen and (max-width: 600px) {
      .dimensions-grid {
        grid-template-columns: 1fr;
      }
      
      .content {
        padding: 24px 20px;
      }
      
      .header {
        padding: 32px 20px 24px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">humanstuff.ai</div>
      <h1 class="stage-description">${data.businessType} AI Readiness Assessment</h1>
      <div class="score-container">
        <div class="score-badge">${data.score}%</div>
        <div class="stage-name">${data.stage.name}</div>
        <p class="stage-description">${data.stage.description}</p>
      </div>
    </div>

    <div class="content">
      <div class="section">
        <h2 class="section-title">Readiness Breakdown</h2>
        <div class="dimensions-grid">
          <div class="dimension-card">
            <div class="dimension-score">${data.dimensions.cultural}%</div>
            <div class="dimension-label">Culture</div>
            <div class="dimension-description">Team readiness & buy-in</div>
          </div>
          <div class="dimension-card">
            <div class="dimension-score">${data.dimensions.technical}%</div>
            <div class="dimension-label">Technology</div>
            <div class="dimension-description">Infrastructure & integration</div>
          </div>
          <div class="dimension-card">
            <div class="dimension-score">${data.dimensions.useCase}%</div>
            <div class="dimension-label">Process</div>
            <div class="dimension-description">Opportunity mapping</div>
          </div>
        </div>
      </div>

      <div class="section">
        <h2 class="section-title">Projected ROI</h2>
        <div class="roi-grid">
          <div class="roi-item">
            <div class="roi-label">Time Saved</div>
            <div class="roi-value">${data.roiEstimates.weeklyHoursSaved}</div>
          </div>
          <div class="roi-item">
            <div class="roi-label">Annual Savings</div>
            <div class="roi-value">${data.roiEstimates.annualCostSavings}</div>
          </div>
          <div class="roi-item">
            <div class="roi-label">Payback Period</div>
            <div class="roi-value">${data.roiEstimates.paybackPeriod}</div>
          </div>
          <div class="roi-details">${data.roiEstimates.details}</div>
        </div>
      </div>

      <div class="section">
        <h2 class="section-title">${data.businessType} Automation Opportunities</h2>
        ${data.opportunities.map(opp => `
          <div class="opportunity-card">
            <div class="opportunity-title">${opp.title}</div>
            <div class="opportunity-description">${opp.description}</div>
            <div class="opportunity-meta">Impact: ${opp.impact} • Effort: ${opp.effort}</div>
          </div>
        `).join('')}
      </div>

      <div class="section">
        <h2 class="section-title">Recommended Tools</h2>
        ${data.toolRecommendations.map(tool => `
          <div class="opportunity-card">
            <div class="opportunity-title">${tool.name}</div>
            <div class="opportunity-description">${tool.use_case}</div>
            <div class="opportunity-meta">${tool.pricing} • ${tool.complexity} complexity</div>
          </div>
        `).join('')}
      </div>

      <div class="section">
        <h2 class="section-title">Your 90-Day Action Plan</h2>
        <div class="action-plan">
          <h3>Start Immediately</h3>
          <ul>
            ${data.stageRecommendations.immediate.map(r => `<li>${r}</li>`).join('')}
          </ul>
          
          <h3>Next 30 Days</h3>
          <ul>
            ${data.stageRecommendations.next30Days.map(r => `<li>${r}</li>`).join('')}
          </ul>
          
          <h3>Next 90 Days</h3>
          <ul>
            ${data.stageRecommendations.next90Days.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>

    <div class="cta-section">
      <a href="https://humanstuff.ai/#contact" class="cta-button">Book Your Strategy Session</a>
    </div>

    <div class="footer">
      <p>Questions? Reply to this email or visit <a href="https://humanstuff.ai">humanstuff.ai</a></p>
      <p style="margin-top: 12px; color: #bbb;">Automate the boring stuff so you can focus on the human stuff</p>
    </div>
  </div>
</body>
</html>
  `;
}

serve(handler);