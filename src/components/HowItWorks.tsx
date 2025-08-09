import { Upload, Brain, BarChart3, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Record or Upload",
      description: "Capture your speech directly or upload an existing audio file",
      number: "01",
      delay: 100
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our advanced AI processes your speech for comprehensive evaluation", 
      number: "02",
      delay: 200
    },
    {
      icon: BarChart3,
      title: "Get Feedback",
      description: "Receive detailed insights on pacing, clarity, and content structure",
      number: "03",
      delay: 300
    },
    {
      icon: TrendingUp,
      title: "Improve Skills",
      description: "Apply personalized recommendations to enhance your speaking abilities",
      number: "04",
      delay: 400
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-muted/10 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl floating" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-space font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Get professional speaking feedback in just four simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center glass p-8 rounded-2xl border-0 hover-lift animate-fade-in group relative"
              style={{ animationDelay: `${step.delay}ms`, animationFillMode: 'both' }}
            >
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 -right-6 w-12 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-50"></div>
              )}
              
              <div className="mb-6">
                <div className="p-5 rounded-2xl accent-gradient w-fit mx-auto neon-glow group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <div className="mt-6 text-3xl font-space font-bold gradient-text">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-space font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-light">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;