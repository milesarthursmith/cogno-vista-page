import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AbstractBackground from "@/components/AbstractBackground";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <AbstractBackground variant="contact" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">
            Ready to take the busywork off your plate?
          </h2>
          <p className="text-lg text-muted-foreground font-serif mb-10">
            Book a 30-minute call to review your workflows, identify AI opportunities, and outline next steps.
          </p>

          <Button 
            size="lg"
            onClick={() => (window.location.href = "/ai-strategy-call")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 h-12 font-mono"
          >
            Book a call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;