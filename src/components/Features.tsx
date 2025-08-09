import FeatureCard from "./FeatureCard";
import { Mic, FileText, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Mic,
      title: "Audio Analysis",
      description: "Advanced speech recognition and pacing analysis to identify areas for improvement",
      delay: 100
    },
    {
      icon: FileText,
      title: "Content Review", 
      description: "AI evaluates structure, clarity, and audience appropriateness of your speech",
      delay: 200
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Get detailed suggestions and practice recommendations within seconds",
      delay: 300
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-space font-bold mb-6">
            Everything You Need to <span className="gradient-text">Excel</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Our AI analyzes multiple aspects of your speaking to give you comprehensive, 
            actionable feedback for rapid improvement.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;