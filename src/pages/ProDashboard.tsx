import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Users,
  TrendingUp,
  MessageCircle,
  DollarSign,
  Clock,
  Star,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const ProDashboard = () => {
  const [selectedSession, setSelectedSession] = useState<typeof upcomingSessions[0] | null>(null);

  const stats = [
    { label: "Patients actifs", value: "24", icon: Users, color: "text-primary" },
    { label: "Séances ce mois", value: "38", icon: Calendar, color: "text-accent" },
    { label: "Revenus ce mois", value: "15,200 DH", icon: DollarSign, color: "text-green-600" },
    { label: "Note moyenne", value: "4.9", icon: Star, color: "text-yellow-500" },
  ];

  const upcomingSessions = [
    {
      patient: "Sarah K.",
      time: "14:00",
      type: "Séance en ligne",
      status: "Confirmée",
    },
    {
      patient: "Mohammed A.",
      time: "16:00",
      type: "Cabinet",
      status: "En attente",
    },
    {
      patient: "Laila M.",
      time: "18:30",
      type: "Séance en ligne",
      status: "Confirmée",
    },
  ];

  const messages = [
    {
      patient: "Sarah K.",
      message: "Merci pour la dernière séance, je me sens...",
      time: "Il y a 15 min",
      unread: true,
    },
    {
      patient: "Ahmed B.",
      message: "Puis-je déplacer mon rendez-vous de demain ?",
      time: "Il y a 1h",
      unread: true,
    },
    {
      patient: "Fatima Z.",
      message: "Les exercices recommandés fonctionnent bien !",
      time: "Il y a 3h",
      unread: false,
    },
  ];

  return (
    <div className="min-h-screen gradient-subtle">
      <Navbar />

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-12">
        {/* Header */}
        <div className="mb-8 animate-slide-up flex items-start justify-between">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">
            Tableau de bord{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Professionnel
            </span>
            </h1>
            <p className="text-muted-foreground">
              Gérez vos patients et consultations
            </p>
          </div>
          <Button variant="outline" onClick={() => {
            localStorage.removeItem("minconnect-role");
            window.location.href = "/auth";
          }}>
            Déconnexion
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 border-none shadow-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div
                  className={`w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center ${stat.color}`}
                >
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Today's Sessions */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 border-none shadow-card animate-scale-in">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold mb-1">Séances d'aujourd'hui</h2>
                  <p className="text-sm text-muted-foreground">
                    Vendredi 15 Mars 2024
                  </p>
                </div>
                <Calendar className="w-6 h-6 text-muted-foreground" />
              </div>

              <div className="space-y-3">
                {upcomingSessions.map((session, index) => (
                  <div
                    key={index}
                    className="p-4 bg-secondary rounded-xl hover:bg-muted/50 transition-smooth cursor-pointer"
                    onClick={() => setSelectedSession(session)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent" />
                        <div>
                          <p className="font-semibold">{session.patient}</p>
                          <p className="text-sm text-muted-foreground">
                            {session.type}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <Clock className="w-4 h-4" />
                          {session.time}
                        </div>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            session.status === "Confirmée"
                              ? "bg-accent/10 text-accent"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {session.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-4 gradient-hero shadow-soft">
                Voir tout le calendrier
              </Button>
            </Card>

            {/* Performance Chart */}
            <Card className="p-6 border-none shadow-card animate-scale-in">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold mb-1">Performance ce mois</h2>
                  <p className="text-sm text-muted-foreground">
                    Séances réalisées par semaine
                  </p>
                </div>
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>

              <div className="flex items-end justify-between h-40 gap-2">
                {[8, 12, 9, 14, 11].map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-gradient-to-t from-primary to-accent rounded-t-lg transition-smooth hover:opacity-80"
                      style={{ height: `${(value / 14) * 100}%` }}
                    />
                    <span className="text-xs text-muted-foreground">S{index + 1}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Messages */}
          <div className="space-y-6">
            <Card className="p-6 border-none shadow-card animate-scale-in">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Messages</h3>
                <span className="text-xs bg-accent text-white px-2 py-1 rounded-full">
                  2 nouveaux
                </span>
              </div>

              <div className="space-y-3">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-smooth ${
                      msg.unread ? "bg-accent/5" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <MessageCircle className="w-5 h-5 text-muted-foreground mt-1" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{msg.patient}</p>
                        <p className="text-xs text-muted-foreground truncate">
                          {msg.message}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-4">
                Voir tous les messages
              </Button>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 border-none shadow-card gradient-card animate-scale-in">
              <h3 className="font-semibold mb-4">Actions rapides</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4" />
                  Bloquer des créneaux
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4" />
                  Gérer les patients
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="w-4 h-4" />
                  Voir les statistiques
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Session Details Sheet */}
      <Sheet open={!!selectedSession} onOpenChange={() => setSelectedSession(null)}>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>Détails de la séance</SheetTitle>
          </SheetHeader>
          {selectedSession && (
            <div className="mt-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent" />
                <div>
                  <h3 className="font-semibold text-lg">{selectedSession.patient}</h3>
                  <p className="text-sm text-muted-foreground">{selectedSession.type}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Heure</label>
                  <p className="text-lg font-semibold mt-1 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    {selectedSession.time}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Type de séance</label>
                  <p className="text-sm mt-1">{selectedSession.type}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Statut</label>
                  <p className="text-sm mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      selectedSession.status === "Confirmée"
                        ? "bg-accent/10 text-accent"
                        : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {selectedSession.status}
                    </span>
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Notes</label>
                  <p className="text-sm mt-1 text-muted-foreground">
                    Première séance de suivi. Patient montre des progrès significatifs.
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t">
                <Button className="w-full gradient-hero shadow-soft">
                  Rejoindre la séance
                </Button>
                <Button variant="outline" className="w-full">
                  Reprogrammer
                </Button>
                <Button variant="destructive" className="w-full">
                  Annuler la séance
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      <Footer />
    </div>
  );
};

export default ProDashboard;
