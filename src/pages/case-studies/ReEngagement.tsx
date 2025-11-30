import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AbstractBackground from "@/components/AbstractBackground";
import { ArrowRight, Building2, TrendingDown, Target, CheckCircle2, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import relevanceAiLogo from "@/assets/relevance_ai.png";
import salesforceLogo from "@/assets/salesforce.png";
import zapierLogo from "@/assets/zapier.png";
import gmailLogo from "@/assets/gmail.png";

const ReEngagement = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative min-h-screen overflow-hidden pt-20">
        <AbstractBackground variant="hero" />
        
        <main className="container relative z-10 mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="font-mono text-sm text-muted-foreground">SaaS Company</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-medium leading-[1.1] mb-6">
              AI Re-Engagement Engine for Closed Lost Opportunities
            </h1>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="font-mono">Multi-agent system</Badge>
              <Badge variant="secondary" className="font-mono">CRM automation</Badge>
              <Badge variant="secondary" className="font-mono">Safety guardrails</Badge>
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
                  A SaaS company had 20,000+ Closed Lost / No Decision opportunities from the past 3–4 years. Their BDR team was unable to manually re-engage the long tail. Data quality issues—duplicate accounts, stale contacts, unclear ownership—made automation risky. Leadership needed controlled AI outreach without disrupting reps.
                </p>
              </div>
            </div>
          </section>

          {/* The Problem Statement */}
          <section>
            <h2 className="text-3xl font-serif font-medium mb-8">The problem statement</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l border-muted-foreground/30 pl-6">
                <h3 className="font-semibold text-lg mb-2">Massive opportunity</h3>
                <p className="text-muted-foreground font-serif">
                  Roughly 20,000 dormant opportunities—huge untapped pipeline, but unclear which were worth pursuing
                </p>
              </div>
              <div className="border-l border-muted-foreground/30 pl-6">
                <h3 className="font-semibold text-lg mb-2">Data quality risk</h3>
                <p className="text-muted-foreground font-serif">
                  Inconsistent CRM hygiene, missing context, and unreliable data made it hard to confidently target the right accounts
                </p>
              </div>
              <div className="border-l border-muted-foreground/30 pl-6">
                <h3 className="font-semibold text-lg mb-2">Capacity limits</h3>
                <p className="text-muted-foreground font-serif">
                  BDRs couldn't manually review that volume—needed automation with human oversight and safety guardrails
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
                <img src={relevanceAiLogo} alt="Relevance AI" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src={salesforceLogo} alt="Salesforce" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src={zapierLogo} alt="Zapier" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src={gmailLogo} alt="Gmail" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
              </div>
            </div>

            <div className="space-y-8">
              <div className="border rounded-xl p-8 bg-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 font-mono text-sm font-semibold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 font-serif">End-to-End Agent Workflow</h3>
                    <ul className="space-y-2 text-muted-foreground font-serif">
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
                    <h3 className="text-xl font-semibold mb-3 font-serif">Attribution & Handoff Automation</h3>
                    <ul className="space-y-2 text-muted-foreground font-serif">
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
                    <h3 className="text-xl font-semibold mb-3 font-serif">Data Quality & Safety Agents</h3>
                    <ul className="space-y-2 text-muted-foreground font-serif">
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
            <h2 className="text-3xl font-serif font-medium mb-8">System architecture</h2>
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
            <h2 className="text-3xl font-serif font-medium mb-8">Impact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                <Target className="h-8 w-8 text-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-3xl font-medium text-foreground mb-1">Multiple</div>
                  <div className="font-semibold mb-2 font-serif">SQLs and Closed Won deals</div>
                  <p className="text-sm text-muted-foreground font-serif">
                    Drove multiple qualified leads and closed won opportunities
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                <TrendingDown className="h-8 w-8 text-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-3xl font-medium text-foreground mb-1">~42%</div>
                  <div className="font-semibold mb-2 font-serif">Reduced cost per SQL</div>
                  <p className="text-sm text-muted-foreground font-serif">
                    Lower cost per SQL vs traditional outbound
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                <CheckCircle2 className="h-8 w-8 text-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-3xl font-medium text-foreground mb-1">Safe</div>
                  <div className="font-semibold mb-2 font-serif">AI-human partnership</div>
                  <p className="text-sm text-muted-foreground font-serif">
                    Demonstrated AI can safely partner with sales when ownership rules are engineered correctly
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                <Users className="h-8 w-8 text-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-3xl font-medium text-foreground mb-1">20k+</div>
                  <div className="font-semibold mb-2 font-serif">Dormant accounts engaged</div>
                  <p className="text-sm text-muted-foreground font-serif">
                    Systematically re-engaged thousands of closed lost opportunities
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

export default ReEngagement;