import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="bg-card rounded-xl p-6 shadow-soft hover-lift transition-smooth animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="p-3 rounded-lg hero-gradient mb-4">
          <Icon className="h-8 w-8 text-white" />
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
        
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;