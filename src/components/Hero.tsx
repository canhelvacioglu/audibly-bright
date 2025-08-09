import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center subtle-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="AI Speech Analysis Visualization" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Master <span className="hero-gradient bg-clip-text text-transparent">Public Speaking</span><br />
            with AI-Powered Feedback
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Get instant, professional analysis of your speaking skills. Upload a speech and receive 
            detailed feedback on pacing, clarity, and confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="accent" 
              size="lg" 
              className="text-lg px-8 py-6 pulse-gentle hover-lift group"
            >
              Start Your Analysis
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 hover-lift"
            >
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-12 text-sm text-muted-foreground">
            ✨ Free analysis • No account required • Instant results
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse-gentle"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-pulse-gentle"></div>
    </section>
  );
};

export default Hero;