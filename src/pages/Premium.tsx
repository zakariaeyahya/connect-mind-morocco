import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Crown, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const Premium = () => {
  const { toast } = useToast();

  const features = [
    "Séances illimitées avec tous les professionnels",
    "Accès prioritaire aux nouveaux thérapeutes",
    "Contenu exclusif MindTalk (podcasts & articles premium)",
    "Exercices avancés de bien-être personnalisés",
    "Messagerie directe illimitée",
    "Pas de publicités",
    "Support prioritaire 24/7",
    "Réductions partenaires (yoga, retraites, spa)"
  ];

  const handleSubscribe = () => {
    toast({
      title: "Abonnement activé ! 🎉",
      description: "Bienvenue dans MinConnect Premium. Profitez de tous les avantages.",
    });
  };

  return (
    <div className="min-h-screen gradient-subtle">
      <Navbar />
      
      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 mb-4">
            <Crown className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              MinConnect Premium
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Élevez votre{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              bien-être mental
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Accédez à une expérience complète avec des fonctionnalités exclusives pour votre épanouissement personnel
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="text-center">
              <p className="text-4xl font-bold gradient-text">299 DH</p>
              <p className="text-sm text-muted-foreground">par mois</p>
            </div>
            <div className="text-muted-foreground">ou</div>
            <div className="text-center">
              <p className="text-4xl font-bold gradient-text">2990 DH</p>
              <p className="text-sm text-muted-foreground">par an (économisez 600 DH)</p>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-8 border-none shadow-card h-full">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-accent" />
                Avantages Premium
              </h2>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-sm">{feature}</p>
                  </motion.div>
                ))}
              </div>

              <Button
                onClick={handleSubscribe}
                className="w-full mt-8 gradient-hero shadow-soft text-lg py-6"
              >
                <Crown className="w-5 h-5 mr-2" />
                S'abonner maintenant
              </Button>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="p-6 border-none shadow-card gradient-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Accès immédiat</h3>
                  <p className="text-sm text-muted-foreground">
                    Activez votre abonnement en un clic et profitez instantanément de tous les avantages Premium
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-none shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Sans engagement</h3>
                  <p className="text-sm text-muted-foreground">
                    Annulez à tout moment, aucune période d'engagement minimum requise
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-none shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Garantie satisfaction</h3>
                  <p className="text-sm text-muted-foreground">
                    7 jours d'essai satisfait ou remboursé pour découvrir tous nos services premium
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-none shadow-card bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="text-xl font-bold mb-4 text-center">
                Offre de lancement
              </h3>
              <p className="text-center text-muted-foreground mb-6">
                Les 100 premiers abonnés bénéficient de <span className="font-bold text-accent">3 mois gratuits</span> sur l'abonnement annuel !
              </p>
              <div className="text-center">
                <p className="text-3xl font-bold line-through text-muted-foreground/50">
                  2990 DH
                </p>
                <p className="text-4xl font-bold gradient-text">
                  2093 DH
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Soit 174 DH/mois au lieu de 299 DH
                </p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            Questions fréquentes
          </h2>
          
          <div className="space-y-4">
            {[
              {
                q: "Puis-je annuler mon abonnement à tout moment ?",
                a: "Oui, vous pouvez annuler votre abonnement Premium à tout moment depuis votre profil. L'accès reste actif jusqu'à la fin de votre période payée."
              },
              {
                q: "Les réductions partenaires sont-elles cumulables ?",
                a: "Oui, toutes nos réductions partenaires sont cumulables et vous permettent d'économiser significativement sur vos activités de bien-être."
              },
              {
                q: "Comment fonctionne l'essai gratuit de 7 jours ?",
                a: "Vous bénéficiez immédiatement de tous les avantages Premium. Si vous n'êtes pas satisfait dans les 7 premiers jours, contactez-nous pour un remboursement intégral."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 border-none shadow-card">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Premium;
