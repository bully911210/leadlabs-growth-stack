import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon: Icon, title, description, link }: ServiceCardProps) => {
  return (
    <Card className="hover-lift shadow-soft hover:shadow-purple transition-all duration-300 border-border/50 h-full flex flex-col">
      <CardHeader className="flex-grow p-8">
        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-8">
          <Icon className="text-primary" size={32} />
        </div>
        <CardTitle className="text-2xl font-dm-sans mb-5 leading-relaxed">{title}</CardTitle>
        <CardDescription className="text-lg leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0 pb-8 px-8">
        <Link to={link}>
          <Button variant="outline" className="w-full rounded-full hover:bg-primary hover:text-primary-foreground transition-colors h-14 font-medium text-base">
            Learn More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
