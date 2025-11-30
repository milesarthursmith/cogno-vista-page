import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Building2, Filter, Clock, Database, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ContentSummarization = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-zinc-100">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 w-56 h-56 rounded-full bg-muted/30 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/2 w-72 h-72 rounded-full bg-muted/20 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-lg font-mono font-semibold">CS</span>
              </div>
              <span className="font-mono text-sm text-muted-foreground">GTM Leadership Team</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Automated Newsletter & YouTube Summarisation Workflow
            </h1>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="font-mono">Content ingestion</Badge>
              <Badge variant="secondary" className="font-mono">AI summarization</Badge>
              <Badge variant="secondary" className="font-mono">Knowledge archive</Badge>
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
                  Client overwhelmed with 30+ newsletters/week, long YouTube content (20+ min videos), articles from teams & industry feeds—with no structured way to store or reuse insights. The challenge was turning information overload into a searchable, actionable knowledge base.
                </p>
              </div>
            </div>
          </section>

          {/* The Problem Statement */}
          <section>
            <h2 className="text-3xl font-bold mb-8">The problem statement</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l-4 border-destructive pl-6">
                <h3 className="font-semibold text-lg mb-2">Content overload</h3>
                <p className="text-muted-foreground">
                  Hundreds of newsletters, YouTube videos, and articles per week with no filtering
                </p>
              </div>
              <div className="border-l-4 border-destructive pl-6">
                <h3 className="font-semibold text-lg mb-2">Time drain</h3>
                <p className="text-muted-foreground">
                  Hours spent scanning content just to find the few relevant insights
                </p>
              </div>
              <div className="border-l-4 border-destructive pl-6">
                <h3 className="font-semibold text-lg mb-2">No archive</h3>
                <p className="text-muted-foreground">
                  Valuable insights lost because there was no systematic way to store and retrieve them
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
                <img src="/src/assets/n8n.png" alt="n8n" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src="/src/assets/google_cloud.png" alt="Google Cloud" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
                <div className="text-sm text-muted-foreground font-mono">+ Notion</div>
                <div className="text-sm text-muted-foreground font-mono">+ OpenAI</div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="border rounded-xl p-8 bg-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 font-mono text-sm font-semibold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Content Ingestion</h3>
                    <ul className="space-y-2 text-muted-foreground">
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
                    <h3 className="text-xl font-semibold mb-3">Summarisation & Tagging</h3>
                    <ul className="space-y-2 text-muted-foreground">
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
                    <h3 className="text-xl font-semibold mb-3">Storage & Retrieval</h3>
                    <ul className="space-y-2 text-muted-foreground">
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
                    <h3 className="text-xl font-semibold mb-3">Digest Delivery</h3>
                    <ul className="space-y-2 text-muted-foreground">
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
            <h2 className="text-3xl font-bold mb-8">Automated content pipeline</h2>
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
            <h2 className="text-3xl font-bold mb-8">Impact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                <Clock className="h-8 w-8 text-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-3xl font-bold text-foreground mb-1">3–5 hrs</div>
                  <div className="font-semibold mb-2">Saved per week</div>
                  <p className="text-sm text-muted-foreground">
                    Time previously spent manually reading newsletters and videos
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                <Database className="h-8 w-8 text-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-3xl font-bold text-foreground mb-1">Searchable</div>
                  <div className="font-semibold mb-2">Research archive created</div>
                  <p className="text-sm text-muted-foreground">
                    Built a knowledge repository of industry insights
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                <Zap className="h-8 w-8 text-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-3xl font-bold text-foreground mb-1">Actionable</div>
                  <div className="font-semibold mb-2">Long-form content made usable</div>
                  <p className="text-sm text-muted-foreground">
                    Transformed lengthy content into skimmable summaries
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                <Filter className="h-8 w-8 text-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-3xl font-bold text-foreground mb-1">Background</div>
                  <div className="font-semibold mb-2">AI-powered research</div>
                  <p className="text-sm text-muted-foreground">
                    Demonstrated how AI agents can handle continuous background research
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

export default ContentSummarization;