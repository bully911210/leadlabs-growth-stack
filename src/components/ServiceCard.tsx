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
    <Card className="hover-lift shadow-soft hover:shadow-purple transition-all duration-300 border-border/50">
      <CardHeader>
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="text-primary" size={24} />
        </div>
        <CardTitle className="text-2xl font-dm-sans">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link to={link}>
          <Button variant="outline" className="w-full rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
            Learn More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
