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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need to <span className="text-secondary">Excel</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI analyzes multiple aspects of your speaking to give you comprehensive, 
            actionable feedback for rapid improvement.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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