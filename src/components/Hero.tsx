import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center subtle-gradient overflow-hidden cyber-grid">
      <div className="absolute inset-0 opacity-3">
        <img 
          src={heroImage} 
          alt="AI Speech Analysis Visualization" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl floating"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-2xl floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-accent/20 rounded-full blur-xl floating" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="font-space text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Master <span className="gradient-text">Public Speaking</span><br />
              <span className="text-4xl md:text-6xl text-muted-foreground font-light">
                with AI-Powered Feedback
              </span>
            </h1>
          </div>
          
          <div className="animate-slide-in-left" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Get instant, professional analysis of your speaking skills. Upload a speech and receive 
              detailed feedback on pacing, clarity, and confidence.
            </p>
          </div>
          
          <div className="animate-scale-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                variant="accent" 
                size="lg" 
                className="text-lg px-12 py-8 neon-glow hover-lift group font-space font-medium"
              >
                Start Your Analysis
                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-12 py-8 hover-lift glass border-0 font-space font-medium"
              >
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <div className="glass rounded-2xl p-6 max-w-md mx-auto">
              <p className="text-sm text-muted-foreground font-mono">
                ✨ Free analysis • No account required • Instant results
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;