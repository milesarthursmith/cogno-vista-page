import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-accent-foreground mb-8 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              AI-Powered Business Transformation
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              The AI Decision Platform built for{" "}
              <span className="text-primary">control and scale</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Automate risk workflows, launch faster, and adapt instantly with agentic AI powering every decision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 h-14 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                See the Platform in Action
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-lg px-8 h-14 text-lg border-2 hover:bg-accent transition-all"
              >
                Platform Evaluation Guide
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Floating cards simulation */}
              <div className="absolute top-0 right-0 bg-card border border-border rounded-2xl p-4 shadow-lg w-48 animate-float">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <div className="w-4 h-4 rounded bg-blue-500" />
                  </div>
                  <div className="text-sm font-medium">Input</div>
                </div>
              </div>

              <div className="absolute top-24 left-1/2 -translate-x-1/2 bg-primary/10 border border-primary/20 rounded-2xl p-4 shadow-lg w-56">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Machine Learning</div>
                    <div className="text-sm font-medium">Fraud Prediction</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-48 left-0 bg-card border border-border rounded-2xl p-4 shadow-lg w-48">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                    <div className="w-4 h-4 rounded bg-purple-500" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Manual Review</div>
                    <div className="text-sm font-medium">Agent Inspection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo section */}
        <div className="mt-24 pt-12 border-t border-border">
          <p className="text-center text-sm text-muted-foreground mb-8">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            <div className="text-2xl font-bold text-muted-foreground">APCU</div>
            <div className="text-2xl font-bold text-muted-foreground">Jeeves</div>
            <div className="text-2xl font-bold text-muted-foreground">Access Finance</div>
            <div className="text-2xl font-bold text-muted-foreground">NuBank</div>
            <div className="text-2xl font-bold text-muted-foreground">Zilch</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
