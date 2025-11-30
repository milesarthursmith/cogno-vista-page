import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Building2, TrendingDown, Target, CheckCircle2, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ReEngagement = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-neutral-100">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-muted/30 blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-muted/20 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-lg font-mono font-semibold">RE</span>
              </div>
              <span className="font-mono text-sm text-muted-foreground">SaaS Company</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              AI Re-Engagement Engine for Closed Lost Opportunities
            </h1>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="font-mono">Multi-agent system</Badge>
              <Badge variant="secondary" className="font-mono">CRM automation</Badge>
              <Badge variant="secondary" className="font-mono">Safety guardrails</Badge>
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
                  A SaaS company had 20,000+ Closed Lost / No Decision opportunities from the past 3–4 years. Their BDR team was unable to manually re-engage the long tail. Data quality issues—duplicate accounts, stale contacts, unclear ownership—made automation risky. Leadership needed controlled AI outreach without disrupting reps.
                </p>
              </div>
            </div>
          </section>

          {/* The Problem Statement */}
          <section>
            <h2 className="text-3xl font-bold mb-8">The problem statement</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l-4 border-destructive pl-6">
                <h3 className="font-semibold text-lg mb-2">Massive opportunity</h3>
                <p className="text-muted-foreground">
                  20,000+ closed lost accounts sitting dormant with no systematic re-engagement
                </p>
              </div>
              <div className="border-l-4 border-destructive pl-6">
                <h3 className="font-semibold text-lg mb-2">Data quality risks</h3>
                <p className="text-muted-foreground">
                  Duplicates, stale ownership, and outdated contact info made automation risky
                </p>
              </div>
              <div className="border-l-4 border-destructive pl-6">
                <h3 className="font-semibold text-lg mb-2">Limited capacity</h3>
                <p className="text-muted-foreground">
                  BDR team couldn't manually reach this volume while maintaining quality
                </p>
              </div>
            </div>
          </section>

          {/* What We Built */}
          <section>
            <h2 className="text-3xl font-bold mb-8">What we built</h2>
            
            {/* Tech Stack Logos */}
            <div className="mb-12">
              <div className="text-xs font-mono text-muted-foreground mb-4">TECH STACK</div>
              <div className="flex flex-wrap items-center gap-8">
                <img src="/src/assets/relevance_ai.png" alt="Relevance AI" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src="/src/assets/salesforce.png" alt="Salesforce" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
                <div className="text-sm text-muted-foreground font-mono">+ Zapier</div>
                <div className="text-sm text-muted-foreground font-mono">+ Gmail API</div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border rounded-xl p-8 bg-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 font-mono text-sm font-semibold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">End-to-End Agent Workflow</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Using Relevance AI, Zapier, Salesforce, and Gmail API—connected RelevanceAI to Salesforce using SOQL</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Deep research step (industry, tech, size, history) before writing outreach</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>AI-generated personalised outreach emails sent programmatically through Gmail integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Logged emails + activity back to Salesforce with Slack alerts when replies or signals of interest occurred</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Agent has the ability to handle replies as well</span>
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
                    <h3 className="text-xl font-semibold mb-3">Attribution & Handoff Automation</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Created/updated Leads in Salesforce and linked them to the correct Account</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Updated ownership + assignment rules</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Ensured interactions flowed into the correct Campaign & Reporting structure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Enabled end-to-end tracking from outreach → response → SQL → Closed Won</span>
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
                    <h3 className="text-xl font-semibold mb-3">Data Quality & Safety Agents</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Real-time rep activity monitor checked for human touches in the last 7–14 days before outreach</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Guardrails: prevent contacting active customers, prevent double-sends, prevent conflicting ownership</span>
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
              <div className="flex items-start gap-4 justify-between">
                <div className="flex-1">
                  <div className="text-xs font-mono text-muted-foreground mb-2">INPUT</div>
                  <div className="border rounded-lg p-6 bg-background text-center">
                    <div className="font-semibold">Dormant Accounts Pool</div>
                    <div className="text-xs text-muted-foreground mt-1">20,000+ closed lost</div>
                  </div>
                </div>
                
                <ArrowRight className="mt-8 text-muted-foreground flex-shrink-0" />
                
                <div className="flex flex-col gap-3 flex-1">
                  <div className="text-xs font-mono text-muted-foreground mb-2">AGENTS</div>
                  <div className="border rounded p-3 bg-background text-sm">Outreach Agent</div>
                  <div className="border rounded p-3 bg-background text-sm">Data Hygiene Agent</div>
                  <div className="border rounded p-3 bg-background text-sm">Safety/Guardrails</div>
                  <div className="border rounded p-3 bg-background text-sm">CRM Sync</div>
                </div>
                
                <ArrowRight className="mt-8 text-muted-foreground flex-shrink-0" />
                
                <div className="flex flex-col gap-3 flex-1">
                  <div className="text-xs font-mono text-muted-foreground mb-2">OUTCOMES</div>
                  <div className="border rounded p-3 bg-background text-sm">Interested Lead</div>
                  <div className="border rounded p-3 bg-background text-sm">Meeting Booked</div>
                  <div className="border-2 border-primary rounded p-3 bg-primary/5 text-sm font-semibold">Rep Notified</div>
                </div>
              </div>
            </div>
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Impact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                <Target className="h-8 w-8 text-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-3xl font-bold text-foreground mb-1">Multiple</div>
                  <div className="font-semibold mb-2">SQLs and Closed Won deals</div>
                  <p className="text-sm text-muted-foreground">
                    Drove multiple qualified leads and closed won opportunities
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                <TrendingDown className="h-8 w-8 text-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-3xl font-bold text-foreground mb-1">~42%</div>
                  <div className="font-semibold mb-2">Reduced cost per SQL</div>
                  <p className="text-sm text-muted-foreground">
                    Lower cost per SQL vs traditional outbound
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                <CheckCircle2 className="h-8 w-8 text-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-3xl font-bold text-foreground mb-1">Safe</div>
                  <div className="font-semibold mb-2">AI-human partnership</div>
                  <p className="text-sm text-muted-foreground">
                    Demonstrated AI can safely partner with sales when ownership rules are engineered correctly
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                <Users className="h-8 w-8 text-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-3xl font-bold text-foreground mb-1">20k+</div>
                  <div className="font-semibold mb-2">Dormant accounts engaged</div>
                  <p className="text-sm text-muted-foreground">
                    Systematically re-engaged thousands of closed lost opportunities
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReEngagement;