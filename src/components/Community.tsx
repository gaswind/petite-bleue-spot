import { Instagram, Facebook, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Community = () => {
  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#", color: "hover:text-pink-500" },
    { icon: Facebook, label: "Facebook", href: "#", color: "hover:text-blue-500" },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-accent/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Community Section */}
          <div className="text-center mb-16">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Rejoignez notre communauté
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Suivez nos aventures, découvrez nos nouveautés et partagez vos moments gourmands
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-12">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center transition-all hover:scale-110 hover:shadow-[var(--shadow-hover)] ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[var(--shadow-hover)] border-2 border-primary/10">
            <div className="text-center mb-8">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                Newsletter
              </h3>
              <p className="text-muted-foreground">
                Recevez nos offres exclusives et nouveautés directement dans votre boîte mail
              </p>
            </div>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="votre@email.com"
                className="flex-1"
                required
              />
              <Button variant="default" size="lg" type="submit">
                S'inscrire
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-4">
              En vous inscrivant, vous acceptez de recevoir nos communications. Désinscription possible à tout moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
