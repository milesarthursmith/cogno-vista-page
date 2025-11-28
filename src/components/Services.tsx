import { Card } from "@/components/ui/card";
import { Brain, BarChart3, Zap, Shield, Workflow, Cpu } from "lucide-react";
const services = [{
  icon: Cpu,
  title: "AI Agents & Workflows",
  description: "Practical agents and automations that plug into the tools you already use.",
  details: ["Outreach agents (email, call, SMS, voice hand-offs)", "Data hygiene & enrichment agents", "Research & insight agents", "Knowledge retrieval (RAG) systems", "Win/loss and call analytics", "Guardrails, testing and ongoing evaluation"],
  stack: "Relevance AI, n8n, Google Cloud, BigQuery, Salesforce, Gong, Clay, Zapier, APIs"
}, {
  icon: Zap,
  title: "GTM Engineering for Sales",
  description: "Use AI to make your sales team sharper, not just busier.",
  details: ["ICP mapping and lead sourcing", "Multi-level company and contact enrichment", "Sales intelligence and win/loss insights", "Automated meeting notes and call summaries", "AI-assisted sales enablement"],
  stack: "Designed for SMB and mid-market teams that don't have a full internal RevOps/AI function"
}, {
  icon: BarChart3,
  title: "AI-Powered Marketing",
  description: "Help your marketing team move faster without sacrificing strategy.",
  details: ["Asset generation (Google Ads, Meta, CRM sequences, landing page copy)", "SEO & PPC support agents", "Automated keyword/message extraction", "Message performance and impact analysis"],
  stack: "All built with clear guardrails so outputs stay on-brand and fact-checked, not generic AI fluff"
}];
const Services = () => {
  return <section id="services" className="py-24 bg-secondary/30">
      
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">What We Build</h2>
          <p className="text-lg text-muted-foreground">
            Production-ready AI systems that integrate with your existing stack
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl relative">
          {services.map((service, index) => <Card key={index} className="border border-border bg-card rounded-xl p-8 hover:shadow-md transition-shadow">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-2xl font-serif font-medium">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.details.map((detail, idx) => <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-foreground mt-1">•</span>
                    <span>{detail}</span>
                  </li>)}
              </ul>
            </Card>)}
        </div>
      </div>

      <style>{`
        @keyframes draw-line {
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-draw-line {
          animation: draw-line 2s ease-out forwards;
        }
      `}</style>
    </section>;
};
export default Services;