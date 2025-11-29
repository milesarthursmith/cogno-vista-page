import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface QuizResultsRequest {
  email: string;
  score: number;
  answers: Record<number, string>;
}

const getRecommendations = (score: number, answers: Record<number, string>) => {
  if (score >= 80) {
    return {
      level: "Highly Ready",
      message: "Your team is in an excellent position to implement AI automation.",
      recommendations: [
        "Start with high-impact areas like email triage and data enrichment",
        "Build a pilot program with 2-3 automated workflows",
        "Expected ROI within 2-3 months of implementation",
        "Consider comprehensive agent orchestration across departments",
      ],
      nextSteps: [
        "Book a strategy call to map your automation roadmap",
        "Identify the top 3 processes to automate first",
        "Review tech stack integration requirements",
      ],
    };
  } else if (score >= 60) {
    return {
      level: "Ready",
      message: "You have a solid foundation for AI automation with some preparation needed.",
      recommendations: [
        "Focus on documenting key processes before automation",
        "Start with single-workflow pilots to prove value",
        "Expected ROI within 3-4 months",
        "Build internal buy-in with quick wins",
      ],
      nextSteps: [
        "Document your top 3 manual processes in detail",
        "Book a consultation to discuss integration options",
        "Identify stakeholders and build your automation team",
      ],
    };
  } else if (score >= 40) {
    return {
      level: "Moderately Ready",
      message: "You'll benefit from some foundational work before implementing automation.",
      recommendations: [
        "Focus on process documentation and standardization first",
        "Consider small proof-of-concept projects",
        "Expected ROI within 4-6 months after preparation",
        "Build technical infrastructure and team capabilities",
      ],
      nextSteps: [
        "Audit your current processes and identify repetitive tasks",
        "Evaluate your tech stack maturity and integration needs",
        "Schedule an exploratory call to discuss readiness building",
      ],
    };
  } else {
    return {
      level: "Early Stage",
      message: "Focus on building your foundation before diving into automation.",
      recommendations: [
        "Start by documenting core workflows and processes",
        "Build internal consensus around automation goals",
        "Invest in team training and change management",
        "Consider starting with no-code automation tools",
      ],
      nextSteps: [
        "Map out your team's most time-consuming manual tasks",
        "Research automation case studies in your industry",
        "Join our workshop series on automation readiness",
      ],
    };
  }
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, score, answers }: QuizResultsRequest = await req.json();

    if (!email || !email.includes("@")) {
      throw new Error("Invalid email address");
    }

    const { level, message, recommendations, nextSteps } = getRecommendations(score, answers);

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "humanstuff.ai <onboarding@resend.dev>",
        to: [email],
        subject: `Your Automation Readiness Score: ${score}% - ${level}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0;">
                <h1 style="color: white; margin: 0; font-size: 32px;">Your Readiness Score</h1>
                <div style="font-size: 72px; font-weight: bold; color: white; margin: 20px 0;">${score}%</div>
                <div style="font-size: 24px; color: white;">${level}</div>
              </div>
              
              <div style="background: #f9fafb; padding: 30px 20px; border-radius: 0 0 8px 8px;">
                <p style="font-size: 18px; margin-bottom: 20px;">${message}</p>
                
                <h2 style="color: #111; margin-top: 30px; margin-bottom: 15px;">Personalized Recommendations</h2>
                <ul style="list-style: none; padding: 0;">
                  ${recommendations.map(rec => `
                    <li style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                      <span style="color: #667eea; margin-right: 8px;">✓</span> ${rec}
                    </li>
                  `).join('')}
                </ul>
                
                <h2 style="color: #111; margin-top: 30px; margin-bottom: 15px;">Next Steps</h2>
                <ol style="padding-left: 20px; color: #666;">
                  ${nextSteps.map(step => `<li style="margin-bottom: 10px;">${step}</li>`).join('')}
                </ol>
                
                <div style="margin-top: 40px; padding: 20px; background: white; border: 2px solid #667eea; border-radius: 8px; text-align: center;">
                  <h3 style="margin-top: 0; color: #111;">Ready to get started?</h3>
                  <p style="color: #666; margin-bottom: 20px;">Book a 15-minute consultation to discuss your automation roadmap.</p>
                  <a href="https://yoursite.com/#contact" style="display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600;">Book a Call</a>
                </div>
                
                <p style="margin-top: 30px; font-size: 14px; color: #999; text-align: center;">
                  This email was sent because you completed the Agent Readiness Quiz at humanstuff.ai
                </p>
              </div>
            </body>
          </html>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      throw new Error(`Resend API error: ${errorText}`);
    }

    const emailResult = await emailResponse.json();

    console.log("Quiz results email sent successfully:", emailResult);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
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

serve(handler);