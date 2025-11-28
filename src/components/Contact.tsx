import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
      
      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 text-sm font-medium">
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Start Your AI Journey Today
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can help transform your business with AI
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-10 shadow-2xl">
              <form className="space-y-6">
                <div>
                  <label className="mb-3 block font-semibold text-sm">Name</label>
                  <Input 
                    className="rounded-xl bg-background/50 border-border h-12 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-3 block font-semibold text-sm">Email</label>
                  <Input 
                    type="email"
                    className="rounded-xl bg-background/50 border-border h-12 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="mb-3 block font-semibold text-sm">Message</label>
                  <Textarea 
                    className="rounded-xl bg-background/50 border-border min-h-32 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-14 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                >
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="group rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all hover:-translate-y-1 hover:border-primary/30">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Email Us</h3>
                <p className="text-muted-foreground">contact@aiconsulting.com</p>
              </div>

              <div className="group rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all hover:-translate-y-1 hover:border-primary/30">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Call Us</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>

              <div className="group rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all hover:-translate-y-1 hover:border-primary/30">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Visit Us</h3>
                <p className="text-muted-foreground">123 AI Street, Tech City, TC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
