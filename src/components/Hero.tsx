import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      
      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] mb-6">
              AI consulting <span className="text-muted-foreground">for SaaS and B2B teams who want</span> practical, production-ready systems <span className="text-muted-foreground">— not prototypes.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We design and build AI agents, automations and workflows that take repetitive work off your team so they can spend more time with customers and less time in admin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 h-12"
              >
                Book a 15-minute call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-lg px-8 h-12 border-border hover:bg-secondary"
              >
                See example agents
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            {/* Animated growth line */}
            <svg 
              className="absolute left-0 top-0 w-full h-full pointer-events-none" 
              style={{ zIndex: 0 }}
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M 5 95 Q 20 80, 35 70 T 65 45 T 95 15"
                fill="none"
                stroke="hsl(225, 100%, 60%)"
                strokeWidth="1"
                opacity="0.4"
                strokeDasharray="300"
                strokeDashoffset="300"
                className="animate-draw-line"
              />
            </svg>

            <div className="relative w-full aspect-square">
              {/* Floating cards simulation */}
              <div className="absolute top-0 right-0 bg-card border border-border rounded-xl p-4 shadow-sm w-56 animate-float">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-foreground" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Service 01</div>
                    <div className="text-sm font-medium">AI Agents & Workflows</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-24 left-1/2 -translate-x-1/2 bg-card border border-border rounded-xl p-4 shadow-sm w-56 animate-float-delayed">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-foreground" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Service 02</div>
                    <div className="text-sm font-medium">GTM Engineering</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-48 left-0 bg-card border border-border rounded-xl p-4 shadow-sm w-56 animate-float-slow">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-foreground" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Service 03</div>
                    <div className="text-sm font-medium">AI-Powered Marketing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo section */}
        <div className="mt-32 pt-12 border-t border-border">
          <p className="text-center text-sm text-muted-foreground mb-8">Tools & platforms we work with</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            <div className="text-xl font-medium text-foreground">Relevance AI</div>
            <div className="text-xl font-medium text-foreground">n8n</div>
            <div className="text-xl font-medium text-foreground">Google Cloud</div>
            <div className="text-xl font-medium text-foreground">Clay</div>
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
        @keyframes draw-line {
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-draw-line {
          animation: draw-line 3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
