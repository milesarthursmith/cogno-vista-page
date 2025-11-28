import { Card } from "@/components/ui/card";
import { Building2, Rocket } from "lucide-react";

const Approach = () => {
  return (
    <section className="py-24 bg-secondary/30">
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">
              Tailored to Your Scale
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you're a growing SMB or an enterprise team, we adapt the approach to fit your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border border-border bg-card rounded-xl p-8">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-foreground">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-serif font-medium mb-4">For SMB & Mid-Market Teams</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1">•</span>
                  <span>Start with a narrow, high-ROI workflow (e.g. meeting notes, lead enrichment, or outreach agent)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1">•</span>
                  <span>Fixed-scope project with a clear before/after metric (hours saved, SQLs created, response time)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1">•</span>
                  <span>Simple stack focused on what you already use</span>
                </li>
              </ul>
            </Card>

            <Card className="border border-border bg-card rounded-xl p-8">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-foreground">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-serif font-medium mb-4">For Enterprise Teams</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1">•</span>
                  <span>Work as a specialist alongside internal data/engineering teams</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1">•</span>
                  <span>Focused programs: win/loss analytics, agent pilots, GTM AI strategy, or internal tool builds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1">•</span>
                  <span>Clear ownership boundaries and documentation so the solution can be handed over</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
