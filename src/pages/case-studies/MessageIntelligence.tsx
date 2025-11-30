import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AbstractBackground from "@/components/AbstractBackground";
import { Building2, Link2, TrendingUp, Clock, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const MessageIntelligence = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative min-h-screen overflow-hidden pt-20">
        <AbstractBackground variant="hero" />
        
        <main className="container relative z-10 mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="font-mono text-sm text-muted-foreground">Fast-Growing SaaS</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-medium leading-[1.1] mb-6">
              Message Intelligence Platform for Marketing & Sales
            </h1>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="font-mono">Semantic matching</Badge>
              <Badge variant="secondary" className="font-mono">Cross-channel analytics</Badge>
              <Badge variant="secondary" className="font-mono">Content generation</Badge>
            </div>
          </div>
        
        <div className="space-y-24 mt-20">
          
          {/* About the Company */}
          <section>
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center flex-shrink-0">
                <Building2 className="w-8 h-8 text-muted-foreground" />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-medium mb-4">About the company</h2>
                <p className="text-muted-foreground text-lg leading-relaxed font-serif">
                  A fast-growing SaaS company struggling to understand which messaging performs best across channels, whether sales and marketing were aligned, and which keywords actually resonate with prospects. Their performance data lived in separate tools making it impossible to get a unified view.
                </p>
              </div>
            </div>
          </section>

          {/* The Problem Statement */}
          <section>
            <h2 className="text-3xl font-serif font-medium mb-8">The problem statement</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l border-muted-foreground/30 pl-6">
                <h3 className="font-semibold text-lg mb-2">Data scattered everywhere</h3>
                <p className="text-muted-foreground font-serif">
                  Sales using one message framework, marketing another—with no visibility into what actually converts
                </p>
              </div>
              <div className="border-l border-muted-foreground/30 pl-6">
                <h3 className="font-semibold text-lg mb-2">No feedback loop</h3>
                <p className="text-muted-foreground font-serif">
                  Marketing teams creating content blind, unable to learn from what sales hears in real conversations
                </p>
              </div>
              <div className="border-l border-muted-foreground/30 pl-6">
                <h3 className="font-semibold text-lg mb-2">Manual guesswork</h3>
                <p className="text-muted-foreground font-serif">
                  Teams spending hours trying to reverse-engineer which messages work across channels
                </p>
              </div>
            </div>
          </section>

          {/* What We Built */}
          <section>
            <h2 className="text-3xl font-serif font-medium mb-8">What we built</h2>
            
            <div className="space-y-8">
              <div className="border rounded-xl p-8 bg-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 font-mono text-sm font-semibold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 font-serif">Data Ingestion</h3>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="border rounded-lg p-3 bg-background text-sm">
                        Google Ads performance
                      </div>
                      <div className="border rounded-lg p-3 bg-background text-sm">
                        Sales call transcripts
                      </div>
                      <div className="border rounded-lg p-3 bg-background text-sm">
                        Message library
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-xl p-8 bg-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 font-mono text-sm font-semibold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 font-serif">Exact & Semantic Matching</h3>
                    <ul className="space-y-2 text-muted-foreground font-serif">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Exact phrase detection for precise tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Embedding-based semantic matching to find "same meaning, different words"</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border rounded-xl p-8 bg-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 font-mono text-sm font-semibold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 font-serif">Message Impact Scoring</h3>
                    <p className="text-muted-foreground mb-3 font-serif">Calculated impact across:</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="border-l-4 border-primary pl-4">
                        <div className="font-semibold text-sm mb-1">Ad Performance</div>
                        <div className="text-xs text-muted-foreground">
                          Impressions → clicks → conversions
                        </div>
                      </div>
                      <div className="border-l-4 border-primary pl-4">
                        <div className="font-semibold text-sm mb-1">Call Usage</div>
                        <div className="text-xs text-muted-foreground">
                          Frequency, reps, outcomes
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-xl p-8 bg-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 font-mono text-sm font-semibold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 font-serif">Discovery & Content Generation</h3>
                    <p className="text-muted-foreground mb-3 font-serif">AI proposed:</p>
                    <ul className="space-y-2 text-muted-foreground font-serif">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>New message angles based on performance patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Ad variations optimized for each channel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Sales summaries with proper length, tone, accuracy</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Message Impact Visualization */}
          <section>
            <h2 className="text-3xl font-serif font-medium mb-8">Message impact map</h2>
            <div className="border rounded-xl p-8 bg-card">
              <div className="relative h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-8 w-full max-w-2xl">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-xs font-semibold">
                        High
                      </div>
                      <span className="text-xs text-muted-foreground font-mono">Ads Only</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-24 h-24 rounded-full bg-primary/40 border-2 border-primary flex items-center justify-center text-xs font-semibold">
                        Very High
                      </div>
                      <span className="text-xs text-muted-foreground font-mono">Combined</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-xs font-semibold">
                        Medium
                      </div>
                      <span className="text-xs text-muted-foreground font-mono">Calls Only</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 text-center text-xs text-muted-foreground font-mono">
                  Bubble size = impact • Color intensity = performance
                </div>
              </div>
            </div>
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-3xl font-serif font-medium mb-8">Impact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                <Link2 className="h-8 w-8 text-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-3xl font-medium text-foreground mb-1">3</div>
                  <div className="font-semibold mb-2 font-serif">Data sources unified</div>
                  <p className="text-sm text-muted-foreground font-serif">
                    First time seeing what messages actually work across ads and calls
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                <TrendingUp className="h-8 w-8 text-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-3xl font-medium text-foreground mb-1">35%</div>
                  <div className="font-semibold mb-2 font-serif">Performance improvement</div>
                  <p className="text-sm text-muted-foreground font-serif">
                    Better ad and call messaging through data-driven insights
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                <Clock className="h-8 w-8 text-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-3xl font-medium text-foreground mb-1">10 hrs</div>
                  <div className="font-semibold mb-2 font-serif">Saved per week</div>
                  <p className="text-sm text-muted-foreground font-serif">
                    Automated the entire message performance tracking process
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                <CheckCircle2 className="h-8 w-8 text-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-3xl font-medium text-foreground mb-1">100%</div>
                  <div className="font-semibold mb-2 font-serif">Team alignment</div>
                  <p className="text-sm text-muted-foreground font-serif">
                    Created continuous alignment between marketing and sales
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
        </main>
      </section>

      <Footer />
    </div>
  );
};

export default MessageIntelligence;