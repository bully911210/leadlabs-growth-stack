import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  backgroundImage?: string;
}

const Hero = ({ title, subtitle, ctaText = "Book a Strategy Call", backgroundImage }: HeroProps) => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/50 to-black/30" />
        </>
      )}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center py-24">
        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-dm-sans font-bold mb-8 animate-fade-up leading-relaxed ${backgroundImage ? 'text-white drop-shadow-lg' : ''}`}>
          {title}
        </h1>
        <p className={`text-xl md:text-2xl mb-12 max-w-2xl mx-auto animate-fade-up leading-relaxed ${backgroundImage ? 'text-white/95 drop-shadow-md' : 'text-muted-foreground'}`} style={{ animationDelay: '0.1s' }}>
          {subtitle}
        </p>
        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <Button size="lg" className="rounded-full shadow-elevated hover-lift text-lg px-12 h-16 font-semibold" onClick={() => setIsContactOpen(true)}>
            {ctaText} <ArrowRight className="ml-2" size={22} />
          </Button>
        </div>
      </div>
    </section>

    <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default Hero;
