import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import heroImage from "@/assets/hero-wellness.jpg";
import { Search, Users, TrendingUp, ArrowRight } from "lucide-react";

const Landing = () => {
  const features = [
    {
      icon: Search,
      title: "Trouver un thérapeute",
      description: "Découvrez des professionnels qualifiés adaptés à vos besoins spécifiques",
    },
    {
      icon: Users,
      title: "Rejoindre une communauté",
      description: "Partagez et soutenez-vous mutuellement dans un espace bienveillant",
    },
    {
      icon: TrendingUp,
      title: "Suivre votre évolution",
      description: "Visualisez vos progrès et maintenez votre routine bien-être",
    },
  ];

  return (
    <div className="min-h-screen gradient-subtle">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Connecter votre esprit{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  avec votre bien-être
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                MinConnect vous accompagne dans votre parcours de santé mentale. Trouvez le soutien
                dont vous avez besoin, quand vous en avez besoin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth">
                  <Button size="lg" className="gradient-hero shadow-soft text-base">
                    Commencer maintenant
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/professionals">
                  <Button size="lg" variant="outline" className="text-base">
                    Découvrir les professionnels
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <img
                src={heroImage}
                alt="Bien-être mental"
                className="rounded-3xl shadow-hover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Votre parcours bien-être commence ici
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              MinConnect offre une approche holistique pour prendre soin de votre santé mentale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 border-none shadow-card hover:shadow-hover transition-smooth cursor-pointer gradient-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center mb-6 shadow-soft">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <Card className="gradient-hero p-12 rounded-3xl shadow-hover border-none text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Prêt à commencer votre parcours ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Rejoignez des milliers de personnes qui ont choisi MinConnect
            </p>
            <Link to="/auth">
              <Button size="lg" variant="secondary" className="text-base font-semibold">
                Créer mon compte gratuitement
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
