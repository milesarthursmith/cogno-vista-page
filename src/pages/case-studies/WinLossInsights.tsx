import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AbstractBackground from "@/components/AbstractBackground";
import { ArrowRight, Building2, Clock, TrendingUp, Filter, Database } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import salesforceLogo from "@/assets/salesforce.png";
import googleCloudLogo from "@/assets/google_cloud.png";
import gongLogo from "@/assets/gong.png";
import zendeskLogo from "@/assets/zendesk.png";
import lookerstudioLogo from "@/assets/lookerstudio.png";
import openaiLogo from "@/assets/openai.png";

const WinLossInsights = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative min-h-screen overflow-hidden pt-20">
        <AbstractBackground variant="hero" />
        
        <main className="container relative z-10 mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-lg font-mono font-semibold">WL</span>
              </div>
              <span className="font-mono text-sm text-muted-foreground">Global SaaS Company</span>
            </div>
            <h1 className="text-5xl font-serif font-medium mb-6">
              AI Win/Loss Insights for a Global SaaS GTM Team
            </h1>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="font-mono">Win/loss analysis</Badge>
              <Badge variant="secondary" className="font-mono">LLM extraction</Badge>
              <Badge variant="secondary" className="font-mono">Time-series analytics</Badge>
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
                  A global B2B SaaS company processing 50,000–60,000 opportunities per year struggled with fragmented insight. Sales calls stored in Gong, CRM notes and emails in Salesforce, support tickets in Zendesk—all living in separate systems with no way to answer: "Why do we win or lose, and how is that trending?" Product Marketing and Product teams were spending ~100–120 hours/month manually pasting transcripts into NotebookLM for ad-hoc, non-repeatable analysis.
                </p>
              </div>
            </div>
          </section>

          {/* The Problem Statement */}
          <section>
            <h2 className="text-3xl font-serif font-medium mb-8">The problem statement</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l-4 border-destructive pl-6">
                <h3 className="font-semibold text-lg mb-2">Data scattered everywhere</h3>
                <p className="text-muted-foreground font-serif">
                  Tens of thousands of sales calls in Gong, CRM notes and emails in Salesforce, support tickets in Zendesk—no single source of truth
                </p>
              </div>
              <div className="border-l-4 border-destructive pl-6">
                <h3 className="font-semibold text-lg mb-2">Manual analysis at scale</h3>
                <p className="text-muted-foreground font-serif">
                  Product Marketing and Product teams spent 100–120 hours/month manually pasting transcripts into NotebookLM for ad-hoc, non-repeatable analysis
                </p>
              </div>
              <div className="border-l-4 border-destructive pl-6">
                <h3 className="font-semibold text-lg mb-2">No trend visibility</h3>
                <p className="text-muted-foreground font-serif">
                  No way to answer "Why do we win or lose?" or see how decision drivers changed over time
                </p>
              </div>
            </div>
          </section>

          {/* What We Built */}
          <section>
            <h2 className="text-3xl font-serif font-medium mb-8">What we built</h2>
            
            {/* Tech Stack Logos */}
            <div className="mb-12">
              <div className="text-xs font-mono text-muted-foreground mb-4">TECH STACK</div>
              <div className="flex flex-wrap items-center gap-8">
                <img src={gongLogo} alt="Gong" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src={salesforceLogo} alt="Salesforce" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src={zendeskLogo} alt="Zendesk" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src={googleCloudLogo} alt="Google Cloud" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src={lookerstudioLogo} alt="Looker Studio" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src={openaiLogo} alt="OpenAI" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="border rounded-xl p-8 bg-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 font-mono text-sm font-semibold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 font-serif">Unified Data Model</h3>
                    <ul className="space-y-2 text-muted-foreground font-serif">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Ingested Gong calls, Salesforce opportunity data, emails, notes, and Zendesk tickets into BigQuery</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Built an opportunity-level dataset (rather than individual call analysis)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Normalised thousands of disparate text sources into analytics-ready tables</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Added metadata (segments, regions, products, deal stages) to allow slicing</span>
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
                    <h3 className="text-xl font-semibold mb-3 font-serif">AI Extraction & Taxonomy</h3>
                    <ul className="space-y-2 text-muted-foreground font-serif">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Using Gemini 2.5 Pro + a custom taxonomy to extract customer needs, decision drivers, and objections</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Identified win/loss reasons, competitor mentions, feature gaps, and representative customer quotes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Developed a 40+ item taxonomy, iterated with PMM & product teams across 6 validation rounds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Used inter-rater reliability scoring to calibrate accuracy and reduce hallucination</span>
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
                    <h3 className="text-xl font-semibold mb-3 font-serif">Insights Dashboard</h3>
                    <ul className="space-y-2 text-muted-foreground font-serif">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Built in Looker Studio + BigQuery with time-series view of win/loss drivers by quarter</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Filters for segment, region, product, sales motion, deal size</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>"Click-into-the-quote" drilldown from a metric → exact transcript snippet</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Conversational analytics via natural-language query layer for non-technical users</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* System Diagram */}
          <section>
            <h2 className="text-3xl font-serif font-medium mb-8">System architecture</h2>
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
            <h2 className="text-3xl font-serif font-medium mb-8">Impact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                <Clock className="h-8 w-8 text-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-3xl font-medium text-foreground mb-1">100+</div>
                  <div className="font-semibold mb-2 font-serif">Hours eliminated monthly</div>
                  <p className="text-sm text-muted-foreground font-serif">
                    Eliminated manual PMM analysis and transcript copy-pasting
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                <TrendingUp className="h-8 w-8 text-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-3xl font-medium text-foreground mb-1">First-ever</div>
                  <div className="font-semibold mb-2 font-serif">Time-series visibility</div>
                  <p className="text-sm text-muted-foreground font-serif">
                    Delivered first-ever visibility of how decision drivers change over time
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                <Filter className="h-8 w-8 text-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-3xl font-medium text-foreground mb-1">Hard data</div>
                  <div className="font-semibold mb-2 font-serif">Hypothesis validation</div>
                  <p className="text-sm text-muted-foreground font-serif">
                    Enabled product & revenue teams to validate hypotheses with data
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                <Database className="h-8 w-8 text-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-3xl font-medium text-foreground mb-1">Reusable</div>
                  <div className="font-semibold mb-2 font-serif">Decision layer created</div>
                  <p className="text-sm text-muted-foreground font-serif">
                    Built foundation for future GTM analytics (NPS, product feedback, churn)
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
        </div>
        </main>
      </section>

      <Footer />
    </div>
  );
};

export default WinLossInsights;