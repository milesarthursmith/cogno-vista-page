import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import messagingImage from "@/assets/case-study-messaging.jpg";

const MessageIntelligence = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={messagingImage} 
            alt="Message Intelligence" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-lg font-mono font-semibold">MI</span>
              </div>
              <span className="font-mono text-sm text-muted-foreground">Fast-Growing SaaS</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Message Intelligence Platform for Marketing & Sales
            </h1>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="font-mono">Semantic matching</Badge>
              <Badge variant="secondary" className="font-mono">Cross-channel analytics</Badge>
              <Badge variant="secondary" className="font-mono">Content generation</Badge>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* About the Company */}
          <section>
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center flex-shrink-0">
                <Building2 className="w-8 h-8 text-muted-foreground" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">About the company</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  A fast-growing SaaS company struggling to understand which messaging performs best across channels, whether sales and marketing were aligned, and which keywords actually resonate with prospects. Their performance data lived in separate tools making it impossible to get a unified view.
                </p>
              </div>
            </div>
          </section>

          {/* The Problem Statement */}
          <section>
            <h2 className="text-3xl font-bold mb-8">The problem statement</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l-4 border-destructive pl-6">
                <h3 className="font-semibold text-lg mb-2">Siloed data</h3>
                <p className="text-muted-foreground">
                  Google Ads, call transcripts, and message libraries scattered across different tools
                </p>
              </div>
              <div className="border-l-4 border-destructive pl-6">
                <h3 className="font-semibold text-lg mb-2">No alignment</h3>
                <p className="text-muted-foreground">
                  Marketing and sales couldn't tell if they were using consistent messaging
                </p>
              </div>
              <div className="border-l-4 border-destructive pl-6">
                <h3 className="font-semibold text-lg mb-2">Guesswork</h3>
                <p className="text-muted-foreground">
                  No systematic way to track which messages actually drive results
                </p>
              </div>
            </div>
          </section>

          {/* What We Built */}
          <section>
            <h2 className="text-3xl font-bold mb-8">What we built</h2>
            
            <div className="space-y-8">
              <div className="border rounded-xl p-8 bg-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 font-mono text-sm font-semibold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Data Ingestion</h3>
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
                    <h3 className="text-xl font-semibold mb-3">Exact & Semantic Matching</h3>
                    <ul className="space-y-2 text-muted-foreground">
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
                    <h3 className="text-xl font-semibold mb-3">Message Impact Scoring</h3>
                    <p className="text-muted-foreground mb-3">Calculated impact across:</p>
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
                    <h3 className="text-xl font-semibold mb-3">Discovery & Content Generation</h3>
                    <p className="text-muted-foreground mb-3">AI proposed:</p>
                    <ul className="space-y-2 text-muted-foreground">
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
            <h2 className="text-3xl font-bold mb-8">Message impact map</h2>
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
            <h2 className="text-3xl font-bold mb-8">Impact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-xl p-6 bg-card">
                <div className="text-4xl font-bold text-primary mb-2">Unified</div>
                <div className="font-semibold mb-2">Cross-channel view</div>
                <p className="text-sm text-muted-foreground">
                  First time seeing what messages actually work across ads and calls
                </p>
              </div>
              <div className="border rounded-xl p-6 bg-card">
                <div className="text-4xl font-bold text-primary mb-2">Retired</div>
                <div className="font-semibold mb-2">Underperforming content</div>
                <p className="text-sm text-muted-foreground">
                  Data-driven decisions to eliminate low-impact messaging
                </p>
              </div>
              <div className="border rounded-xl p-6 bg-card">
                <div className="text-4xl font-bold text-primary mb-2">Eliminated</div>
                <div className="font-semibold mb-2">Manual tracking</div>
                <p className="text-sm text-muted-foreground">
                  Automated the entire message performance tracking process
                </p>
              </div>
              <div className="border rounded-xl p-6 bg-card">
                <div className="text-4xl font-bold text-primary mb-2">Feedback</div>
                <div className="font-semibold mb-2">Marketing ↔ Sales loop</div>
                <p className="text-sm text-muted-foreground">
                  Created continuous alignment between teams
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MessageIntelligence;