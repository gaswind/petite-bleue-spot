import cafeInterior from "@/assets/cafe-interior.jpg";

const About = () => {
  return (
    <section id="histoire" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src={cafeInterior}
              alt="Intérieur de La Petite Bleue"
              className="rounded-2xl shadow-[var(--shadow-hover)] w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Notre histoire
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Née d'une passion pour le café de spécialité et la convivialité, La Petite Bleue 
                est bien plus qu'un simple café parisien.
              </p>
              <p>
                Dans notre espace chaleureux du 9ème arrondissement, nous célébrons l'art du brunch 
                all-day et du café d'exception. Chaque tasse est préparée avec soin, chaque assiette 
                est une invitation au voyage gustatif.
              </p>
              <p>
                Notre équipe passionnée sélectionne avec attention les meilleurs torréfacteurs et 
                producteurs locaux pour vous offrir une expérience authentique et mémorable.
              </p>
              <p className="font-medium text-foreground">
                Bienvenue chez vous, bienvenue à La Petite Bleue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
