import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { User, Mail, MapPin, Calendar, Bell, Shield, LogOut } from "lucide-react";
import { toast } from "sonner";

const Profile = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleSave = () => {
    toast.success("Profil mis à jour avec succès !");
  };

  const sessions = [
    {
      id: 1,
      therapist: "Dr. Amina Bennani",
      date: "15 Mars 2024",
      status: "Confirmée"
    },
    {
      id: 2,
      therapist: "Dr. Karim El Fassi",
      date: "8 Mars 2024",
      status: "Complétée"
    },
    {
      id: 3,
      therapist: "Sarah Alaoui",
      date: "1 Mars 2024",
      status: "Complétée"
    },
  ];

  return (
    <div className="min-h-screen gradient-subtle">
      <Navbar />

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-8 animate-slide-up">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">Mon Profil</h1>
          <p className="text-muted-foreground">Gérez vos informations et préférences</p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="p-6 border-none shadow-card h-fit animate-scale-in">
            <div className="text-center mb-6">
              <div className="w-24 h-24 rounded-full gradient-hero flex items-center justify-center mx-auto mb-4 shadow-soft">
                <User className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-xl font-semibold mb-1">Sarah Bennani</h2>
              <p className="text-sm text-muted-foreground">Membre depuis Mars 2024</p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>sarah.bennani@email.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Casablanca, Maroc</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>3 séances complétées</span>
              </div>
            </div>

            <Button variant="outline" className="w-full mt-6">
              Modifier la photo
            </Button>
          </Card>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Info */}
            <Card className="p-6 border-none shadow-card animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-lg font-semibold mb-4">Informations personnelles</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input id="firstName" defaultValue="Sarah" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input id="lastName" defaultValue="Bennani" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="sarah.bennani@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" type="tel" defaultValue="+212 6 12 34 56 78" />
                </div>
                <Button onClick={handleSave} className="gradient-hero shadow-soft">
                  Enregistrer les modifications
                </Button>
              </div>
            </Card>

            {/* Settings */}
            <Card className="p-6 border-none shadow-card animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Paramètres
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Notifications</p>
                      <p className="text-sm text-muted-foreground">
                        Recevoir des rappels et messages
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={notifications}
                    onCheckedChange={setNotifications}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Langue</p>
                    <p className="text-sm text-muted-foreground">
                      Français
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Changer
                  </Button>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button variant="destructive" className="w-full">
                    <LogOut className="w-4 h-4" />
                    Se déconnecter
                  </Button>
                </div>
              </div>
            </Card>

            {/* Session History */}
            <Card className="p-6 border-none shadow-card animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-lg font-semibold mb-4">Historique des séances</h3>
              <div className="space-y-4">
                {sessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 transition-smooth"
                  >
                    <div>
                      <p className="font-medium">{session.therapist}</p>
                      <p className="text-sm text-muted-foreground">{session.date}</p>
                    </div>
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        session.status === "Confirmée"
                          ? "bg-accent/10 text-accent"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {session.status}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
