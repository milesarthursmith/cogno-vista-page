import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AbstractBackground from "@/components/AbstractBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Shield, Boxes, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <AbstractBackground variant="hero" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-tight">
              We build AI systems that respect the humans using them.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-serif mb-6">
              humanstuff.ai is a Melbourne-based AI consulting studio. We are a small team focused on designing and delivering practical, production-ready automations for sales, marketing and operations.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground font-serif mb-8">
              We automate the busywork so you can focus on the human stuff. The strategic work. The conversations. The customers. The growth.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground font-serif mb-10">
              From AI agents to workflow automation to GTM engineering, we help teams remove repetitive work, uncover insights hidden in their data, and scale impact without increasing headcount.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 h-11 font-mono text-sm"
              >
                <Link to="/ai-strategy-call">
                  Book a call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors px-6 h-11 font-mono text-sm"
              >
                <Link to="/quiz">
                  Free AI Readiness Audit
                </Link>
              </Button>
            </div>
            
            <p className="text-xs md:text-sm text-muted-foreground/80 font-serif mt-4">
              Trusted by founders, marketers and operations teams using AI to remove manual work.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-8">
              The Studio Behind humanstuff.ai
            </h2>
            <div className="space-y-6 text-base md:text-lg font-serif text-muted-foreground">
              <p>
                humanstuff.ai was created by a small team based in Melbourne with backgrounds in growth, marketing, sales operations and analytics. After years of working across B2B SaaS, SMBs and mid-market companies, we kept seeing the same problem.
              </p>
              <p>
                Talented people were spending too much time on repetitive, manual work that AI and automation could handle more efficiently.
              </p>
              <p className="font-medium text-foreground">
                We started building the systems we wished we had.
              </p>
              <ul className="space-y-3 ml-6">
                <li>• Data pipelines that save more than 100 hours per month of manual analysis</li>
                <li>• AI BDR and outreach programs that lower Cost per SQL by more than 40 percent</li>
                <li>• Conversation intelligence platforms used by leadership and product teams</li>
                <li>• Enrichment and TAM mapping engines that remove days of research</li>
                <li>• Multi-agent workflows that generate SQLs and revenue consistently</li>
              </ul>
              <p>
                Today, humanstuff.ai operates as a focused, specialist team. When needed, we bring in trusted engineers, analysts or specialists to deliver specific components at a high standard. Our mission is simple: help teams spend less time on admin and more time on the work only humans can do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Think About AI */}
      <section className="py-24 bg-background relative overflow-hidden">
        <AbstractBackground variant="services" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-4 text-center">
              How We Think About AI
            </h2>
            <p className="text-lg text-muted-foreground font-serif mb-16 text-center max-w-2xl mx-auto">
              Our principles guide every system we build
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-medium mb-4 text-foreground">
                  Augment, not replace
                </h3>
                <p className="text-base font-serif text-muted-foreground leading-relaxed">
                  AI should make people more effective. We design systems that take care of repetitive, predictable work so that humans stay in control where judgement and context matter.
                </p>
              </div>
              
              <div className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-medium mb-4 text-foreground">
                  Ethical and responsible by default
                </h3>
                <p className="text-base font-serif text-muted-foreground leading-relaxed">
                  We build systems we would be comfortable using ourselves. Privacy, appropriate data handling and clear guardrails are part of every project. Trust is a requirement, not an extra.
                </p>
              </div>
              
              <div className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                  <Boxes className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-medium mb-4 text-foreground">
                  Built for production, not demos
                </h3>
                <p className="text-base font-serif text-muted-foreground leading-relaxed">
                  Everything we deliver connects directly into your existing stack. Salesforce, HubSpot, Gong, BigQuery, Relevance AI, n8n, Clay, and more. If it does not work where the real work happens, we do not ship it.
                </p>
              </div>
              
              <div className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-medium mb-4 text-foreground">
                  Start where the pain is
                </h3>
                <p className="text-base font-serif text-muted-foreground leading-relaxed">
                  The best AI systems begin with the parts of your workflow that slow your team down. Meeting notes. Enrichment. Reporting. Outreach. Analysis. If it is repetitive and steals time, we automate it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-12">
              How We Work
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-medium mb-3 text-foreground">
                  1. Discovery and Audit
                </h3>
                <p className="text-base md:text-lg font-serif text-muted-foreground">
                  We map your workflows, data, tools and bottlenecks.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-medium mb-3 text-foreground">
                  2. System Architecture
                </h3>
                <p className="text-base md:text-lg font-serif text-muted-foreground">
                  We design the agent ecosystem including responsibilities, safety and human-in-the-loop logic.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-medium mb-3 text-foreground">
                  3. Build and Integrate
                </h3>
                <p className="text-base md:text-lg font-serif text-muted-foreground">
                  We create agents and workflows directly inside your current stack such as GCP, Salesforce, n8n, Relevance AI, Gong, Clay and Zapier.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-medium mb-3 text-foreground">
                  4. Deploy and Monitor
                </h3>
                <p className="text-base md:text-lg font-serif text-muted-foreground">
                  We put evaluation, monitoring and rules of engagement in place so the system is predictable and trustworthy.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-medium mb-3 text-foreground">
                  5. Scale and Iterate
                </h3>
                <p className="text-base md:text-lg font-serif text-muted-foreground">
                  Once one workflow is working, we expand into adjacent processes and teams.
                </p>
              </div>
            </div>
            <p className="text-base md:text-lg font-serif text-muted-foreground mt-8">
              This structure works for SMB and mid-market teams as well as focused programs inside enterprise environments.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are a Good Fit For */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-12">
              Who We Are a Good Fit For
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl md:text-2xl font-serif font-medium mb-4 text-foreground">
                  SMB and Mid-Market Teams
                </h3>
                <ul className="space-y-3 text-base font-serif text-muted-foreground">
                  <li>• Start with a narrow, high-return workflow</li>
                  <li>• Fixed scope and clear before and after metrics</li>
                  <li>• Built around your existing tools</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl md:text-2xl font-serif font-medium mb-4 text-foreground">
                  Enterprise Teams
                </h3>
                <ul className="space-y-3 text-base font-serif text-muted-foreground">
                  <li>• Specialist support alongside internal data and engineering</li>
                  <li>• Programs such as win and loss analytics, GTM AI strategy or internal tools</li>
                  <li>• Clear boundaries, documentation and handover</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-background relative overflow-hidden">
        <AbstractBackground variant="contact" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">
              Ready to take the busywork off your plate?
            </h2>
            <p className="text-lg text-muted-foreground font-serif mb-10">
              Book a 30-minute call to review your workflows, identify AI opportunities and outline the next steps.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                asChild
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 h-11 font-mono text-sm"
              >
                <Link to="/ai-strategy-call">
                  Book a call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors px-6 h-11 font-mono text-sm"
              >
                <Link to="/quiz">
                  Take the Free AI Readiness Audit
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;