import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const AuditCta = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-background">
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">Free Resource</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">
            Get your free AI Readiness Audit
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 font-serif max-w-2xl mx-auto">
            Take our 2-minute assessment and receive a personalized report with actionable automation opportunities for your specific business.
          </p>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-3">
                <BarChart3 className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-sm font-mono font-medium mb-2">Your Readiness Score</h3>
              <p className="text-sm text-muted-foreground font-serif">See where you stand across culture, tech, and processes</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-3">
                <TrendingUp className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-sm font-mono font-medium mb-2">Custom Use Cases</h3>
              <p className="text-sm text-muted-foreground font-serif">Get specific automation ideas for your industry</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-3">
                <ArrowRight className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-sm font-mono font-medium mb-2">Next Steps</h3>
              <p className="text-sm text-muted-foreground font-serif">Actionable recommendations to get started</p>
            </div>
          </div>

          {/* CTA Button */}
          <Link to="/quiz">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 h-12 font-mono"
            >
              Take the free audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <p className="text-sm text-muted-foreground mt-4 font-serif">
            No credit card required • Takes 2 minutes • Instant results
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuditCta;
