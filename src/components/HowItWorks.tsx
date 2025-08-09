import { Upload, Brain, BarChart3, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Record or Upload",
      description: "Capture your speech directly or upload an existing audio file",
      number: "1"
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our advanced AI processes your speech for comprehensive evaluation", 
      number: "2"
    },
    {
      icon: BarChart3,
      title: "Get Feedback",
      description: "Receive detailed insights on pacing, clarity, and content structure",
      number: "3"
    },
    {
      icon: TrendingUp,
      title: "Improve Skills",
      description: "Apply personalized recommendations to enhance your speaking abilities",
      number: "4"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How <span className="text-accent">SpeakSmart</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your speaking skills in four simple steps. 
            Get professional-grade feedback in minutes, not months.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-card rounded-xl p-6 shadow-soft hover-lift transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-center">
                <div className="relative mb-4">
                  <div className="absolute -top-3 -right-3 w-8 h-8 accent-gradient rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.number}
                  </div>
                  <div className="p-4 rounded-lg hero-gradient mx-auto w-fit">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-primary-light transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to experience the power of AI-driven speech coaching?
          </p>
          <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary-light transition-smooth hover-lift shadow-medium">
            Get Started Now - It's Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;