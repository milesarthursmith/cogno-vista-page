import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="humanstuff.ai logo" className="h-8 w-8" />
            <span className="font-medium text-xl font-mono">humanstuff.ai</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="/agents" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Agent Examples
            </a>
            <a href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button size="sm" className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;