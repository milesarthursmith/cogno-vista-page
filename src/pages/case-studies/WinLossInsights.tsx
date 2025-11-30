import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const WinLossInsights = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-slate-100">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-muted/30 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-muted/20 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-lg font-mono font-semibold">WL</span>
              </div>
              <span className="font-mono text-sm text-muted-foreground">Global SaaS Company</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              AI Win/Loss Insights for a Global SaaS GTM Team
            </h1>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="font-mono">Win/loss analysis</Badge>
              <Badge variant="secondary" className="font-mono">LLM extraction</Badge>
              <Badge variant="secondary" className="font-mono">Time-series analytics</Badge>
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
                  A global B2B SaaS company with tens of thousands of sales opportunities per year. Their sales data—call recordings, CRM notes, and support tickets—was scattered across multiple tools with no scalable way to understand why they win or lose deals, or how those patterns change over time.
                </p>
              </div>
            </div>
          </section>

          {/* The Problem Statement */}
          <section>
            <h2 className="text-3xl font-bold mb-8">The problem statement</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l-4 border-destructive pl-6">
                <h3 className="font-semibold text-lg mb-2">Scattered data</h3>
                <p className="text-muted-foreground">
                  Call recordings, CRM notes and support tickets lived in separate tools with no unified view
                </p>
              </div>
              <div className="border-l-4 border-destructive pl-6">
                <h3 className="font-semibold text-lg mb-2">Manual analysis</h3>
                <p className="text-muted-foreground">
                  ~100 hours/month spent manually pasting transcripts into AI tools and spreadsheets
                </p>
              </div>
              <div className="border-l-4 border-destructive pl-6">
                <h3 className="font-semibold text-lg mb-2">No visibility</h3>
                <p className="text-muted-foreground">
                  No scalable way to track how win/loss reasons shift over time or across segments
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
                    <h3 className="text-xl font-semibold mb-3">Unified Data Model</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Consolidated sales calls, CRM notes, emails and support interactions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Merged everything at the opportunity level, not the call level</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Created a clean, analytics-ready structure that didn't previously exist</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border rounded-xl p-8 bg-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 font-mono text-sm font-semibold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">AI Extraction & Taxonomy</h3>
                    <p className="text-muted-foreground mb-3">Used LLMs to extract structured insight from unstructured text:</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-sm border rounded-lg p-3 bg-background">Customer needs</div>
                      <div className="text-sm border rounded-lg p-3 bg-background">Decision drivers</div>
                      <div className="text-sm border rounded-lg p-3 bg-background">Objections</div>
                      <div className="text-sm border rounded-lg p-3 bg-background">Solution feedback</div>
                      <div className="text-sm border rounded-lg p-3 bg-background">Competitors mentioned</div>
                      <div className="text-sm border rounded-lg p-3 bg-background">Key quotes</div>
                    </div>
                    <p className="text-muted-foreground mt-3 text-sm">
                      Created the taxonomy + prompts and iterated with GTM leaders to ensure reliability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-xl p-8 bg-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 font-mono text-sm font-semibold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Insights Dashboard</h3>
                    <p className="text-muted-foreground mb-3">Built a BI layer that:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Shows how win/loss reasons shift over time</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Lets users filter by segment, region, product, motion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Supports "drill into the quote" exploration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Includes natural-language query (conversational analytics)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* System Diagram */}
          <section>
            <h2 className="text-3xl font-bold mb-8">System architecture</h2>
            <div className="border rounded-xl p-8 bg-card">
              <div className="flex items-center gap-4 justify-between">
                <div className="flex flex-col gap-3 flex-1">
                  <div className="text-xs font-mono text-muted-foreground mb-2">INPUTS</div>
                  <div className="border rounded p-3 bg-background text-sm">Call transcripts</div>
                  <div className="border rounded p-3 bg-background text-sm">CRM notes</div>
                  <div className="border rounded p-3 bg-background text-sm">Emails</div>
                  <div className="border rounded p-3 bg-background text-sm">Support tickets</div>
                </div>
                
                <ArrowRight className="text-muted-foreground flex-shrink-0" />
                
                <div className="flex-1">
                  <div className="text-xs font-mono text-muted-foreground mb-2 text-center">PROCESSING</div>
                  <div className="border-2 border-primary rounded-lg p-6 bg-primary/5 text-center">
                    <div className="font-semibold mb-1">AI Insight Engine</div>
                    <div className="text-xs text-muted-foreground">LLM extraction + taxonomy</div>
                  </div>
                </div>
                
                <ArrowRight className="text-muted-foreground flex-shrink-0" />
                
                <div className="flex flex-col gap-3 flex-1">
                  <div className="text-xs font-mono text-muted-foreground mb-2">OUTPUTS</div>
                  <div className="border rounded p-3 bg-background text-sm">Win/loss drivers</div>
                  <div className="border rounded p-3 bg-background text-sm">Key quotes</div>
                  <div className="border rounded p-3 bg-background text-sm">Trends</div>
                  <div className="border rounded p-3 bg-background text-sm">Customer needs</div>
                </div>
              </div>
            </div>
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Impact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-xl p-6 bg-card">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="font-semibold mb-2">Hours saved monthly</div>
                <p className="text-sm text-muted-foreground">
                  Eliminated manual win/loss analysis work
                </p>
              </div>
              <div className="border rounded-xl p-6 bg-card">
                <div className="text-4xl font-bold text-primary mb-2">First</div>
                <div className="font-semibold mb-2">Time-series view</div>
                <p className="text-sm text-muted-foreground">
                  Enabled tracking of decision drivers over time
                </p>
              </div>
              <div className="border rounded-xl p-6 bg-card">
                <div className="text-4xl font-bold text-primary mb-2">Deep</div>
                <div className="font-semibold mb-2">Contextual drill-down</div>
                <p className="text-sm text-muted-foreground">
                  Added exploration capabilities that were impossible before
                </p>
              </div>
              <div className="border rounded-xl p-6 bg-card">
                <div className="text-4xl font-bold text-primary mb-2">Reusable</div>
                <div className="font-semibold mb-2">Decision layer</div>
                <p className="text-sm text-muted-foreground">
                  Created foundation for future GTM analysis
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

export default WinLossInsights;