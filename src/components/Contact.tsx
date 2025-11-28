import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-block border-2 border-foreground bg-background px-4 py-2 font-mono text-sm font-bold">
              GET IN TOUCH
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              START YOUR AI JOURNEY TODAY
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="border-2 border-foreground bg-card p-8 shadow-sm">
              <form className="space-y-6">
                <div>
                  <label className="mb-2 block font-bold">Name</label>
                  <Input 
                    className="border-2 border-foreground shadow-2xs focus:shadow-xs transition-shadow"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-bold">Email</label>
                  <Input 
                    type="email"
                    className="border-2 border-foreground shadow-2xs focus:shadow-xs transition-shadow"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-bold">Message</label>
                  <Textarea 
                    className="border-2 border-foreground shadow-2xs focus:shadow-xs transition-shadow min-h-32"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full border-2 border-foreground bg-primary text-primary-foreground shadow-sm hover:shadow-md transition-shadow"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="border-2 border-foreground bg-card p-6 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center border-2 border-foreground bg-primary">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Email Us</h3>
                <p className="text-muted-foreground">contact@aiconsulting.com</p>
              </div>

              <div className="border-2 border-foreground bg-card p-6 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center border-2 border-foreground bg-primary">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Call Us</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>

              <div className="border-2 border-foreground bg-card p-6 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center border-2 border-foreground bg-primary">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Visit Us</h3>
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
