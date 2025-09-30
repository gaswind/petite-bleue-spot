import { Coffee, Croissant, Cake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import coffeePastries from "@/assets/coffee-pastries.jpg";

const Menu = () => {
  const menuCategories = [
    {
      icon: Coffee,
      title: "Cafés de spécialité",
      description: "Espresso, cappuccino, flat white et plus encore",
      items: ["Espresso", "Cappuccino", "Flat White", "Cold Brew", "Latte Signature"],
    },
    {
      icon: Croissant,
      title: "Brunch All-Day",
      description: "Nos créations salées disponibles toute la journée",
      items: ["Avocado Toast", "Œufs Benedict", "Pancakes", "Granola Bowl", "Tartines gourmandes"],
    },
    {
      icon: Cake,
      title: "Pâtisseries artisanales",
      description: "Fraîchement préparées chaque jour",
      items: ["Croissants", "Pain au chocolat", "Cookies", "Carrot Cake", "Cheesecake"],
    },
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Notre carte
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre sélection de cafés d'exception, brunchs savoureux et pâtisseries artisanales
          </p>
        </div>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto mb-16">
          <img
            src={coffeePastries}
            alt="Café et pâtisseries artisanales"
            className="rounded-2xl shadow-[var(--shadow-hover)] w-full h-auto"
          />
        </div>

        {/* Menu Categories */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {menuCategories.map((category, index) => (
            <Card key={index} className="border-2 hover:shadow-[var(--shadow-hover)] transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-serif">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="default" size="lg">
            Télécharger la carte complète
          </Button>
          <Button variant="outline" size="lg">
            Réserver une table
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
