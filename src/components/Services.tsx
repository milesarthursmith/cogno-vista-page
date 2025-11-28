import { Card } from "@/components/ui/card";
import { Brain, BarChart3, Zap, Shield, Workflow, Cpu } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Planning",
    description: "Develop comprehensive AI roadmaps tailored to your business objectives and technical capabilities."
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Harness the power of your data with advanced analytics and machine learning models."
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Streamline operations with intelligent automation solutions that scale with your business."
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "AI-powered risk assessment and compliance monitoring for secure decision-making."
  },
  {
    icon: Workflow,
    title: "Workflow Integration",
    description: "Seamlessly integrate AI into your existing workflows and business processes."
  },
  {
    icon: Cpu,
    title: "Custom AI Models",
    description: "Build and deploy custom machine learning models tailored to your specific needs."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 text-sm font-medium">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            AI Solutions for Every Need
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive AI consulting services to transform your business operations
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group border border-border bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
