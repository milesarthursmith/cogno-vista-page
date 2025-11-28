import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
      
      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 text-sm font-medium">
              Let's Talk
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to take the busywork off your GTM team's plate?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's identify one workflow we can automate in the next 30 days.
            </p>
          </div>

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
                <label className="mb-3 block font-semibold text-sm">Company</label>
                <Input 
                  className="rounded-xl bg-background/50 border-border h-12 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  placeholder="Your company (optional)"
                />
              </div>
              <div>
                <label className="mb-3 block font-semibold text-sm">Message</label>
                <Textarea 
                  className="rounded-xl bg-background/50 border-border min-h-32 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  placeholder="Tell us about your workflow challenges..."
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
