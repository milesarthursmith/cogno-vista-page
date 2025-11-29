import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Wrench, TrendingUp } from "lucide-react";
import AbstractBackground from "@/components/AbstractBackground";
import airopsLogo from "@/assets/airops.png";
import clayLogo from "@/assets/clay.png";
import googleAdsLogo from "@/assets/google_ads.png";
import googleCloudLogo from "@/assets/google_cloud.png";
import metaAdsLogo from "@/assets/meta_ads.png";
import n8nLogo from "@/assets/n8n.png";
import relevanceAiLogo from "@/assets/relevance_ai.png";
import salesforceLogo from "@/assets/salesforce.png";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      <AbstractBackground variant="hero" />
      
      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] mb-6">
              We automate the busywork so you can focus on the <span className="text-primary">human stuff</span>.
            </h1>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-serif">From sales, marketing and ops - we design and build AI agents, automations and workflows that take repetitive work off your team.</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 h-12 font-mono">
                Book a 15-minute call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-lg px-8 h-12 border-border hover:bg-secondary font-mono">
                See examples
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            {/* Thin connecting lines between cards */}
            <svg className="absolute left-0 top-0 w-full h-full pointer-events-none" style={{
            zIndex: 0
          }} viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <marker id="arrow-small" markerWidth="4" markerHeight="4" refX="3" refY="2" orient="auto">
                  <polygon points="0 0, 4 2, 0 4" fill="hsl(var(--muted-foreground))" opacity="0.4" />
                </marker>
              </defs>
              {/* Line from automation to engineering (left side) */}
              <line x1="16" y1="25" x2="16" y2="70" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.4" markerEnd="url(#arrow-small)" />
              {/* Line from automation to growth (top left to right) */}
              <line x1="32" y1="20" x2="68" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.4" markerEnd="url(#arrow-small)" />
              {/* Line from engineering to growth (bottom left to right) */}
              <line x1="32" y1="75" x2="68" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.4" markerEnd="url(#arrow-small)" />
            </svg>

            <div className="relative w-full aspect-square mx-0">
              {/* Floating cards simulation - minimal movement */}
              <div className="absolute top-12 left-0 bg-card border border-border rounded-xl p-4 shadow-sm w-64 animate-float-minimal">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Automation</div>
                    <div className="text-sm font-medium">AI Agents & Workflows</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 left-0 bg-card border border-border rounded-xl p-4 shadow-sm w-64 animate-float-minimal px-[20px]">
                <div className="flex items-center justify-start gap-[12px] mx-0 px-0">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Engineering</div>
                    <div className="text-sm font-medium">GTM Engineering</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-[40%] -translate-y-1/2 right-0 bg-card border border-border rounded-xl p-4 shadow-sm w-64 animate-float-minimal">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Growth</div>
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
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <img src={relevanceAiLogo} alt="Relevance AI" className="h-8 object-contain" />
            <img src={n8nLogo} alt="n8n" className="h-8 object-contain" />
            <img src={clayLogo} alt="Clay" className="h-8 object-contain" />
            <img src={airopsLogo} alt="AirOps" className="h-8 object-contain" />
            <img src={salesforceLogo} alt="Salesforce" className="h-8 object-contain" />
            <img src={googleCloudLogo} alt="Google Cloud" className="h-8 object-contain" />
            <span className="text-sm text-muted-foreground font-mono">+ more</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-minimal {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float-minimal {
          animation: float-minimal 4s ease-in-out infinite;
        }
      `}</style>
    </section>;
};
export default Hero;