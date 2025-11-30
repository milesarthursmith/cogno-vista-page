import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, CheckCircle, Loader2, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AbstractBackground from "@/components/AbstractBackground";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { RadarChart } from "@/components/quiz/RadarChart";

type QuizStep = {
  question: string;
  type: "radio" | "checkbox" | "text";
  options?: { value: string; label: string; points: number }[];
};

const quizSteps: QuizStep[] = [
  {
    question: "What type of business are you in?",
    type: "radio",
    options: [
      { value: "saas", label: "SaaS / Software", points: 0 },
      { value: "ecommerce", label: "E-commerce / Retail", points: 0 },
      { value: "professional_services", label: "Professional Services / Consulting", points: 0 },
      { value: "healthcare", label: "Healthcare / Medical", points: 0 },
      { value: "finance", label: "Finance / Insurance", points: 0 },
      { value: "education", label: "Education / Training", points: 0 },
      { value: "manufacturing", label: "Manufacturing / Supply Chain", points: 0 },
      { value: "real_estate", label: "Real Estate / Property", points: 0 },
      { value: "marketing", label: "Marketing / Agency", points: 0 },
      { value: "other", label: "Other", points: 0 },
    ],
  },
  {
    question: "How many people are on your team?",
    type: "radio",
    options: [
      { value: "1-5", label: "1-5 people", points: 20 },
      { value: "6-15", label: "6-15 people", points: 40 },
      { value: "16-50", label: "16-50 people", points: 60 },
      { value: "50+", label: "50+ people", points: 80 },
    ],
  },
  {
    question: "How many hours per week does your team spend on repetitive manual tasks?",
    type: "radio",
    options: [
      { value: "0-5", label: "0-5 hours", points: 20 },
      { value: "5-15", label: "5-15 hours", points: 40 },
      { value: "15-30", label: "15-30 hours", points: 70 },
      { value: "30+", label: "30+ hours", points: 90 },
    ],
  },
  {
    question: "Which tools hold most of your day-to-day data? (Select all that apply)",
    type: "checkbox",
    options: [
      { value: "gmail", label: "Email (e.g. Gmail / Outlook)", points: 10 },
      { value: "crm", label: "CRM (e.g. HubSpot, Salesforce)", points: 20 },
      { value: "spreadsheets", label: "Spreadsheets (e.g. Google Sheets, Excel)", points: 15 },
      { value: "ticketing", label: "Ticketing / Helpdesk (e.g. Zendesk, Intercom)", points: 20 },
      { value: "erp", label: "ERP / finance systems", points: 15 },
    ],
  },
  {
    question: "Which processes consume the most time for your team? (Select all that apply)",
    type: "checkbox",
    options: [
      { value: "customer_support", label: "Customer support & communication", points: 15 },
      { value: "document_generation", label: "Document generation & reporting", points: 15 },
      { value: "data_entry", label: "Data entry & processing", points: 15 },
      { value: "research", label: "Research & information gathering", points: 10 },
      { value: "scheduling", label: "Scheduling & coordination", points: 10 },
      { value: "quality_assurance", label: "Quality assurance & testing", points: 10 },
    ],
  },
  {
    question: "What's the main reason you're exploring AI automation?",
    type: "radio",
    options: [
      { value: "save_time", label: "Reduce time spent on repetitive work", points: 60 },
      { value: "scale_revenue", label: "Scale revenue without adding headcount", points: 80 },
      { value: "improve_quality", label: "Improve quality / consistency of output", points: 70 },
      { value: "reduce_costs", label: "Reduce operating costs", points: 75 },
    ],
  },
  {
    question: "How would you describe your data infrastructure?",
    type: "radio",
    options: [
      { value: "siloed", label: "Disconnected systems & data silos", points: 20 },
      { value: "partial", label: "Some systems integrated, many manual exports", points: 40 },
      { value: "integrated", label: "Most systems integrated with APIs available", points: 70 },
      { value: "unified", label: "Unified data platform with real-time access", points: 90 },
    ],
  },
  {
    question: "What's your current AI adoption level?",
    type: "radio",
    options: [
      { value: "none", label: "No AI tools in use", points: 10 },
      { value: "experimenting", label: "Individual employees experimenting", points: 30 },
      { value: "pilots", label: "Running structured pilots", points: 60 },
      { value: "production", label: "Multiple AI tools in production", points: 90 },
    ],
  },
  {
    question: "How would you describe your team's AI readiness?",
    type: "radio",
    options: [
      { value: "skeptical", label: "Skeptical or resistant to AI", points: 15 },
      { value: "curious", label: "Curious but inexperienced", points: 40 },
      { value: "champions", label: "Some AI champions leading adoption", points: 70 },
      { value: "native", label: "AI-native culture with strong expertise", points: 95 },
    ],
  },
  {
    question: "How complex are your typical workflows and approval processes?",
    type: "radio",
    options: [
      { value: "simple", label: "Simple, few dependencies", points: 80 },
      { value: "moderate", label: "Moderate complexity, some approvals needed", points: 60 },
      { value: "complex", label: "Complex with multiple stakeholders", points: 40 },
      { value: "very_complex", label: "Highly complex, regulatory constraints", points: 25 },
    ],
  },
  {
    question: "How would you describe your current tech stack?",
    type: "radio",
    options: [
      { value: "basic", label: "Basic - mostly manual tools", points: 20 },
      { value: "moderate", label: "Moderate - some connected tools", points: 50 },
      { value: "advanced", label: "Advanced - well-integrated systems", points: 80 },
      { value: "enterprise", label: "Enterprise - comprehensive tech stack", points: 100 },
    ],
  },
  {
    question: "How well documented are your current processes?",
    type: "radio",
    options: [
      { value: "none", label: "Not documented", points: 20 },
      { value: "some", label: "Some key processes documented", points: 50 },
      { value: "most", label: "Most processes documented", points: 80 },
      { value: "all", label: "Fully documented with SOPs", points: 100 },
    ],
  },
  {
    question: "What's your compliance and security requirements level?",
    type: "radio",
    options: [
      { value: "minimal", label: "Minimal compliance requirements", points: 80 },
      { value: "moderate", label: "Moderate (GDPR, basic security)", points: 60 },
      { value: "high", label: "High (SOC 2, HIPAA, or similar)", points: 40 },
      { value: "critical", label: "Critical (Financial, Healthcare, Gov)", points: 25 },
    ],
  },
  {
    question: "What's your budget readiness for automation investment?",
    type: "radio",
    options: [
      { value: "exploring", label: "Just exploring options", points: 20 },
      { value: "small", label: "Small pilot budget available", points: 50 },
      { value: "medium", label: "Medium budget approved", points: 80 },
      { value: "large", label: "Significant budget allocated", points: 100 },
    ],
  },
  {
    question: "What's your timeline for implementation?",
    type: "radio",
    options: [
      { value: "researching", label: "Still researching (6+ months)", points: 20 },
      { value: "planning", label: "Planning phase (3-6 months)", points: 50 },
      { value: "ready", label: "Ready soon (1-3 months)", points: 80 },
      { value: "urgent", label: "Need to start immediately", points: 100 },
    ],
  },
  {
    question: "In one sentence, what's the most painful, repetitive work in your week?",
    type: "text",
  },
];

const QuizPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [email, setEmail] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showEmailGate, setShowEmailGate] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleAnswer = (value: string) => {
    const currentQuestion = quizSteps[currentStep];
    if (currentQuestion.type === "checkbox") {
      const currentAnswers = (answers[currentStep] as string[]) || [];
      const newAnswers = currentAnswers.includes(value)
        ? currentAnswers.filter(v => v !== value)
        : [...currentAnswers, value];
      setAnswers({ ...answers, [currentStep]: newAnswers });
    } else {
      // Single-select: update answer and auto-advance after short delay
      setAnswers({ ...answers, [currentStep]: value });
      setTimeout(() => {
        handleNext();
      }, 300);
    }
  };

  const calculateScore = () => {
    let totalPoints = 0;
    let maxPoints = 0;
    
    Object.entries(answers).forEach(([stepIndex, answer]) => {
      const step = quizSteps[parseInt(stepIndex)];
      
      // Skip text questions in scoring
      if (step.type === "text") return;
      
      if (step.type === "checkbox" && Array.isArray(answer)) {
        answer.forEach(val => {
          const option = step.options?.find((opt) => opt.value === val);
          if (option) totalPoints += option.points;
        });
        maxPoints += Math.max(...(step.options?.map(opt => opt.points) || [0])) * 2;
      } else if (typeof answer === "string") {
        const option = step.options?.find((opt) => opt.value === answer);
        if (option) totalPoints += option.points;
        maxPoints += Math.max(...(step.options?.map(opt => opt.points) || [0]));
      }
    });
    
    return Math.round((totalPoints / maxPoints) * 100);
  };

  const handleNext = () => {
    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowEmailGate(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmitEmail = async () => {
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const score = calculateScore();
      
      // Prepare answers for database
      const primaryProcesses = Array.isArray(answers[4]) ? answers[4] : [];
      const systems = Array.isArray(answers[3]) ? answers[3] : [];
      
      // Store quiz response
      const { error: dbError } = await supabase.from("quiz_responses").insert({
        email,
        business_type: answers[0] as string,
        team_size: parseInt((answers[1] as string).split("-")[0]) || 0,
        manual_hours_per_week: parseInt((answers[2] as string).split("-")[0]) || 0,
        primary_processes: primaryProcesses,
        data_infrastructure: answers[6] as string,
        current_ai_adoption: answers[7] as string,
        team_ai_readiness: answers[8] as string,
        workflow_complexity: answers[9] as string,
        tech_stack_maturity: answers[10] as string,
        process_documentation: answers[11] as string,
        compliance_requirements: answers[12] as string,
        budget_readiness: answers[13] as string,
        timeline: answers[14] as string,
        readiness_score: score,
      });

      if (dbError) throw dbError;

      // Send results email
      const { error: emailError } = await supabase.functions.invoke("send-quiz-results", {
        body: { email, score, answers, quizSteps },
      });

      if (emailError) throw emailError;

      setShowResults(true);
      toast({
        title: "Success!",
        description: "Check your email for detailed results and recommendations.",
      });
    } catch (error: any) {
      console.error("Error submitting quiz:", error);
      toast({
        title: "Error",
        description: "Failed to submit quiz. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const score = calculateScore();
  const progress = ((currentStep + 1) / quizSteps.length) * 100;
  const currentQuestion = quizSteps[currentStep];

  const calculateDimensionalScores = () => {
    // Culture: questions 8, 11, 13, 14 (team AI readiness, documentation, budget, timeline)
    // Technology: questions 6, 10, 12 (data infrastructure, tech stack, compliance)
    // Process: questions 1, 2, 4, 9 (team size, manual hours, processes, workflow complexity)
    
    const culturalIndices = [8, 11, 13, 14];
    const technicalIndices = [6, 10, 12];
    const useCaseIndices = [1, 2, 4, 9];
    
    const calculateDimension = (indices: number[]) => {
      let total = 0;
      let max = 0;
      indices.forEach(i => {
        const answer = answers[i];
        const step = quizSteps[i];
        
        // Skip text questions
        if (step.type === "text") return;
        
        if (Array.isArray(answer)) {
          answer.forEach(val => {
            const opt = step.options?.find(o => o.value === val);
            if (opt) total += opt.points;
          });
          max += Math.max(...(step.options?.map(o => o.points) || [0])) * 2;
        } else if (typeof answer === "string") {
          const opt = step.options?.find(o => o.value === answer);
          if (opt) total += opt.points;
          max += Math.max(...(step.options?.map(o => o.points) || [0]));
        }
      });
      return max > 0 ? Math.round((total / max) * 100) : 0;
    };
    
    return {
      cultural: calculateDimension(culturalIndices),
      technical: calculateDimension(technicalIndices),
      useCase: calculateDimension(useCaseIndices),
    };
  };

  const getScoreLevel = (score: number) => {
    if (score >= 70) return { level: "AI Ready", color: "text-green-600", description: "You have the infrastructure and culture to scale AI automation" };
    if (score >= 40) return { level: "AI Pilot", color: "text-blue-600", description: "Ready for structured pilots and proof-of-concepts" };
    return { level: "AI Explorer", color: "text-orange-600", description: "Early exploration phase - building foundations" };
  };

  const getDimensionNarrative = (dim: number, label: string) => {
    if (dim >= 75) return `${label} is a strength – you're above the typical company we see.`;
    if (dim >= 45) return `${label} is workable but there are clear gaps to address.`;
    return `${label} is your main blocker – this is where early investment will pay off fastest.`;
  };

  const getBenchmarkCopy = (score: number) => {
    if (score >= 70) return "You're ahead of most businesses we see – only a minority are this ready to scale agents.";
    if (score >= 40) return "You're roughly in line with the majority: experimenting or running pilots but not fully scaled yet.";
    return "You're earlier than most on the journey, which is fine – this is the right time to lay foundations.";
  };

  const getBalanceScore = (dims: { cultural: number; technical: number; useCase: number }) => {
    const vals = [dims.cultural, dims.technical, dims.useCase];
    const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
    const variance = vals.reduce((a, b) => a + Math.pow(b - avg, 2), 0) / vals.length;
    const maxVariance = Math.pow(100, 2);
    const balance = Math.max(0, 100 - Math.round((variance / maxVariance) * 100));
    return balance;
  };

  const getQuickWins = () => {
    const wins: Array<{ title: string; description: string; impact: string }> = [];
    const processes = Array.isArray(answers[4]) ? answers[4] : [];
    const systems = Array.isArray(answers[3]) ? answers[3] : [];
    const goal = answers[5] as string || "save_time";
    const manualHours = answers[2] as string || "0-5";
    const dataInfra = answers[6] as string || "siloed";
    
    // Build "because" clause
    const goalMap: Record<string, string> = {
      save_time: "you want to reduce time spent on repetitive work",
      scale_revenue: "you want to scale revenue without adding headcount",
      improve_quality: "you want to improve quality and consistency",
      reduce_costs: "you want to reduce operating costs",
    };
    const becauseClause = goalMap[goal] || "you're exploring automation";
    
    // Customer Support automation
    if (processes.includes("customer_support")) {
      wins.push({
        title: "AI Customer Support Agent",
        description: `Because ${becauseClause} and you selected customer support as a major time sink, we recommend deploying an AI agent to handle tier-1 tickets and FAQs.`,
        impact: "40-60% reduction in support tickets once live"
      });
    }
    
    // Document generation
    if (processes.includes("document_generation")) {
      const systemContext = systems.includes("crm") ? "connected to your CRM" : "using your templates";
      wins.push({
        title: "Automated Document Generation",
        description: `Because ${becauseClause}, automate report and proposal generation ${systemContext} to eliminate manual formatting.`,
        impact: manualHours.startsWith("30+") || manualHours.startsWith("15-30") ? "10-20 hours saved per week" : "5-10 hours saved per week"
      });
    }
    
    // Data entry automation
    if (processes.includes("data_entry")) {
      const systemContext = systems.includes("spreadsheets") ? "and sync to your spreadsheets" : "into your systems";
      wins.push({
        title: "Intelligent Data Processing",
        description: `Because ${becauseClause}, extract data from emails and PDFs automatically ${systemContext} using AI.`,
        impact: "70-90% reduction in manual data entry"
      });
    }
    
    // Email automation for high manual hours
    if (wins.length < 3 && (manualHours.startsWith("15-30") || manualHours.startsWith("30+"))) {
      const emailContext = systems.includes("gmail") ? "in Gmail" : "in your inbox";
      wins.push({
        title: "Email & Communication Automation",
        description: `Because ${becauseClause}, automate email drafting and categorization ${emailContext} to save hours daily.`,
        impact: "5-10 hours saved per week per person"
      });
    }
    
    // Research automation
    if (wins.length < 3 && processes.includes("research")) {
      wins.push({
        title: "AI Research Assistant",
        description: `Because ${becauseClause}, deploy an agent to monitor industry news and synthesize research reports automatically.`,
        impact: "5-15 hours saved per week"
      });
    }
    
    // Default workflow automation if we don't have enough
    if (wins.length === 0) {
      wins.push({
        title: "Workflow Automation",
        description: `Because ${becauseClause}, start by connecting your existing tools to automate repetitive cross-system tasks.`,
        impact: "Start saving time immediately"
      });
    }
    
    return wins.slice(0, 3);
  };

  if (showResults) {
    const scoreLevel = getScoreLevel(score);
    const dimensions = calculateDimensionalScores();
    const balance = getBalanceScore(dimensions);
    const quickWins = getQuickWins();
    
    return (
      <div className="min-h-screen relative">
        <AbstractBackground />
        <Header />
        <section className="py-24 pt-32 relative z-10">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <CheckCircle className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h1 className="text-4xl md:text-5xl font-serif font-normal mb-4">
                Your AI Readiness Audit Results
              </h1>
              <p className="text-lg text-muted-foreground font-serif mb-8">
                Here's your readiness score and top automation opportunities. We've sent detailed recommendations to <strong>{email}</strong>.
              </p>

              <Card className="border border-border p-8 mb-8">
                <div className="mb-6">
                  <div className="text-6xl font-bold mb-2">{score}%</div>
                  <div className={`text-2xl font-serif mb-2 ${scoreLevel.color}`}>
                    {scoreLevel.level}
                  </div>
                  <p className="text-sm text-muted-foreground font-serif mb-2">
                    {scoreLevel.description}
                  </p>
                  <p className="text-xs text-muted-foreground font-serif mb-6">
                    {getBenchmarkCopy(score)}
                  </p>
                  
                  <RadarChart 
                    cultural={dimensions.cultural}
                    technical={dimensions.technical}
                    useCase={dimensions.useCase}
                  />
                  
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{dimensions.cultural}%</div>
                      <div className="text-xs text-muted-foreground font-serif">Culture</div>
                      <div className="text-[10px] text-muted-foreground font-serif">Team readiness & buy-in</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{dimensions.technical}%</div>
                      <div className="text-xs text-muted-foreground font-serif">Technology</div>
                      <div className="text-[10px] text-muted-foreground font-serif">Infrastructure & integration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{dimensions.useCase}%</div>
                      <div className="text-xs text-muted-foreground font-serif">Process</div>
                      <div className="text-[10px] text-muted-foreground font-serif">Opportunity mapping</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-3 text-left text-sm text-muted-foreground font-serif">
                    <p><strong>Culture:</strong> {getDimensionNarrative(dimensions.cultural, "Culture")}</p>
                    <p><strong>Technology:</strong> {getDimensionNarrative(dimensions.technical, "Technology")}</p>
                    <p><strong>Process:</strong> {getDimensionNarrative(dimensions.useCase, "Process & use cases")}</p>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1 font-mono">
                      <span>Balanced foundations</span>
                      <span>{balance}%</span>
                    </div>
                    <Progress value={balance} className="h-1.5" />
                    <p className="text-[11px] text-muted-foreground font-serif mt-1">
                      A high score here means culture, tech, and processes are developing together rather than one outpacing the others.
                    </p>
                  </div>
                </div>
              </Card>

              {quickWins.length > 0 && (
                <Card className="border border-border p-8 mb-8 text-left">
                  <h2 className="text-2xl font-serif font-medium mb-6 text-center">Top Automation Opportunities</h2>
                  <div className="space-y-6">
                    {quickWins.map((win, index) => (
                      <div key={index} className="border-b border-border last:border-0 pb-6 last:pb-0">
                        <h3 className="text-lg font-mono font-medium mb-2">{win.title}</h3>
                        <p className="text-sm text-muted-foreground font-serif mb-2">{win.description}</p>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono">
                          <TrendingUp className="w-3 h-3" />
                          {win.impact}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground font-serif mt-6 text-center">
                    Check your email for detailed implementation steps, tool recommendations, and ROI estimates.
                  </p>
                </Card>
              )}

              <Button
                size="lg"
                onClick={() => (window.location.href = "/#contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 h-12 font-mono"
              >
                Book a consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (showEmailGate) {
    const scoreLevel = getScoreLevel(score);
    const dimensions = calculateDimensionalScores();
    
    return (
      <div className="min-h-screen relative">
        <AbstractBackground />
        <Header />
        <section className="py-24 pt-32 relative z-10">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <Card className="border border-border p-8 text-center mb-8">
                <h2 className="text-3xl font-serif font-normal mb-4">Your Readiness Score</h2>
                <div className="mb-6">
                  <div className="text-6xl font-bold mb-2">{score}%</div>
                  <div className={`text-2xl font-serif mb-2 ${scoreLevel.color}`}>
                    {scoreLevel.level}
                  </div>
                  <p className="text-sm text-muted-foreground font-serif mb-6">
                    {scoreLevel.description}
                  </p>
                  
                  <RadarChart 
                    cultural={dimensions.cultural}
                    technical={dimensions.technical}
                    useCase={dimensions.useCase}
                  />
                  
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{dimensions.cultural}%</div>
                      <div className="text-xs text-muted-foreground font-serif">Culture</div>
                      <div className="text-[10px] text-muted-foreground font-serif">Team readiness & buy-in</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{dimensions.technical}%</div>
                      <div className="text-xs text-muted-foreground font-serif">Technology</div>
                      <div className="text-[10px] text-muted-foreground font-serif">Infrastructure & integration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{dimensions.useCase}%</div>
                      <div className="text-xs text-muted-foreground font-serif">Process</div>
                      <div className="text-[10px] text-muted-foreground font-serif">Opportunity mapping</div>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground font-serif">
                  Unlock your detailed automation roadmap with specific opportunities, tool recommendations, and ROI projections.
                </p>
              </Card>

              <Card className="border border-border p-8">
                <h3 className="text-xl font-medium mb-4 font-mono">
                  Get Your Free Audit Results
                </h3>
                <p className="text-sm text-muted-foreground font-serif mb-6">
                  Receive your complete AI readiness report with:
                </p>
                <ul className="text-sm text-muted-foreground font-serif mb-6 space-y-2 text-left">
                  <li>• Custom automation use cases for your industry</li>
                  <li>• ROI estimates and time savings projections</li>
                  <li>• Tool and platform recommendations</li>
                  <li>• 90-day implementation roadmap</li>
                  <li>• Cultural, technical, and process readiness breakdown</li>
                </ul>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email" className="font-mono">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      onClick={() => setShowEmailGate(false)}
                      className="flex-1"
                      disabled={isSubmitting}
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button
                      onClick={handleSubmitEmail}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Get My Results
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <AbstractBackground />
      <Header />
      <section className="py-24 pt-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif font-normal mb-4">
                Free AI Readiness Audit
              </h1>
              <p className="text-lg text-muted-foreground font-serif">
                2-minute assessment • Instant results • Custom automation opportunities for your business
              </p>
            </div>

            <div className="mb-8">
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-muted-foreground text-center mt-2 font-mono">
                Question {currentStep + 1} of {quizSteps.length}
              </p>
            </div>

            <Card className="border border-border p-8 min-h-[500px] flex flex-col">
              <h2 className="text-2xl font-serif font-normal mb-6">{currentQuestion.question}</h2>

              <div className="flex-1">
                {currentQuestion.type === "text" ? (
                  <div className="space-y-4">
                    <Input
                      value={(answers[currentStep] as string) || ""}
                      onChange={(e) => setAnswers({ ...answers, [currentStep]: e.target.value })}
                      placeholder="e.g. Manually updating the CRM after every client meeting"
                      className="mt-2"
                    />
                  </div>
                ) : currentQuestion.type === "radio" ? (
                <RadioGroup
                  value={answers[currentStep] as string || ""}
                  onValueChange={handleAnswer}
                  className="space-y-4"
                >
                  {currentQuestion.options?.map((option) => (
                    <div
                      key={option.value}
                      className={`flex items-center space-x-3 p-4 rounded-lg border transition-colors cursor-pointer ${
                        answers[currentStep] === option.value
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => handleAnswer(option.value)}
                    >
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label
                        htmlFor={option.value}
                        className="flex-1 cursor-pointer font-serif"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              ) : (
                <div className="space-y-4">
                  {currentQuestion.options?.map((option) => {
                    const isChecked = (answers[currentStep] as string[] || []).includes(option.value);
                    return (
                      <div
                        key={option.value}
                        className={`flex items-center space-x-3 p-4 rounded-lg border transition-colors cursor-pointer ${
                          isChecked
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => handleAnswer(option.value)}
                      >
                        <Checkbox
                          checked={isChecked}
                          id={option.value}
                        />
                        <Label
                          className="flex-1 cursor-pointer font-serif"
                        >
                          {option.label}
                        </Label>
                      </div>
                    );
                  })}
                </div>
              )}
              </div>

              <div className="flex gap-4 mt-8">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className="flex-1"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={
                    !answers[currentStep] || 
                    (Array.isArray(answers[currentStep]) && (answers[currentStep] as string[]).length === 0) ||
                    (currentQuestion.type === "text" && !(answers[currentStep] as string)?.trim())
                  }
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {currentStep === quizSteps.length - 1 ? "See Results" : "Next"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default QuizPage;