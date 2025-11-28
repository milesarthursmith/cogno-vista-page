import { CheckSquare } from "lucide-react";

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
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <div className="mb-4 inline-block border-2 border-foreground bg-secondary px-4 py-2 font-mono text-sm font-bold">
              WHY CHOOSE US
            </div>
            <h2 className="mb-6 text-4xl md:text-5xl font-bold tracking-tight">
              EXPERTISE THAT DRIVES RESULTS
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              We don't just implement AI—we transform businesses. Our team of experts 
              combines deep technical knowledge with strategic business insight to deliver 
              solutions that create real, measurable value.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 border-2 border-foreground bg-primary p-1">
                    <CheckSquare className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="border-4 border-foreground bg-accent p-8 shadow-lg">
              <div className="space-y-6">
                <div className="border-2 border-foreground bg-card p-6">
                  <div className="text-5xl font-bold mb-2">500+</div>
                  <div className="font-medium">Projects Delivered</div>
                </div>
                <div className="border-2 border-foreground bg-card p-6">
                  <div className="text-5xl font-bold mb-2">98%</div>
                  <div className="font-medium">Client Satisfaction</div>
                </div>
                <div className="border-2 border-foreground bg-card p-6">
                  <div className="text-5xl font-bold mb-2">$50M+</div>
                  <div className="font-medium">Value Generated</div>
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
