import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal";

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
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center glass-card rounded-3xl p-20 shadow-purple hover-lift animate-fade-up">
        <h2 className="text-4xl md:text-5xl font-dm-sans font-bold mb-10 text-gradient leading-relaxed">
          {title}
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <Button size="lg" className="rounded-full shadow-purple hover-lift text-lg px-12 h-16 font-semibold" onClick={() => setIsContactOpen(true)}>
          {buttonText} <ArrowRight className="ml-2" size={22} />
        </Button>
      </div>
    </section>

    <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default CTASection;
