import { Handshake } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Partnerships = () => {
  const partners = [
    {
      name: "Torréfaction Belleville",
      type: "Café",
      description: "Notre torréfacteur partenaire, pour un café d'exception",
    },
    {
      name: "Pâtisserie Martin",
      type: "Pâtisserie",
      description: "Des viennoiseries artisanales chaque matin",
    },
    {
      name: "Ferme Bio du Vexin",
      type: "Producteur",
      description: "Œufs, légumes et produits frais locaux",
    },
  ];

  return (
    <section id="partenariats" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
            <Handshake className="h-8 w-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Nos partenaires
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous collaborons avec les meilleurs artisans et producteurs locaux pour vous garantir qualité et fraîcheur
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <Card key={index} className="border-2 hover:shadow-[var(--shadow-hover)] transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <span className="text-primary font-bold text-lg">{index + 1}</span>
                </div>
                <CardTitle className="text-xl font-serif">{partner.name}</CardTitle>
                <CardDescription className="text-primary font-medium">{partner.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
