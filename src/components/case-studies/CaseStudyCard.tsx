import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudyCardProps {
  title: string;
  description: string;
  link: string;
  color: string;
}

const CaseStudyCard = ({ title, description, link, color }: CaseStudyCardProps) => {
  return (
    <Link to={link} className="group block">
      <div className="border rounded-xl overflow-hidden bg-card transition-all hover:shadow-lg">
        <div className={`aspect-[16/9] ${color} relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-background/30 blur-2xl" />
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-background/20 blur-3xl" />
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4">
            {description}
          </p>
          <div className="flex items-center gap-2 text-sm font-mono text-primary">
            Explore case study
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;