import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText?: string;
}

const CTASection = ({ 
  title, 
  description, 
  buttonText = "Book Your Strategy Call" 
}: CTASectionProps) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center glass-effect rounded-3xl p-12 shadow-purple">
        <h2 className="text-4xl md:text-5xl font-dm-sans font-bold mb-6 text-gradient">
          {title}
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <Button size="lg" className="rounded-full shadow-purple hover-lift text-lg px-8">
          {buttonText} <ArrowRight className="ml-2" size={20} />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
