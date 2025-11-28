import { Card } from "@/components/ui/card";
import { Building2, Rocket } from "lucide-react";

const Approach = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5" />
      
      <div className="container relative mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Tailored to Your Scale
            </h2>
            <p className="text-xl text-muted-foreground">
              Whether you're a growing SMB or an enterprise team, I adapt the approach to fit your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border border-border bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Rocket className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For SMB & Mid-Market Teams</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Start with a narrow, high-ROI workflow (e.g. meeting notes, lead enrichment, or outreach agent)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Fixed-scope project with a clear before/after metric (hours saved, SQLs created, response time)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Simple stack focused on what you already use</span>
                </li>
              </ul>
            </Card>

            <Card className="border border-border bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Building2 className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Enterprise Teams</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Work as a specialist alongside internal data/engineering teams</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Focused programs: win/loss analytics, agent pilots, GTM AI strategy, or internal tool builds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
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
