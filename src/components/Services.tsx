import { Card } from "@/components/ui/card";
import { Brain, BarChart3, Zap, Shield, Workflow, Cpu } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "AI Agents & Workflows",
    description: "Practical agents and automations that plug into the tools you already use.",
    details: [
      "Outreach agents (email, call, SMS, voice hand-offs)",
      "Data hygiene & enrichment agents",
      "Research & insight agents",
      "Knowledge retrieval (RAG) systems",
      "Win/loss and call analytics",
      "Guardrails, testing and ongoing evaluation"
    ],
    stack: "Relevance AI, n8n, Google Cloud, BigQuery, Salesforce, Gong, Clay, Zapier, APIs"
  },
  {
    icon: Zap,
    title: "GTM Engineering for Sales",
    description: "Use AI to make your sales team sharper, not just busier.",
    details: [
      "ICP mapping and lead sourcing",
      "Multi-level company and contact enrichment",
      "Sales intelligence and win/loss insights",
      "Automated meeting notes and call summaries",
      "AI-assisted sales enablement"
    ],
    stack: "Designed for SMB and mid-market teams that don't have a full internal RevOps/AI function"
  },
  {
    icon: BarChart3,
    title: "AI-Powered Marketing",
    description: "Help your marketing team move faster without sacrificing strategy.",
    details: [
      "Asset generation (Google Ads, Meta, CRM sequences, landing page copy)",
      "SEO & PPC support agents",
      "Automated keyword/message extraction",
      "Message performance and impact analysis"
    ],
    stack: "All built with clear guardrails so outputs stay on-brand and fact-checked, not generic AI fluff"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 text-sm font-medium">
            Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            What I Build
          </h2>
          <p className="text-xl text-muted-foreground">
            Production-ready AI systems that integrate with your existing stack
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group border border-border bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t border-border/50">
                <p className="text-xs text-muted-foreground italic">{service.stack}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
