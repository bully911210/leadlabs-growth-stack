import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  backgroundImage?: string;
}

const Hero = ({ title, subtitle, ctaText = "Book a Strategy Call", backgroundImage }: HeroProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {backgroundImage && (
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-dm-sans font-bold mb-6 animate-fade-up ${backgroundImage ? 'text-white' : ''}`}>
          {title}
        </h1>
        <p className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-up ${backgroundImage ? 'text-white/90' : 'text-muted-foreground'}`} style={{ animationDelay: '0.1s' }}>
          {subtitle}
        </p>
        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <Button size="lg" className="rounded-full shadow-purple hover-lift text-lg px-8">
            {ctaText} <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
