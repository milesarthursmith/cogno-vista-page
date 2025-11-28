import { Search, Layers, Wrench, Shield, TrendingUp } from "lucide-react";
const steps = [{
  icon: Search,
  title: "Discovery & Audit",
  description: "We map your current GTM motion: tools, data sources, manual processes, and where reps or marketers are losing time."
}, {
  icon: Layers,
  title: "System Architecture",
  description: "We design the agent ecosystem and workflows: which agents we need, what they can safely own, and where humans stay in the loop."
}, {
  icon: Wrench,
  title: "Build & Integrate",
  description: "Implement agents and workflows using your existing stack (GCP, BigQuery, n8n, Salesforce, Gong, Relevance AI, Clay, Zapier, etc.)."
}, {
  icon: Shield,
  title: "Deploy & Monitor",
  description: "Put guardrails, rules of engagement and evaluation in place so the system is safe, measurable and trustworthy."
}, {
  icon: TrendingUp,
  title: "Scale & Iterate",
  description: "Once the first use-case is working, we extend into adjacent parts of your GTM engine (additional agents, new teams, more data sources)."
}];
const HowItWorks = () => {
  return <section className="py-24 bg-background">
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">How We Do It</h2>
            <p className="text-lg text-muted-foreground">
              A structured approach from discovery to scale
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => <div key={index} className="flex gap-6 items-start bg-card border border-border rounded-xl p-6">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-lg bg-secondary text-foreground flex items-center justify-center font-medium">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="h-5 w-5 text-foreground" />
                    <h3 className="text-xl font-serif font-medium">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>)}
          </div>

          <p className="text-muted-foreground mt-12">
            This approach works for <span className="text-foreground">SMB and mid-market companies</span> as well as specific programs inside larger enterprises.
          </p>
        </div>
      </div>
    </section>;
};
export default HowItWorks;