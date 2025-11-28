import { Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-4 max-w-7xl mx-auto">
          <div>
            <span className="font-mono font-medium text-xl">humanstuff.ai</span>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4 font-serif">
              AI consulting for practical, production-ready systems.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-medium font-mono">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-serif">
              <li><a href="#" className="hover:text-foreground transition-colors">AI Agents & Workflows</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">GTM Engineering</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">AI-Powered Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-medium font-mono">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-serif">
              <li><a href="#about" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-medium font-mono">Follow Us</h4>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-secondary hover:bg-muted transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-secondary hover:bg-muted transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-secondary hover:bg-muted transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p className="font-serif">&copy; 2025 humanstuff.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
