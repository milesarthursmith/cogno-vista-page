import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Building2 } from "lucide-react";
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
                  Like many GTM leaders, this client struggled with endless newsletters, long YouTube content, overwhelming article volume, and no way to store or reuse insights. They wanted the signal, without the noise.
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
            
            <div className="space-y-8">
              <div className="border rounded-xl p-8 bg-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 font-mono text-sm font-semibold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Content Ingestion</h3>
                    <div className="grid grid-cols-3 gap-3 mb-3">
                      <div className="border rounded-lg p-3 bg-background text-sm flex items-center gap-2">
                        <span>📧</span> Email newsletters
                      </div>
                      <div className="border rounded-lg p-3 bg-background text-sm flex items-center gap-2">
                        <span>📺</span> YouTube channels
                      </div>
                      <div className="border rounded-lg p-3 bg-background text-sm flex items-center gap-2">
                        <span>📰</span> RSS feeds
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      All content automatically converted to a common text format for processing
                    </p>
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
                    <p className="text-muted-foreground mb-3">AI generated for each piece of content:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Bullet point summaries highlighting key points</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Main takeaways and actionable insights</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Topic tags (AI, GTM, product, growth, sales, marketing, etc.)</span>
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
                    <p className="text-muted-foreground mb-3">Built a searchable knowledge base with:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Source links to original content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Smart tagging for easy filtering</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Filters by topic, source, and recency</span>
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
                    <p className="text-muted-foreground">
                      Automated daily or weekly digest email with the top content, curated based on relevance and importance. Team members get only what matters to them.
                    </p>
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
              <div className="border rounded-xl p-6 bg-card">
                <div className="text-4xl font-bold text-primary mb-2">Curated</div>
                <div className="font-semibold mb-2">Intelligence stream</div>
                <p className="text-sm text-muted-foreground">
                  Converted overwhelming feed into valuable, actionable insights
                </p>
              </div>
              <div className="border rounded-xl p-6 bg-card">
                <div className="text-4xl font-bold text-primary mb-2">Hours</div>
                <div className="font-semibold mb-2">Saved per week</div>
                <p className="text-sm text-muted-foreground">
                  Team spends time on decisions, not content scanning
                </p>
              </div>
              <div className="border rounded-xl p-6 bg-card">
                <div className="text-4xl font-bold text-primary mb-2">Archive</div>
                <div className="font-semibold mb-2">Research library</div>
                <p className="text-sm text-muted-foreground">
                  Built a searchable knowledge base for future reference
                </p>
              </div>
              <div className="border rounded-xl p-6 bg-card">
                <div className="text-4xl font-bold text-primary mb-2">Background</div>
                <div className="font-semibold mb-2">Agent automation</div>
                <p className="text-sm text-muted-foreground">
                  Demonstrated power of quiet, continuous AI work
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

export default ContentSummarization;