import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="font-mono text-xl font-bold tracking-tight">
            AI.CONSULTING
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="font-medium hover:underline">
              Services
            </a>
            <a href="#about" className="font-medium hover:underline">
              About
            </a>
            <a href="#contact" className="font-medium hover:underline">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex border-2 border-foreground bg-primary text-primary-foreground shadow-sm hover:shadow-md transition-shadow">
              Get Started
            </Button>
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
