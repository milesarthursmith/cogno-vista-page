import { CheckCircle2 } from "lucide-react";

const achievements = [
  "Data pipelines that save 100+ hours per month of manual sales call analysis",
  "AI BDR and outreach programs that reduced Cost per SQL by 42%",
  "Conversation analytics platforms used by executive leadership and product teams",
  "Large-scale TAM mapping and enrichment initiatives",
  "Multi-agent outreach engines generating SQLs and Closed Won revenue"
];

const Credibility = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
      
      <div className="container relative mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-center">
            We've designed and shipped production systems used by global GTM teams
          </h2>
          
          <div className="space-y-4 mt-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3 bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-card/80 transition-all">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">{achievement}</span>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-muted-foreground text-center mt-12 leading-relaxed">
            These are examples from enterprise environments. We now apply the same thinking in a form that's accessible to{" "}
            <span className="text-foreground font-medium">SMBs and mid-market teams</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
