import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Search, MapPin, Star, Check, ArrowLeft } from "lucide-react";
import { professionals } from "@/data/professionals";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Professionals = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProfessional, setSelectedProfessional] = useState<number | null>(null);

  const filteredProfessionals = professionals.filter(
    (pro) =>
      pro.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pro.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pro.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBooking = (name: string) => {
    toast.success(`Réservation confirmée avec ${name} ✅`);
    setSelectedProfessional(null);
  };

  return (
    <div className="min-h-screen gradient-subtle">
      <Navbar />

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-12">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-12 animate-slide-up">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/dashboard">
              <Button variant="outline" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Trouvez votre professionnel
            </h1>
            <p className="text-lg text-muted-foreground">
              Des thérapeutes qualifiés et bienveillants pour vous accompagner
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <Card className="max-w-2xl mx-auto p-4 mb-8 border-none shadow-card animate-scale-in">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Rechercher par nom, spécialité ou ville..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button className="gradient-hero shadow-soft">
              Rechercher
            </Button>
          </div>
        </Card>

        {/* Results */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfessionals.map((pro, index) => (
            <Card
              key={pro.id}
              className="p-6 border-none shadow-card hover:shadow-hover transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex flex-col gap-4">
                {/* Profile Image */}
                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-soft">
                  <img
                    src={pro.image}
                    alt={pro.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-lg font-semibold mb-1">{pro.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{pro.specialty}</p>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{pro.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({pro.reviews} avis)
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" />
                    {pro.city}
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {pro.languages.map((lang) => (
                      <Badge key={lang} variant="secondary" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">
                      {pro.price} DH
                    </span>

                    <Dialog
                      open={selectedProfessional === pro.id}
                      onOpenChange={(open) => setSelectedProfessional(open ? pro.id : null)}
                    >
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          disabled={!pro.available}
                          className={pro.available ? "gradient-hero shadow-soft" : ""}
                        >
                          {pro.available ? "Réserver" : "Indisponible"}
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Réserver avec {pro.name}</DialogTitle>
                          <DialogDescription>{pro.specialty}</DialogDescription>
                        </DialogHeader>

                        <div className="space-y-4 py-4">
                          <div className="flex items-start gap-3">
                            <div className="w-16 h-16 rounded-xl overflow-hidden shadow-soft">
                              <img
                                src={pro.image}
                                alt={pro.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold mb-1">{pro.name}</p>
                              <p className="text-sm text-muted-foreground mb-2">
                                {pro.description}
                              </p>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-accent text-accent" />
                                <span className="text-sm font-medium">{pro.rating}</span>
                                <span className="text-xs text-muted-foreground">
                                  ({pro.reviews} avis)
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Tarif</span>
                              <span className="font-semibold">{pro.price} DH</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Durée</span>
                              <span className="font-semibold">60 minutes</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Ville</span>
                              <span className="font-semibold">{pro.city}</span>
                            </div>
                          </div>

                          <Button
                            className="w-full gradient-hero shadow-soft"
                            onClick={() => handleBooking(pro.name)}
                          >
                            <Check className="w-4 h-4" />
                            Confirmer la réservation
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Professionals;
