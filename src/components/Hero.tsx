import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-brunch.jpg";

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Brunch gourmand et café de spécialité"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg animate-fade-in">
          La Petite Bleue
        </h1>
        <p className="text-xl md:text-2xl text-white mb-4 font-light ">
          Café de spécialité & All-day Brunch
        </p>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
          Votre refuge gourmand dans le 9ème arrondissement de Paris
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" asChild>
            <a href="#menu">Voir notre carte</a>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
            <a href="#histoire">Découvrir notre histoire</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
