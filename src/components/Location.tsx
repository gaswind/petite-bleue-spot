import { MapPin, Clock, Phone, Train } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Location = () => {
  const infos = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "15 Rue de la Petite Bleue, 75009 Paris",
    },
    {
      icon: Train,
      title: "Métro",
      content: "Cadet (ligne 7) • Grands Boulevards (lignes 8, 9)",
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun-Ven: 8h-18h • Sam-Dim: 9h-19h",
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "01 45 67 89 00",
    },
  ];

  return (
    <section id="localisation" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Nous trouver
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Au cœur du 9ème arrondissement, facilement accessible
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden mb-8 shadow-[var(--shadow-hover)]">
            <div className="relative aspect-video bg-muted">
              <iframe
                title="Carte de la Petite Bleue"
                src="https://www.google.com/maps?q=15+Rue+de+la+Petite+Bleue,+75009+Paris&output=embed"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {infos.map((info, index) => (
              <Card key={index} className="border-2">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
