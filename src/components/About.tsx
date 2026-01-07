import { CheckCircle2 } from "lucide-react";
const experience = ["10+ years in B2B & B2C marketing (Red Bull, Universal Music, Lightspeed Commerce)", "We work with SMB, mid-market and selected enterprise teams", "We focus on practical AI systems that ship, not slideware", "Melbourne based, global remote-first approach"];
const About = () => {
  return <section id="about" className="py-12 md:py-24">
      
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:gap-16 lg:grid-cols-2 items-start max-w-7xl mx-auto">
          <div>
            <h2 className="mb-6 text-4xl md:text-5xl font-serif font-medium">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground mb-2 font-serif">AI GTM Engineers</p>
            <p className="text-lg text-muted-foreground mb-8 font-serif">Growth Marketing · Technical Consulting</p>
            
            <div className="space-y-4">
              {experience.map((item, index) => <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-base font-serif">{item}</span>
                </div>)}
            </div>
          </div>
          
          <div className="relative bg-secondary/50 rounded-xl p-12 border border-border">
            <div className="space-y-8">
              <div>
                <div className="text-5xl font-serif font-medium mb-2">100+</div>
                <div className="text-muted-foreground font-serif">Hours Saved Monthly</div>
              </div>
              <div>
                <div className="text-5xl font-serif font-medium mb-2">42%</div>
                <div className="text-muted-foreground font-serif">Cost per SQL Reduction</div>
              </div>
              <div>
                <div className="text-5xl font-serif font-medium mb-2">10+</div>
                <div className="text-muted-foreground font-serif">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;