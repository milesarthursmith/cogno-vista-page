import { Card } from "@/components/ui/card";
import { Brain, BarChart3, Zap } from "lucide-react";
import automationImage from "@/assets/automation-visual.jpg";
import analyticsImage from "@/assets/analytics-visual.jpg";
import strategyImage from "@/assets/strategy-visual.jpg";

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Planning",
    description: "Develop comprehensive AI roadmaps tailored to your business objectives and technical capabilities.",
    image: strategyImage
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Harness the power of your data with advanced analytics and machine learning models.",
    image: analyticsImage
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Streamline operations with intelligent automation solutions that scale with your business.",
    image: automationImage
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block border-2 border-foreground bg-background px-4 py-2 font-mono text-sm font-bold">
            OUR SERVICES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            AI SOLUTIONS FOR EVERY NEED
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-2 border-foreground bg-card shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center border-2 border-foreground bg-primary">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
