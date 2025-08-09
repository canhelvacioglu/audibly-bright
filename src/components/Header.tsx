import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const Header = () => {
  return (
    <header className="w-full glass border-b border-border/20 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-xl hero-gradient neon-glow">
            <Mic className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-space font-bold gradient-text">SpeakSmart AI</h1>
        </div>
        
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth font-space font-medium">
              Home
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-smooth font-space font-medium">
              How It Works
            </a>
            <span className="text-muted-foreground/50 cursor-not-allowed font-space text-sm">
              Pricing (Coming Soon)
            </span>
          </nav>
          
          <ThemeToggle />
          
          <Button variant="hero" size="sm" className="neon-glow hover-lift font-space font-medium">
            Try Free Analysis
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;