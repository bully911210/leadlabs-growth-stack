import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/meta-ads", label: "Meta Ads" },
    { path: "/whatsapp-api", label: "WhatsApp API" },
    { path: "/n8n-automation", label: "n8n Automation" },
    { path: "/about-franz", label: "About Franz" },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-nav shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-dm-sans font-bold text-gradient">LeadLabs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-base font-medium transition-colors ${
                  isActive(path)
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {label}
              </Link>
            ))}
            <Button size="default" className="rounded-full shadow-purple h-11 px-6 font-semibold" onClick={() => setIsContactOpen(true)}>
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-up">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActive(path)
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {label}
              </Link>
            ))}
            <Button size="default" className="w-full mt-4 rounded-full shadow-purple h-11 font-semibold" onClick={() => {
              setIsContactOpen(true);
              setIsOpen(false);
            }}>
              Book a Call
            </Button>
          </div>
        )}
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </nav>
  );
};

export default Nav;
