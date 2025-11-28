import { CheckCircle2 } from "lucide-react";

const experience = [
  "10+ years in B2B & B2C marketing (Red Bull, Universal Music, Lightspeed Commerce)",
  "We work with SMB, mid-market and selected enterprise teams",
  "We focus on practical AI systems that ship, not slideware",
  "Melbourne based, global remote-first approach"
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5" />
      
      <div className="container relative mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-center max-w-7xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 text-sm font-medium">
              About
            </div>
            <h2 className="mb-6 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Our Team
            </h2>
            <p className="text-xl text-muted-foreground mb-2">AI GTM Engineers</p>
            <p className="text-xl text-muted-foreground mb-8">Growth Marketing · Technical Consulting</p>
            
            <div className="space-y-4 mb-10">
              {experience.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-muted-foreground">Phone:</span>
                <a href="tel:0406629203" className="text-foreground hover:text-primary transition-colors">
                  0406 629 203
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-muted-foreground">Email:</span>
                <a href="mailto:milessmith76@gmail.com" className="text-foreground hover:text-primary transition-colors">
                  milessmith76@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-muted-foreground">LinkedIn:</span>
                <a 
                  href="https://linkedin.com/in/milesarthursmith" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  linkedin.com/in/milesarthursmith
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-muted-foreground">Location:</span>
                <span className="text-foreground">Melbourne / Global (remote-first)</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-12 backdrop-blur-sm border border-primary/20 shadow-2xl shadow-primary/10">
              <div className="space-y-6">
                <div className="rounded-2xl bg-card/80 backdrop-blur-sm border border-border p-8 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all hover:-translate-y-1">
                  <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">100+</div>
                  <div className="font-medium text-muted-foreground">Hours Saved Monthly</div>
                </div>
                <div className="rounded-2xl bg-card/80 backdrop-blur-sm border border-border p-8 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all hover:-translate-y-1">
                  <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">42%</div>
                  <div className="font-medium text-muted-foreground">Cost per SQL Reduction</div>
                </div>
                <div className="rounded-2xl bg-card/80 backdrop-blur-sm border border-border p-8 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all hover:-translate-y-1">
                  <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">10+</div>
                  <div className="font-medium text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
