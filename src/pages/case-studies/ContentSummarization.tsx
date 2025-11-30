import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AbstractBackground from "@/components/AbstractBackground";
import { ArrowRight, Building2, Filter, Clock, Database, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import n8nLogo from "@/assets/n8n.png";
import googleCloudLogo from "@/assets/google_cloud.png";
import gmailLogo from "@/assets/gmail.png";
import notionLogo from "@/assets/notion.png";
import openaiLogo from "@/assets/openai.png";

const ContentSummarization = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative min-h-screen overflow-hidden pt-20">
        <AbstractBackground variant="hero" />
        
        <main className="container relative z-10 mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="font-mono text-sm text-muted-foreground">GTM Leadership Team</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-medium leading-[1.1] mb-6">
              Automated Newsletter & YouTube Summarisation Workflow
            </h1>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="font-mono">Content ingestion</Badge>
              <Badge variant="secondary" className="font-mono">AI summarization</Badge>
              <Badge variant="secondary" className="font-mono">Knowledge archive</Badge>
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
                  Client overwhelmed with 30+ newsletters/week, long YouTube content (20+ min videos), articles from teams & industry feeds—with no structured way to store or reuse insights. The challenge was turning information overload into a searchable, actionable knowledge base.
                </p>
              </div>
            </div>
          </section>

          {/* The Problem Statement */}
          <section>
            <h2 className="text-3xl font-serif font-medium mb-8">The problem statement</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l border-muted-foreground/30 pl-6">
                <h3 className="font-semibold text-lg mb-2">Content overload</h3>
                <p className="text-muted-foreground font-serif">
                  100+ emails, newsletters, YouTube channels, and RSS feeds—impossible to stay on top of emerging trends
                </p>
              </div>
              <div className="border-l border-muted-foreground/30 pl-6">
                <h3 className="font-semibold text-lg mb-2">Time drain</h3>
                <p className="text-muted-foreground font-serif">
                  Executives spending 5+ hours per week skimming content and manually identifying what matters
                </p>
              </div>
              <div className="border-l border-muted-foreground/30 pl-6">
                <h3 className="font-semibold text-lg mb-2">No archive</h3>
                <p className="text-muted-foreground font-serif">
                  Valuable insights scattered across inboxes and tabs, no searchable knowledge base to reference later
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
                <img src={n8nLogo} alt="n8n" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src={gmailLogo} alt="Gmail" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src={notionLogo} alt="Notion" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src={openaiLogo} alt="OpenAI" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src={googleCloudLogo} alt="Google Cloud" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="border rounded-xl p-8 bg-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 font-mono text-sm font-semibold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 font-serif">Content Ingestion</h3>
                    <ul className="space-y-2 text-muted-foreground font-serif">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Using n8n + Gmail API + YouTube API—ingested newsletters via Gmail search filters</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Pulled video transcripts from YouTube channels & playlists</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Normalised everything into text</span>
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
                    <h3 className="text-xl font-semibold mb-3 font-serif">Summarisation & Tagging</h3>
                    <ul className="space-y-2 text-muted-foreground font-serif">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Using GPT-4o / GPT-5 to generate summaries (150–250 chars)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Extracted key takeaways (bulleted)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Auto-tags: AI, GTM, growth, product, martech, sales</span>
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
                    <h3 className="text-xl font-semibold mb-3 font-serif">Storage & Retrieval</h3>
                    <ul className="space-y-2 text-muted-foreground font-serif">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Stored to Google Sheets / Notion / Drive with topic tags, source links, date, relevance ranking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Created searchable archive</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border rounded-xl p-8 bg-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 font-mono text-sm font-semibold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 font-serif">Digest Delivery</h3>
                    <ul className="space-y-2 text-muted-foreground font-serif">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Automated weekly digest email with top 10 items ranked by relevance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Delivered as a skimmable summary</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* System Diagram */}
          <section>
            <h2 className="text-3xl font-serif font-medium mb-8">Automated content pipeline</h2>
            <div className="border rounded-xl p-8 bg-card">
              <div className="flex items-center gap-4 justify-between">
                <div className="flex flex-col gap-3 flex-1">
                  <div className="text-xs font-mono text-muted-foreground mb-2">SOURCES</div>
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
                  <div className="text-xs font-mono text-muted-foreground mb-2">PROCESSING</div>
                  <div className="border rounded p-3 bg-background text-sm">Transcribe</div>
                  <div className="border rounded p-3 bg-background text-sm">Summarise</div>
                  <div className="border rounded p-3 bg-background text-sm">Tag</div>
                </div>
                
                <ArrowRight className="text-muted-foreground flex-shrink-0" />
                
                <div className="flex flex-col gap-3 flex-1">
                  <div className="text-xs font-mono text-muted-foreground mb-2">DELIVERY</div>
                  <div className="border-2 border-primary rounded p-3 bg-primary/5 text-sm font-semibold">Digest Email</div>
                  <div className="border rounded p-3 bg-background text-sm">Knowledge Library</div>
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
                  <div className="text-3xl font-medium text-foreground mb-1">3–5 hrs</div>
                  <div className="font-semibold mb-2 font-serif">Saved per week</div>
                  <p className="text-sm text-muted-foreground font-serif">
                    Time previously spent manually reading newsletters and videos
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                <Database className="h-8 w-8 text-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-3xl font-medium text-foreground mb-1">Searchable</div>
                  <div className="font-semibold mb-2 font-serif">Research archive created</div>
                  <p className="text-sm text-muted-foreground font-serif">
                    Built a knowledge repository of industry insights
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                <Zap className="h-8 w-8 text-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-3xl font-medium text-foreground mb-1">Actionable</div>
                  <div className="font-semibold mb-2 font-serif">Long-form content made usable</div>
                  <p className="text-sm text-muted-foreground font-serif">
                    Transformed lengthy content into skimmable summaries
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                <Filter className="h-8 w-8 text-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-3xl font-medium text-foreground mb-1">Background</div>
                  <div className="font-semibold mb-2 font-serif">AI-powered research</div>
                  <p className="text-sm text-muted-foreground font-serif">
                    Demonstrated how AI agents can handle continuous background research
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

export default ContentSummarization;