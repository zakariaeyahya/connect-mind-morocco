import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Heart, Target, Users, Shield } from "lucide-react";
import { toast } from "sonner";

const About = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé ! Nous vous répondrons bientôt.");
  };

  const values = [
    {
      icon: Heart,
      title: "Bienveillance",
      description: "Un accompagnement empathique et respectueux de chacun"
    },
    {
      icon: Shield,
      title: "Sécurité",
      description: "Protection de vos données et confidentialité garantie"
    },
    {
      icon: Users,
      title: "Accessibilité",
      description: "Rendre le bien-être mental accessible à tous"
    },
    {
      icon: Target,
      title: "Impact social",
      description: "Contribuer à une société plus équilibrée et résiliente"
    }
  ];

  return (
    <div className="min-h-screen gradient-subtle">
      <Navbar />

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            À propos de MinConnect
          </h1>
          <p className="text-xl text-muted-foreground">
            Connecter les esprits pour un monde plus équilibré
          </p>
        </div>

        {/* Mission */}
        <Card className="max-w-4xl mx-auto p-8 lg:p-12 mb-16 border-none shadow-card animate-scale-in">
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full gradient-hero flex items-center justify-center mx-auto mb-6 shadow-soft">
              <Heart className="w-10 h-10 text-white" fill="white" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Notre Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MinConnect est née d'une conviction profonde : la santé mentale est un droit, pas un
              privilège. Nous avons créé cette plateforme pour faciliter l'accès aux soins
              psychologiques au Maroc et briser les barrières qui empêchent tant de personnes de
              demander l'aide dont elles ont besoin.
            </p>
          </div>
        </Card>

        {/* Values */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 border-none shadow-card hover:shadow-hover transition-smooth text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <Card className="max-w-4xl mx-auto p-8 lg:p-12 mb-16 border-none shadow-card gradient-card animate-scale-in">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center">L'Équipe Fondatrice</h2>
          <p className="text-center text-muted-foreground mb-8 leading-relaxed">
            MinConnect a été fondée par une équipe multidisciplinaire de psychologues, développeurs
            et entrepreneurs sociaux passionnés par la santé mentale. Ensemble, nous travaillons
            chaque jour pour rendre le bien-être accessible à tous les Marocains.
          </p>
          <div className="text-center">
            <p className="text-sm text-muted-foreground italic">
              "Chaque personne mérite d'avoir accès à un soutien psychologique de qualité."
            </p>
          </div>
        </Card>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 border-none shadow-card animate-scale-in">
            <h2 className="text-2xl font-bold mb-2">Contactez-nous</h2>
            <p className="text-muted-foreground mb-6">
              Une question ? Une suggestion ? N'hésitez pas à nous écrire.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input id="name" placeholder="Votre nom" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="votre@email.com" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Sujet</Label>
                <Input id="subject" placeholder="Objet de votre message" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Votre message..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full gradient-hero shadow-soft">
                Envoyer le message
              </Button>
            </form>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
