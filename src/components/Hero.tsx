import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[radial-gradient(circle_at_top,_#171b2b_0,_#05060b_55%)]">
      
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
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 h-12">
                Book a 15-minute discovery call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-lg px-8 h-12 border-border hover:bg-secondary">
                See example agents
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full">
              {/* Stack Diagram */}
              <div className="bg-[radial-gradient(circle_at_top_left,_#16192b_0,_#05060b_55%)] rounded-[32px] border border-white/[0.06] shadow-[0_18px_40px_rgba(0,0,0,0.7)] p-8">
                <div className="flex items-baseline justify-between mb-7 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[rgba(123,92,255,0.16)] border border-[rgba(123,92,255,0.5)] text-[11px] font-medium uppercase tracking-wider text-[#d2caff]">
                      Humanize
                    </span>
                    <span className="text-base font-semibold uppercase tracking-wide text-white">
                      GTM Stack
                    </span>
                  </div>
                </div>

                <div className="relative grid grid-cols-3 gap-6 items-center">
                  {/* Vertical dotted line */}
                  <div className="absolute left-1/2 top-6 bottom-6 -translate-x-1/2 border-l-[1.5px] border-dotted border-[rgba(154,165,201,0.5)] opacity-80 animate-pulse-line" />

                  {/* Left Column */}
                  <div className="flex flex-col gap-5 z-10">
                    <div className="bg-[radial-gradient(circle_at_top_left,_#1f2238_0,_#101221_45%)] rounded-2xl p-4 border border-white/[0.03] shadow-[0_12px_30px_rgba(0,0,0,0.55)]">
                      <div className="text-[11px] uppercase tracking-wider text-[#a7b0c8] mb-1">Inputs</div>
                      <div className="text-sm font-semibold text-white mb-3">Leads & Signals</div>
                      <div className="flex flex-wrap gap-3">
                        <div className="logo-chip">
                          <span className="logo-icon bg-[#4285f4]">G</span>
                          <span className="text-[11px] text-[#a7b0c8]">Google Ads</span>
                        </div>
                        <div className="logo-chip">
                          <span className="logo-icon bg-[#0866ff]">M</span>
                          <span className="text-[11px] text-[#a7b0c8]">Meta</span>
                        </div>
                        <div className="logo-chip">
                          <span className="logo-icon bg-[#ff0080]">G</span>
                          <span className="text-[11px] text-[#a7b0c8]">Gong</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[radial-gradient(circle_at_top_left,_#1f2238_0,_#101221_45%)] rounded-2xl p-4 border border-white/[0.03] shadow-[0_12px_30px_rgba(0,0,0,0.55)]">
                      <div className="text-[11px] uppercase tracking-wider text-[#a7b0c8] mb-1">Enrichment</div>
                      <div className="text-sm font-semibold text-white mb-3">Data</div>
                      <div className="flex flex-wrap gap-3">
                        <div className="logo-chip">
                          <span className="logo-icon bg-[#1f9bff]">C</span>
                          <span className="text-[11px] text-[#a7b0c8]">Clay</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Column */}
                  <div className="flex flex-col gap-5 items-center z-10">
                    <div className="bg-[radial-gradient(circle_at_top_left,_#1f2238_0,_#101221_45%)] rounded-2xl p-4 border border-[rgba(123,92,255,0.7)] shadow-[0_16px_40px_rgba(50,26,150,0.7)]">
                      <div className="text-[11px] uppercase tracking-wider text-[#a7b0c8] mb-1">Orchestration</div>
                      <div className="text-sm font-semibold text-white mb-3">Workflows</div>
                      <div className="flex flex-wrap gap-3 justify-center">
                        <div className="logo-chip">
                          <span className="logo-icon bg-[#ff5a5f]">n8</span>
                          <span className="text-[11px] text-[#a7b0c8]">n8n</span>
                        </div>
                        <div className="logo-chip">
                          <span className="logo-icon bg-[#4f46e5]">R</span>
                          <span className="text-[11px] text-[#a7b0c8]">Relevance</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[radial-gradient(circle_at_top_left,_#1f2238_0,_#101221_45%)] rounded-2xl p-4 border border-white/[0.03] shadow-[0_12px_30px_rgba(0,0,0,0.55)]">
                      <div className="text-[11px] uppercase tracking-wider text-[#a7b0c8] mb-1">AI Processing</div>
                      <div className="text-sm font-semibold text-white mb-3">Agents</div>
                      <div className="flex flex-wrap gap-3 justify-center">
                        <div className="logo-chip">
                          <span className="logo-icon bg-[#10a37f]">OA</span>
                          <span className="text-[11px] text-[#a7b0c8]">OpenAI</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col gap-5 z-10">
                    <div className="bg-[radial-gradient(circle_at_top_left,_#1f2238_0,_#101221_45%)] rounded-2xl p-4 border border-white/[0.03] shadow-[0_12px_30px_rgba(0,0,0,0.55)]">
                      <div className="text-[11px] uppercase tracking-wider text-[#a7b0c8] mb-1">Systems</div>
                      <div className="text-sm font-semibold text-white mb-3">CRM & Comms</div>
                      <div className="flex flex-wrap gap-3">
                        <div className="logo-chip">
                          <span className="logo-icon bg-[#00a1e0]">SF</span>
                          <span className="text-[11px] text-[#a7b0c8]">Salesforce</span>
                        </div>
                        <div className="logo-chip">
                          <span className="logo-icon bg-[#4a154b]">S</span>
                          <span className="text-[11px] text-[#a7b0c8]">Slack</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[radial-gradient(circle_at_top_left,_#1f2238_0,_#101221_45%)] rounded-2xl p-4 border border-white/[0.03] shadow-[0_12px_30px_rgba(0,0,0,0.55)]">
                      <div className="text-[11px] uppercase tracking-wider text-[#a7b0c8] mb-1">Analytics</div>
                      <div className="text-sm font-semibold text-white mb-3">Warehouse</div>
                      <div className="flex flex-wrap gap-3">
                        <div className="logo-chip">
                          <span className="logo-icon bg-[#4285f4]">BQ</span>
                          <span className="text-[11px] text-[#a7b0c8]">BigQuery</span>
                        </div>
                      </div>
                    </div>
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
        @keyframes pulseLine {
          0% { opacity: 0.35; }
          50% { opacity: 0.9; }
          100% { opacity: 0.35; }
        }
        @keyframes floatLogo {
          0%   { transform: translateY(0); box-shadow: 0 10px 24px rgba(0,0,0,0.55); }
          50%  { transform: translateY(-4px); box-shadow: 0 16px 30px rgba(0,0,0,0.7); }
          100% { transform: translateY(0); box-shadow: 0 10px 24px rgba(0,0,0,0.55); }
        }
        .animate-pulse-line {
          animation: pulseLine 3s ease-in-out infinite;
        }
        .logo-chip {
          height: 38px;
          min-width: 38px;
          padding: 0 10px;
          border-radius: 999px;
          background: rgba(13, 16, 28, 0.96);
          border: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.55);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
          animation: floatLogo 4s ease-in-out infinite;
        }
        .logo-chip:nth-child(2) { animation-delay: 0.4s; }
        .logo-chip:nth-child(3) { animation-delay: 0.8s; }
        .logo-chip:nth-child(4) { animation-delay: 1.2s; }
        .logo-icon {
          width: 22px;
          height: 22px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
          color: #fff;
        }
      `}</style>
    </section>;
};
export default Hero;