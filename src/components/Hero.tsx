import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              We build scalable AI agents, workflows and GTM systems that replace repetitive, manual work — not people.
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Scale your sales, marketing and operations{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">without adding headcount</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              We design and build AI agents, automations and workflows that take repetitive work off your team so they can spend more time with customers and less time in admin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 h-14 text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Book a 15-minute call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-xl px-8 h-14 text-lg border-border hover:bg-muted transition-all"
              >
                See example agents
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Floating cards simulation */}
              <div className="absolute top-0 right-0 bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-4 shadow-2xl w-48 animate-float">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                    <div className="w-4 h-4 rounded bg-blue-500" />
                  </div>
                  <div className="text-sm font-medium">Input</div>
                </div>
              </div>

              <div className="absolute top-24 left-1/2 -translate-x-1/2 bg-primary/10 backdrop-blur-xl border border-primary/30 rounded-2xl p-4 shadow-2xl shadow-primary/10 w-56 animate-float-delayed">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/30 flex items-center justify-center border border-primary/40">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Machine Learning</div>
                    <div className="text-sm font-medium">Fraud Prediction</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-48 left-0 bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-4 shadow-2xl w-48 animate-float-slow">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
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
        <div className="mt-24 pt-12 border-t border-border/50">
          <p className="text-center text-sm text-muted-foreground mb-8">Tools & platforms we work with</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
            <div className="text-2xl font-bold text-foreground">Relevance AI</div>
            <div className="text-2xl font-bold text-foreground">n8n</div>
            <div className="text-2xl font-bold text-foreground">Google Cloud</div>
            <div className="text-2xl font-bold text-foreground">Clay</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(-50%, 0px); }
          50% { transform: translate(-50%, -25px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
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
