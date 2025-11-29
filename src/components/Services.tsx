import { Card } from "@/components/ui/card";
import { Brain, BarChart3, Zap, Shield, Workflow, Cpu } from "lucide-react";
import AbstractBackground from "@/components/AbstractBackground";
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
  return <section id="services" className="py-24 bg-secondary/30 relative overflow-hidden">
      <AbstractBackground variant="services" />
      
      {/* Jagged growth line motif */}
      <svg className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-96 pointer-events-none" viewBox="0 0 100 40" preserveAspectRatio="none" style={{ zIndex: 1 }}>
        <path d="M 0 35 L 8 35 L 8 30 L 16 30 L 16 25 L 24 25 L 24 20 L 32 20 L 32 15 L 40 15 L 40 12 L 48 12 L 48 10 L 56 10 L 56 8 L 64 8 L 64 6 L 72 6 L 72 5 L 80 5 L 80 4 L 88 4 L 88 3 L 100 3" fill="none" stroke="hsl(225, 100%, 60%)" strokeWidth="1.5" opacity="0.2" strokeDasharray="200" strokeDashoffset="200" className="animate-draw-line" />
      </svg>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">What We Build</h2>
          <p className="text-lg text-muted-foreground font-serif">
            Production-ready AI systems that integrate with your existing stack
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl relative">
          {services.map((service, index) => <Card key={index} className="border border-border bg-card rounded-xl p-8 hover:shadow-md transition-shadow">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-2xl font-serif font-medium">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 font-serif">{service.description}</p>
              
              <ul className="space-y-2">
                {service.details.map((detail, idx) => <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2 font-serif">
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