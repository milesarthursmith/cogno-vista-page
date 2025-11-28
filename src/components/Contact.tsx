import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">
              Ready to take the busywork off your GTM team's plate?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's identify one workflow we can automate in the next 30 days.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium">Name</label>
                <Input 
                  className="rounded-lg bg-background border-border h-11"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Email</label>
                <Input 
                  type="email"
                  className="rounded-lg bg-background border-border h-11"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Company</label>
                <Input 
                  className="rounded-lg bg-background border-border h-11"
                  placeholder="Your company (optional)"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Message</label>
                <Textarea 
                  className="rounded-lg bg-background border-border min-h-32 resize-none"
                  placeholder="Tell us about your workflow challenges..."
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg h-11"
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
