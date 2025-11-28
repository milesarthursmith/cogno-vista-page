import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Proven track record with Fortune 500 companies",
  "Custom AI solutions tailored to your industry",
  "End-to-end implementation and support",
  "ROI-focused strategies with measurable outcomes",
  "Expert team with decades of combined experience",
  "Cutting-edge technology partnerships"
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-center max-w-7xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-accent-foreground mb-6 text-sm font-medium">
              Why Choose Us
            </div>
            <h2 className="mb-6 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Expertise That Drives Results
            </h2>
            <p className="mb-10 text-lg text-muted-foreground leading-relaxed">
              We don't just implement AI—we transform businesses. Our team of experts 
              combines deep technical knowledge with strategic business insight to deliver 
              solutions that create real, measurable value.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 p-12 backdrop-blur-sm border border-border shadow-2xl">
              <div className="space-y-6">
                <div className="rounded-2xl bg-card border border-border p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">500+</div>
                  <div className="font-medium text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="rounded-2xl bg-card border border-border p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">98%</div>
                  <div className="font-medium text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="rounded-2xl bg-card border border-border p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">$50M+</div>
                  <div className="font-medium text-muted-foreground">Value Generated</div>
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
