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
      className="glass p-8 rounded-2xl border-0 hover-lift animate-fade-in group cursor-pointer"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
    >
      <div className="mb-6">
        <div className="p-4 rounded-2xl hero-gradient w-fit neon-glow group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-8 w-8 text-white" />
        </div>
      </div>
      <h3 className="text-2xl font-space font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground/90 leading-relaxed font-normal text-base">{description}</p>
      
      {/* Decorative element */}
      <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500 rounded-full"></div>
    </div>
  );
};

export default FeatureCard;