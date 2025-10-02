import { useState } from "react";
import { Menu, X } from "lucide-react";
import ReservationDialog from "@/components/ReservationDialog";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Accueil", href: "#accueil" },
    { label: "Notre carte", href: "#menu" },
    { label: "Notre histoire", href: "#histoire" },
    { label: "Nous trouver", href: "#localisation" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#accueil" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-primary">La Petite Bleue</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <ReservationDialog
              trigger={
                <Button variant="default" size="sm">
                  Réserver
                </Button>
              }
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <ReservationDialog
                trigger={
                  <Button variant="default" size="sm" className="w-full">
                    Réserver
                  </Button>
                }
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
