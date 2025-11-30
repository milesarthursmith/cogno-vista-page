import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import logo from "@/assets/logo.png";
const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src={logo} alt="humanstuff.ai logo" className="h-16 w-auto object-contain" />
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="/quiz" className="text-sm text-primary hover:text-primary/80 transition-colors font-mono font-medium">
              Free Audit
            </a>
            <a href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono">
              Services
            </a>
            <a href="/examples" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono">
              Examples
            </a>
            <a href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="/#contact">
              <Button size="sm" className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-mono">
                Get Started
              </Button>
            </a>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;