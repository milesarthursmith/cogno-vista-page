import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import logo from "@/assets/logo.png";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex h-25 items-center justify-between">
          <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src={logo} alt="humanstuff.ai logo" className="h-20 w-auto object-contain" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
            >
              Services
            </a>
            <a
              href="/examples"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
            >
              Examples
            </a>
            <a
              href="/#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/quiz"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-primary/30 px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-mono text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              Free AI Readiness Audit
            </a>
            <a href="/ai-strategy-call">
              <Button
                size="sm"
                className="inline-flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-mono px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm"
              >
                Get Started
              </Button>
            </a>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
