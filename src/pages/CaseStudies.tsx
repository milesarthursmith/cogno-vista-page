import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-muted-foreground mb-16">
            Real automation wins for teams who chose to focus on what matters.
          </p>

          {/* Case Study 1 */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-8">
              AI Win/Loss Insights for a Global SaaS GTM Team
            </h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Context</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>A global B2B SaaS company had:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Tens of thousands of sales opportunities per year</li>
                  <li>Call recordings, CRM notes and support tickets scattered across tools</li>
                  <li>No scalable way to answer: "Why do we win or lose?" or "How is that changing over time?"</li>
                  <li>Win/loss work done manually, pasting transcripts into AI tools and spreadsheets</li>
                  <li>~100 hours/month spent on ad-hoc analysis with no time-series visibility</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">What We Built</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">1. Unified Data Model</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Consolidated sales calls, CRM notes, emails and support interactions</li>
                    <li>Merged everything at the opportunity level, not the call level</li>
                    <li>Created a clean, analytics-ready structure that didn't previously exist</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">2. AI Extraction & Taxonomy</h4>
                  <p className="text-muted-foreground mb-2">Used LLMs to extract structured insight from unstructured text:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Customer needs</li>
                    <li>Decision drivers (win/loss reasons)</li>
                    <li>Objections</li>
                    <li>Solution feedback</li>
                    <li>Competitors mentioned</li>
                    <li>Key quotes</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">Created the taxonomy + prompts and iterated with GTM leaders to ensure reliability.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">3. Insights Dashboard</h4>
                  <p className="text-muted-foreground mb-2">Built a BI layer that:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Shows how win/loss reasons shift over time</li>
                    <li>Lets users filter by segment, region, product, motion</li>
                    <li>Supports "drill into the quote" exploration</li>
                    <li>Includes natural-language query (conversational analytics)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Impact</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Eliminated 100+ hours/month of manual win/loss analysis</li>
                <li>Enabled the first time-series view of decision drivers</li>
                <li>Added deep contextual drill-down that was impossible before</li>
                <li>Created a reusable decision layer for future GTM analysis</li>
              </ul>
            </div>

            <div className="border rounded-lg p-8 bg-card">
              <h4 className="font-mono text-sm mb-6">AI Win/Loss Insights Pipeline</h4>
              <div className="flex items-center gap-4 justify-between">
                <div className="flex flex-col gap-3 flex-1">
                  <div className="border rounded p-3 bg-background text-sm">Call transcripts</div>
                  <div className="border rounded p-3 bg-background text-sm">CRM notes</div>
                  <div className="border rounded p-3 bg-background text-sm">Emails</div>
                  <div className="border rounded p-3 bg-background text-sm">Support tickets</div>
                </div>
                
                <ArrowRight className="text-muted-foreground flex-shrink-0" />
                
                <div className="flex-1">
                  <div className="border-2 border-primary rounded-lg p-6 bg-primary/5 text-center">
                    <div className="font-semibold mb-1">AI Insight Engine</div>
                    <div className="text-xs text-muted-foreground">LLM extraction + taxonomy</div>
                  </div>
                </div>
                
                <ArrowRight className="text-muted-foreground flex-shrink-0" />
                
                <div className="flex flex-col gap-3 flex-1">
                  <div className="border rounded p-3 bg-background text-sm">Win/loss drivers</div>
                  <div className="border rounded p-3 bg-background text-sm">Key quotes</div>
                  <div className="border rounded p-3 bg-background text-sm">Trends</div>
                  <div className="border rounded p-3 bg-background text-sm">Customer needs</div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study 2 */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-8">
              AI Re-Engagement Engine for Closed Lost Opportunities
            </h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Context</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>A SaaS company had:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>20,000+ Closed Lost / No Decision accounts</li>
                  <li>Limited BDR capacity</li>
                  <li>Risky CRM data (duplicates, stale ownership, outdated contact info)</li>
                  <li>Leadership wanted a safe, controlled way to test AI-driven re-engagement</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">What We Built</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">1. End-to-End Agent Workflow</h4>
                  <p className="text-muted-foreground mb-2">AI workflow that:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Identified eligible accounts</li>
                    <li>Generated personalised outreach</li>
                    <li>Logged all activity into CRM</li>
                    <li>Notified human reps when prospects replied</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">2. Attribution & Handoff Automation</h4>
                  <p className="text-muted-foreground mb-2">Automations that:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Created/updated leads</li>
                    <li>Linked them to correct accounts</li>
                    <li>Updated ownership</li>
                    <li>Enrolled records into reporting campaigns</li>
                    <li>Ensured every AI → human handoff was traceable</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">3. Data Quality & Safety Agents</h4>
                  <p className="text-muted-foreground mb-2">Built "safety rails":</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>AI-powered duplicate checking over thousands of records</li>
                    <li>Real-time rep activity monitor so AI never conflicts with a human</li>
                    <li>Ownership and eligibility controls</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Impact</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Scaled from pilot to hundreds of AI emails/day</li>
                <li>Generated SQLs and Closed Won pipeline</li>
                <li>Lower cost/SQL than traditional outbound</li>
                <li>Proved AI can run safely alongside sales when engineered correctly</li>
              </ul>
            </div>

            <div className="border rounded-lg p-8 bg-card">
              <h4 className="font-mono text-sm mb-6">AI Re-Engagement Multi-Agent System</h4>
              <div className="flex items-start gap-4 justify-between">
                <div className="flex-1">
                  <div className="border rounded-lg p-6 bg-background text-center">
                    <div className="font-semibold">Dormant Accounts Pool</div>
                  </div>
                </div>
                
                <ArrowRight className="mt-6 text-muted-foreground flex-shrink-0" />
                
                <div className="flex flex-col gap-3 flex-1">
                  <div className="border rounded p-3 bg-background text-sm">Outreach Agent</div>
                  <div className="border rounded p-3 bg-background text-sm">Data Hygiene Agent</div>
                  <div className="border rounded p-3 bg-background text-sm">Safety/Guardrails</div>
                  <div className="border rounded p-3 bg-background text-sm">CRM Sync</div>
                </div>
                
                <ArrowRight className="mt-6 text-muted-foreground flex-shrink-0" />
                
                <div className="flex flex-col gap-3 flex-1">
                  <div className="border rounded p-3 bg-background text-sm">Interested Lead</div>
                  <div className="border rounded p-3 bg-background text-sm">Meeting Booked</div>
                  <div className="border-2 border-primary rounded p-3 bg-primary/5 text-sm font-semibold">Notify Rep (Slack)</div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study 3 */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-8">
              Message Intelligence Platform for Marketing & Sales
            </h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Context</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>A fast-growing SaaS company needed to understand:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Which messaging performs best</li>
                  <li>Whether sales & marketing were aligned</li>
                  <li>Which keywords resonate in ads and calls</li>
                </ul>
                <p>Their data lived in separate tools (Google Ads, call platform, docs/spreadsheets).</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">What We Built</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">1. Data Ingestion</h4>
                  <p className="text-muted-foreground mb-2">Pulled in:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Google Ads performance data</li>
                    <li>Sales call transcripts</li>
                    <li>A curated message + keyword library</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">2. Exact & Semantic Matching</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Exact phrase detection</li>
                    <li>Embedding-based semantic matching ("same meaning, different words")</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">3. Message Impact Scoring</h4>
                  <p className="text-muted-foreground mb-2">Calculated impact across:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Ad performance (impressions → clicks → conversions)</li>
                    <li>Call usage (frequency, reps, outcomes)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">4. Discovery & Content Generation</h4>
                  <p className="text-muted-foreground mb-2">AI proposed:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>New message angles</li>
                    <li>Ad variations</li>
                    <li>Sales summaries</li>
                    <li>Channel-validated assets (length, tone, accuracy)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Impact</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Unified view of what messages actually work</li>
                <li>Helped retire underperforming messaging</li>
                <li>Eliminated manual tracking and guesswork</li>
                <li>Created a feedback loop between marketing and sales</li>
              </ul>
            </div>

            <div className="border rounded-lg p-8 bg-card">
              <h4 className="font-mono text-sm mb-6">Message Impact Map</h4>
              <div className="relative h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-8 w-full max-w-2xl">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-xs">High Impact</div>
                      <span className="text-xs text-muted-foreground">Ads</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-24 h-24 rounded-full bg-primary/30 border-2 border-primary flex items-center justify-center text-xs">Very High</div>
                      <span className="text-xs text-muted-foreground">Combined</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-xs">Medium</div>
                      <span className="text-xs text-muted-foreground">Calls</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 text-center text-xs text-muted-foreground">
                  Bubble size = impact • Color intensity = performance
                </div>
              </div>
            </div>
          </section>

          {/* Case Study 4 */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-8">
              Automated Newsletter & YouTube Summarisation Workflow
            </h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Context</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>Like many GTM leaders, the client struggled with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Endless newsletters</li>
                  <li>Long YouTube content</li>
                  <li>Overwhelming article volume</li>
                  <li>No way to store or reuse insights</li>
                </ul>
                <p>They wanted the signal, without the noise.</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">What We Built</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">1. Content Ingestion</h4>
                  <p className="text-muted-foreground mb-2">Connected:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Email newsletters</li>
                    <li>YouTube channels/playlists</li>
                    <li>RSS feeds</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">All converted to a common text format.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">2. Summarisation & Tagging</h4>
                  <p className="text-muted-foreground mb-2">AI generated:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Bullet summaries</li>
                    <li>Key takeaways</li>
                    <li>Topic tags (AI, GTM, product, growth, etc.)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">3. Storage & Retrieval</h4>
                  <p className="text-muted-foreground mb-2">Stored summarised items with:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Source links</li>
                    <li>Tags</li>
                    <li>Filters by topic, source, recency</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">4. Digest Delivery</h4>
                  <p className="text-muted-foreground">Automated daily/weekly digest email with the top content.</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Impact</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Converted an overwhelming feed into a curated intelligence stream</li>
                <li>Saved hours per week</li>
                <li>Built a reusable research archive</li>
                <li>Showed the power of "background agents" doing quiet work for the team</li>
              </ul>
            </div>

            <div className="border rounded-lg p-8 bg-card">
              <h4 className="font-mono text-sm mb-6">Automated Content Pipeline</h4>
              <div className="flex items-center gap-4 justify-between">
                <div className="flex flex-col gap-3 flex-1">
                  <div className="border rounded p-3 bg-background text-sm flex items-center gap-2">
                    <span>📧</span> Email
                  </div>
                  <div className="border rounded p-3 bg-background text-sm flex items-center gap-2">
                    <span>📺</span> YouTube
                  </div>
                  <div className="border rounded p-3 bg-background text-sm flex items-center gap-2">
                    <span>📰</span> RSS
                  </div>
                </div>
                
                <ArrowRight className="text-muted-foreground flex-shrink-0" />
                
                <div className="flex flex-col gap-3 flex-1">
                  <div className="border rounded p-3 bg-background text-sm">Transcribe</div>
                  <div className="border rounded p-3 bg-background text-sm">Summarise</div>
                  <div className="border rounded p-3 bg-background text-sm">Tag</div>
                </div>
                
                <ArrowRight className="text-muted-foreground flex-shrink-0" />
                
                <div className="flex flex-col gap-3 flex-1">
                  <div className="border-2 border-primary rounded p-3 bg-primary/5 text-sm font-semibold">Digest Email</div>
                  <div className="border rounded p-3 bg-background text-sm">Knowledge Library</div>
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

export default CaseStudies;