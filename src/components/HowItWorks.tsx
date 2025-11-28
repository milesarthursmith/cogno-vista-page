import { Search, Layers, Wrench, Shield, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery & Audit",
    description: "We map your current GTM motion: tools, data sources, manual processes, and where reps or marketers are losing time."
  },
  {
    icon: Layers,
    title: "System Architecture",
    description: "We design the agent ecosystem and workflows: which agents we need, what they can safely own, and where humans stay in the loop."
  },
  {
    icon: Wrench,
    title: "Build & Integrate",
    description: "Implement agents and workflows using your existing stack (GCP, BigQuery, n8n, Salesforce, Gong, Relevance AI, Clay, Zapier, etc.)."
  },
  {
    icon: Shield,
    title: "Deploy & Monitor",
    description: "Put guardrails, rules of engagement and evaluation in place so the system is safe, measurable and trustworthy."
  },
  {
    icon: TrendingUp,
    title: "Scale & Iterate",
    description: "Once the first use-case is working, we extend into adjacent parts of your GTM engine (additional agents, new teams, more data sources)."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
      
      <div className="container relative mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 text-sm font-medium">
              Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              A structured approach from discovery to scale
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex gap-6 items-start bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all hover:-translate-y-1"
              >
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-12 text-lg">
            This approach works for <span className="text-foreground font-medium">SMB and mid-market companies</span> as well as specific programs inside larger enterprises.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
