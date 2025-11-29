import { CheckCircle2 } from "lucide-react";
const achievements = ["Data pipelines that save 100+ hours per month of manual sales call analysis", "AI BDR and outreach programs that reduced Cost per SQL by 42%", "Conversation analytics platforms used by executive leadership and product teams", "Large-scale TAM mapping and enrichment initiatives", "Multi-agent outreach engines generating SQLs and Closed Won revenue"];
const Credibility = () => {
  return <section className="py-24 bg-secondary/30">
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">We've designed and shipped systems used by startups, SMBs and enterprises. </h2>
          
          <div className="space-y-4 mt-12">
            {achievements.map((achievement, index) => <div key={index} className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                <span className="text-base font-serif">{achievement}</span>
              </div>)}
          </div>
          
          
        </div>
      </div>
    </section>;
};
export default Credibility;