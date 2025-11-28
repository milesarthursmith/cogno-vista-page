import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-ai-consulting.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block border-2 border-foreground bg-secondary px-4 py-2 font-mono text-sm font-bold">
            AI TRANSFORMATION
          </div>
          
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            TRANSFORM YOUR BUSINESS WITH AI
          </h1>
          
          <p className="mb-12 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Expert consulting services to integrate artificial intelligence into your operations, 
            drive efficiency, and unlock unprecedented growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="border-2 border-foreground bg-primary text-primary-foreground shadow-md hover:shadow-lg transition-shadow text-lg px-8"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-foreground bg-background shadow-sm hover:shadow-md transition-shadow text-lg px-8"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
