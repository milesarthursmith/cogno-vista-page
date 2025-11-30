import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudyCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const CaseStudyCard = ({ title, description, image, link }: CaseStudyCardProps) => {
  return (
    <Link to={link} className="group block">
      <div className="border rounded-xl overflow-hidden bg-card transition-all hover:shadow-lg">
        <div className="aspect-[16/9] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
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