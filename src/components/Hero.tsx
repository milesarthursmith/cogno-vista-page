import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Wrench, TrendingUp } from "lucide-react";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      
      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] mb-6">Automate the boring stuff so you can focus on the human stuff.
            </h1>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-serif">From sales, marketing and ops - we design and build AI agents, automations and workflows that take repetitive work off your team.</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 h-12 font-mono">
                Book a 15-minute call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-lg px-8 h-12 border-border hover:bg-secondary font-mono">
                See example agents
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            {/* Animated growth line - jagged like TrendingUp icon */}
            <svg className="absolute left-0 top-0 w-full h-full pointer-events-none" style={{
            zIndex: 0
          }} viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M 5 95 L 15 95 L 15 85 L 25 85 L 25 75 L 35 75 L 35 65 L 45 65 L 45 50 L 55 50 L 55 40 L 65 40 L 65 30 L 75 30 L 75 20 L 85 20 L 85 10 L 95 10" fill="none" stroke="hsl(225, 100%, 60%)" strokeWidth="1.5" opacity="0.4" strokeDasharray="300" strokeDashoffset="300" className="animate-draw-line" />
            </svg>

            <div className="relative w-full aspect-square">
              {/* Floating cards simulation */}
              <div className="absolute top-0 right-0 bg-card border border-border rounded-xl p-4 shadow-sm w-56 animate-float">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                    <Bot className="w-4 h-4 text-foreground" />
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
                    <Wrench className="w-4 h-4 text-foreground" />
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
                    <TrendingUp className="w-4 h-4 text-foreground" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Service 03</div>
                    <div className="text-sm font-medium">AI-Powered Growth Marketing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo section */}
        <div className="mt-32 pt-12 border-t border-border">
          <p className="text-center text-sm text-muted-foreground mb-8 font-serif">Tools & platforms we work with</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            <div className="text-xl font-medium text-foreground">Relevance AI</div>
            <div className="text-xl font-medium text-foreground">n8n</div>
            <div className="text-xl font-medium text-foreground">Google Cloud</div>
            <div className="text-xl font-medium text-foreground">Clay</div>
            <div className="text-xl font-medium text-foreground">Salesforce</div>
            <div className="text-xl font-medium text-foreground">AirOps</div>
            <div className="text-xl font-medium text-foreground">Google Ads</div>
            <div className="text-xl font-medium text-foreground">Meta Ads</div>
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
    </section>;
};
export default Hero;
