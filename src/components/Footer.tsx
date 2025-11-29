import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-3 max-w-7xl mx-auto">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="humanstuff.ai logo" className="h-8 w-8" />
              <span className="font-mono font-medium text-xl">humanstuff.ai</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-serif">
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
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p className="font-serif">&copy; 2025 humanstuff.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
