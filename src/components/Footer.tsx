import { Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t-2 border-foreground bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 font-mono text-xl font-bold">AI.CONSULTING</div>
            <p className="text-sm text-muted-foreground">
              Transforming businesses through intelligent AI solutions.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:underline">AI Strategy</a></li>
              <li><a href="#" className="hover:underline">Data Analytics</a></li>
              <li><a href="#" className="hover:underline">Automation</a></li>
              <li><a href="#" className="hover:underline">Training</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Case Studies</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="inline-flex h-10 w-10 items-center justify-center border-2 border-foreground bg-secondary hover:bg-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="inline-flex h-10 w-10 items-center justify-center border-2 border-foreground bg-secondary hover:bg-accent transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="inline-flex h-10 w-10 items-center justify-center border-2 border-foreground bg-secondary hover:bg-accent transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t-2 border-foreground pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 AI Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
