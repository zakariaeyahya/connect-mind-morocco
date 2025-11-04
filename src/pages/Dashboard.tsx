import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Calendar,
  MessageCircle,
  TrendingUp,
  Heart,
  Users,
  Sparkles,
  ArrowRight,
  User,
  LogOut
} from "lucide-react";

const Dashboard = () => {
  const upcomingSession = {
    therapist: "Dr. Amina Bennani",
    date: "Vendredi 15 Mars",
    time: "14:00",
    type: "Séance en ligne"
  };

  const moodData = [
    { day: "Lun", score: 7 },
    { day: "Mar", score: 6 },
    { day: "Mer", score: 8 },
    { day: "Jeu", score: 7 },
    { day: "Ven", score: 9 },
    { day: "Sam", score: 8 },
    { day: "Dim", score: 8 }
  ];

  return (
    <div className="min-h-screen gradient-subtle">
      <Navbar />

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-12">
        {/* Header */}
        <div className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="animate-slide-up">
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">
              Bonjour, Sarah 👋
            </h1>
            <p className="text-muted-foreground flex items-center gap-2">
              Prenez soin de vous aujourd'hui
              <Heart className="w-5 h-5 text-accent" fill="currentColor" />
            </p>
          </div>

          <div className="flex gap-3">
            <Link to="/pro-dashboard">
              <Button variant="outline" size="sm">
                <Sparkles className="w-4 h-4" />
                Mode Pro
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="outline" size="sm">
                <User className="w-4 h-4" />
                Profil
              </Button>
            </Link>
            <Link to="/">
              <Button variant="ghost" size="sm">
                <LogOut className="w-4 h-4" />
                Déconnexion
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Next Session */}
            <Card className="p-6 border-none shadow-card gradient-card animate-scale-in">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold mb-1">Votre prochaine séance</h2>
                  <p className="text-sm text-muted-foreground">
                    Restez sur la bonne voie
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl gradient-hero flex items-center justify-center shadow-soft">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100"
                      alt={upcomingSession.therapist}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{upcomingSession.therapist}</p>
                    <p className="text-sm text-muted-foreground">{upcomingSession.type}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <span className="font-medium">{upcomingSession.date}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="font-medium">{upcomingSession.time}</span>
                </div>

                <Button className="w-full gradient-hero shadow-soft">
                  Rejoindre la séance
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>

            {/* Mood Tracker */}
            <Card className="p-6 border-none shadow-card animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold mb-1">Suivi de votre humeur</h2>
                  <p className="text-sm text-muted-foreground">
                    7 derniers jours
                  </p>
                </div>
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>

              <div className="flex items-end justify-between h-40 gap-2">
                {moodData.map((day, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-gradient-to-t from-primary to-accent rounded-t-lg transition-smooth hover:opacity-80"
                      style={{ height: `${day.score * 10}%` }}
                    />
                    <span className="text-xs text-muted-foreground">{day.day}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-accent/10 rounded-lg text-sm">
                <p className="text-accent font-medium">
                  Tendance positive cette semaine ! Continuez ainsi 🌟
                </p>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6 border-none shadow-card animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="font-semibold mb-4">Actions rapides</h3>
              <div className="space-y-3">
                <Link to="/professionals" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4" />
                    Réserver une séance
                  </Button>
                </Link>
                <Link to="/community" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="w-4 h-4" />
                    Communauté
                  </Button>
                </Link>
                <Link to="/wellbeing" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <Sparkles className="w-4 h-4" />
                    Exercices bien-être
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Daily Suggestion */}
            <Card className="p-6 border-none shadow-card gradient-card animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <h3 className="font-semibold mb-3">Suggestion du jour</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Prenez 5 minutes pour une méditation guidée et commencez votre journée en pleine conscience.
              </p>
              <Link to="/wellbeing">
                <Button size="sm" className="w-full">
                  Commencer
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </Card>

            {/* Messages */}
            <Card className="p-6 border-none shadow-card animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Messages</h3>
                <span className="text-xs bg-accent text-white px-2 py-1 rounded-full">
                  3 nouveaux
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-smooth">
                  <MessageCircle className="w-5 h-5 text-muted-foreground mt-1" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">Dr. Bennani</p>
                    <p className="text-xs text-muted-foreground truncate">
                      Confirmation de votre séance...
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
