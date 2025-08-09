import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-lg hero-gradient">
            <Mic className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">SpeakSmart AI</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
              Home
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-smooth">
              How It Works
            </a>
            <span className="text-muted-foreground/50 cursor-not-allowed">
              Pricing (Coming Soon)
            </span>
          </nav>
          
          <ThemeToggle />
          
          <Button variant="hero" size="sm" className="shadow-soft hover:shadow-medium">
            Try Free Analysis
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;