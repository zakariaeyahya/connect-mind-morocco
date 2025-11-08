import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Stethoscope,
  Calendar,
  TrendingUp,
  AlertCircle,
  Shield,
  Activity,
  MessageCircle,
  X,
} from "lucide-react";
import { useState } from "react";
import { users } from "@/data/users";
import { professionals } from "@/data/professionals";
import { appointments } from "@/data/appointments";
import { adminLogs } from "@/data/adminLogs";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const AdminDashboard = () => {
  const { toast } = useToast();
  const [selectedUser, setSelectedUser] = useState<typeof users[0] | null>(null);
  const [selectedLog, setSelectedLog] = useState<typeof adminLogs[0] | null>(null);

  const stats = [
    { label: "Utilisateurs totaux", value: users.length.toString(), icon: Users, color: "text-primary" },
    { label: "Professionnels actifs", value: professionals.length.toString(), icon: Stethoscope, color: "text-accent" },
    { label: "Séances ce mois", value: appointments.length.toString(), icon: Calendar, color: "text-green-600" },
    { label: "Taux de satisfaction", value: "94%", icon: TrendingUp, color: "text-yellow-500" },
  ];

  const handleUserAction = (action: string, userId: number) => {
    toast({
      title: `Action effectuée`,
      description: `${action} pour l'utilisateur #${userId}`,
    });
  };

  return (
    <div className="min-h-screen gradient-subtle">
      <Navbar />

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-12">
        {/* Header */}
        <div className="mb-8 animate-slide-up flex items-start justify-between">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-2 flex items-center gap-2">
            <Shield className="w-8 h-8 text-primary" />
            Tableau de bord{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Administrateur
            </span>
            </h1>
            <p className="text-muted-foreground">
              Gestion et supervision de la plateforme MinConnect
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 border-none shadow-card">
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
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Users Management */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 border-none shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Gestion des utilisateurs
                </h2>
                <Button variant="outline" size="sm">
                  Exporter
                </Button>
              </div>

              <div className="space-y-3">
                {users.filter(u => u.role === "user").map((user, index) => (
                  <motion.div
                    key={user.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 bg-secondary rounded-xl hover:bg-muted/50 transition-smooth"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden">
                          {user.avatar ? (
                            <img src={user.avatar} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-white font-semibold">
                              {user.name[0]}
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{user.name}</p>
                          <p className="text-xs text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {user.premium && (
                          <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white">
                            Premium
                          </span>
                        )}
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          user.active
                            ? "bg-accent/10 text-accent"
                            : "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                        }`}>
                          {user.active ? "Actif" : "Inactif"}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedUser(user)}
                        >
                          Gérer
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Activity Chart */}
            <Card className="p-6 border-none shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Activity className="w-5 h-5 text-accent" />
                  Activité de la plateforme
                </h2>
              </div>

              <div className="flex items-end justify-between h-48 gap-2">
                {[45, 62, 58, 73, 68, 81, 76].map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-gradient-to-t from-primary to-accent rounded-t-lg transition-smooth hover:opacity-80"
                      style={{ height: `${(value / 81) * 100}%` }}
                    />
                    <span className="text-xs text-muted-foreground">
                      {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"][index]}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Recent Logs */}
            <Card className="p-6 border-none shadow-card">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                Logs récents
              </h3>

              <div className="space-y-3">
                {adminLogs.slice(0, 5).map((log, index) => (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-3 rounded-lg bg-secondary hover:bg-muted/50 transition-smooth cursor-pointer"
                    onClick={() => setSelectedLog(log)}
                  >
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{log.action} - {log.entity}</p>
                        <p className="text-xs text-muted-foreground">
                          {log.details}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(log.timestamp).toLocaleDateString("fr-FR")}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-4">
                Voir tous les logs
              </Button>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 border-none shadow-card gradient-card">
              <h3 className="font-semibold mb-4">Actions rapides</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4" />
                  Ajouter un utilisateur
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Stethoscope className="w-4 h-4" />
                  Valider un professionnel
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="w-4 h-4" />
                  Modération contenu
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* User Details Sheet */}
      <Sheet open={!!selectedUser} onOpenChange={() => setSelectedUser(null)}>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>Détails de l'utilisateur</SheetTitle>
          </SheetHeader>
          {selectedUser && (
            <div className="mt-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden">
                  {selectedUser.avatar ? (
                    <img src={selectedUser.avatar} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white font-semibold text-2xl">
                      {selectedUser.name[0]}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{selectedUser.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedUser.email}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">ID</label>
                  <p className="text-sm mt-1">#{selectedUser.id}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Rôle</label>
                  <p className="text-sm mt-1 capitalize">{selectedUser.role}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Statut</label>
                  <p className="text-sm mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      selectedUser.active
                        ? "bg-accent/10 text-accent"
                        : "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                    }`}>
                      {selectedUser.active ? "Actif" : "Inactif"}
                    </span>
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Premium</label>
                  <p className="text-sm mt-1">
                    {selectedUser.premium ? (
                      <span className="px-2 py-1 rounded-full text-xs bg-gradient-to-r from-primary to-accent text-white">
                        Oui
                      </span>
                    ) : (
                      "Non"
                    )}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    handleUserAction("Désactivation", selectedUser.id);
                    setSelectedUser(null);
                  }}
                >
                  {selectedUser.active ? "Désactiver" : "Activer"} l'utilisateur
                </Button>
                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={() => {
                    handleUserAction("Suppression", selectedUser.id);
                    setSelectedUser(null);
                  }}
                >
                  Supprimer l'utilisateur
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* Log Details Sheet */}
      <Sheet open={!!selectedLog} onOpenChange={() => setSelectedLog(null)}>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>Détails du log</SheetTitle>
          </SheetHeader>
          {selectedLog && (
            <div className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Action</label>
                <p className="text-lg font-semibold mt-1">{selectedLog.action}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Entité</label>
                <p className="text-sm mt-1">{selectedLog.entity}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Détails</label>
                <p className="text-sm mt-1">{selectedLog.details}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Administrateur</label>
                <p className="text-sm mt-1">{selectedLog.adminName}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Date et heure</label>
                <p className="text-sm mt-1">
                  {new Date(selectedLog.timestamp).toLocaleString("fr-FR")}
                </p>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
