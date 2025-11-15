import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { partners } from "@/data/partners";
import { MapPin, Star, ArrowRight, ArrowLeft } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Partners = () => {
  const [selectedPartner, setSelectedPartner] = useState<typeof partners[0] | null>(null);

  return (
    <div className="min-h-screen gradient-subtle">
      <Navbar />

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-12">
        {/* Header */}
        <div className="mb-12 animate-slide-up">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/dashboard">
              <Button variant="outline" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Nos partenaires{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                bien-être
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos centres partenaires pour compléter votre parcours de bien-être
            </p>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <Card
              key={partner.id}
              className="overflow-hidden border-none shadow-card hover:shadow-hover transition-smooth cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedPartner(partner)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover hover:scale-105 transition-smooth"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span className="text-sm font-semibold">{partner.rating}</span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div>
                  <span className="text-xs font-medium text-accent uppercase tracking-wide">
                    {partner.type}
                  </span>
                  <h3 className="text-xl font-semibold mt-1">{partner.name}</h3>
                </div>

                <p className="text-sm text-muted-foreground">{partner.description}</p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {partner.location}
                </div>

                <div className="flex flex-wrap gap-2">
                  {partner.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-secondary px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-lg font-semibold text-primary">
                    {partner.price}
                  </span>
                  <Button size="sm" className="gradient-hero shadow-soft">
                    Découvrir
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Partner Detail Modal */}
      <Dialog open={!!selectedPartner} onOpenChange={() => setSelectedPartner(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedPartner?.name}</DialogTitle>
          </DialogHeader>
          {selectedPartner && (
            <div className="space-y-4">
              <img
                src={selectedPartner.image}
                alt={selectedPartner.name}
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-accent uppercase">
                    {selectedPartner.type}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-accent fill-accent" />
                    <span className="font-semibold">{selectedPartner.rating}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{selectedPartner.description}</p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  {selectedPartner.location}
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Services inclus :</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedPartner.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-sm bg-secondary px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-2xl font-bold text-primary">
                    {selectedPartner.price}
                  </span>
                  <Button className="gradient-hero shadow-soft">
                    Réserver maintenant
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Partners;
