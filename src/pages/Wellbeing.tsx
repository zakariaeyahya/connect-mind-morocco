import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Play, Pause, Headphones, Wind, Brain, Sparkles, Check } from "lucide-react";
import { toast } from "sonner";

const Wellbeing = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const meditations = [
    { id: 1, title: "Méditation du matin", duration: "10 min", type: "Débutant" },
    { id: 2, title: "Respiration profonde", duration: "5 min", type: "Tous niveaux" },
    { id: 3, title: "Scan corporel", duration: "15 min", type: "Intermédiaire" },
    { id: 4, title: "Gratitude quotidienne", duration: "8 min", type: "Débutant" },
  ];

  const exercises = [
    {
      id: 1,
      title: "Exercice de respiration 4-7-8",
      description: "Inspirez 4s, retenez 7s, expirez 8s",
      completed: true
    },
    {
      id: 2,
      title: "Journal de gratitude",
      description: "Notez 3 choses positives de votre journée",
      completed: false
    },
    {
      id: 3,
      title: "Affirmation positive",
      description: "Répétez une affirmation qui vous inspire",
      completed: true
    },
    {
      id: 4,
      title: "Marche consciente",
      description: "15 minutes de marche en pleine conscience",
      completed: false
    },
  ];

  const podcasts = [
    { id: 1, title: "Gérer le stress au quotidien", duration: "25 min", host: "Dr. Amina" },
    { id: 2, title: "L'importance du sommeil", duration: "18 min", host: "Dr. Karim" },
    { id: 3, title: "Relations saines", duration: "30 min", host: "Sarah A." },
  ];

  const completedExercises = exercises.filter(e => e.completed).length;
  const progressPercentage = (completedExercises / exercises.length) * 100;

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
    toast.success(isPlaying ? "Lecture mise en pause" : "Lecture en cours...");
  };

  return (
    <div className="min-h-screen gradient-subtle">
      <Navbar />

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-12">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 animate-slide-up">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Espace Bien-être Personnel
          </h1>
          <p className="text-lg text-muted-foreground">
            Des ressources pour cultiver votre sérénité au quotidien
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Progress Card */}
          <Card className="p-6 mb-8 border-none shadow-card gradient-card animate-scale-in">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold mb-1">Votre routine aujourd'hui</h3>
                <p className="text-sm text-muted-foreground">
                  {completedExercises} sur {exercises.length} exercices complétés
                </p>
              </div>
              <div className="w-12 h-12 rounded-2xl gradient-hero flex items-center justify-center shadow-soft">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            <Progress value={progressPercentage} className="mb-2" />
            <p className="text-sm text-accent font-medium">
              Continue comme ça ! 🌟
            </p>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="meditation" className="mb-8">
            <TabsList className="mb-6 grid w-full grid-cols-4">
              <TabsTrigger value="meditation">
                <Brain className="w-4 h-4 mr-2" />
                Méditation
              </TabsTrigger>
              <TabsTrigger value="breathing">
                <Wind className="w-4 h-4 mr-2" />
                Respiration
              </TabsTrigger>
              <TabsTrigger value="podcasts">
                <Headphones className="w-4 h-4 mr-2" />
                Podcasts
              </TabsTrigger>
              <TabsTrigger value="exercises">
                <Check className="w-4 h-4 mr-2" />
                Exercices
              </TabsTrigger>
            </TabsList>

            {/* Meditation Tab */}
            <TabsContent value="meditation">
              <div className="grid md:grid-cols-2 gap-6">
                {meditations.map((meditation, index) => (
                  <Card
                    key={meditation.id}
                    className="p-6 border-none shadow-card hover:shadow-hover transition-smooth animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{meditation.title}</h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{meditation.duration}</span>
                          <span>•</span>
                          <span className="text-accent">{meditation.type}</span>
                        </div>
                      </div>
                      <button
                        onClick={togglePlayback}
                        className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center shadow-soft hover:shadow-hover transition-smooth"
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5 text-white" fill="white" />
                        ) : (
                          <Play className="w-5 h-5 text-white" fill="white" />
                        )}
                      </button>
                    </div>
                    <Button variant="outline" className="w-full">
                      Ajouter à ma routine
                    </Button>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Breathing Tab */}
            <TabsContent value="breathing">
              <Card className="p-12 text-center border-none shadow-card">
                <div className="max-w-md mx-auto">
                  <div className="w-32 h-32 rounded-full gradient-hero flex items-center justify-center mx-auto mb-6 shadow-hover animate-float">
                    <Wind className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Exercice de respiration</h3>
                  <p className="text-muted-foreground mb-6">
                    Prenez un moment pour vous recentrer avec cet exercice de respiration guidée
                  </p>
                  <Button size="lg" className="gradient-hero shadow-soft">
                    <Play className="w-5 h-5" />
                    Commencer l'exercice
                  </Button>
                </div>
              </Card>
            </TabsContent>

            {/* Podcasts Tab */}
            <TabsContent value="podcasts">
              <div className="space-y-4">
                {podcasts.map((podcast, index) => (
                  <Card
                    key={podcast.id}
                    className="p-6 border-none shadow-card hover:shadow-hover transition-smooth animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <button
                        onClick={togglePlayback}
                        className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center shadow-soft hover:shadow-hover transition-smooth flex-shrink-0"
                      >
                        {isPlaying ? (
                          <Pause className="w-6 h-6 text-white" fill="white" />
                        ) : (
                          <Play className="w-6 h-6 text-white" fill="white" />
                        )}
                      </button>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold mb-1 truncate">{podcast.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{podcast.host}</span>
                          <span>•</span>
                          <span>{podcast.duration}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Télécharger
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Exercises Tab */}
            <TabsContent value="exercises">
              <div className="space-y-4">
                {exercises.map((exercise, index) => (
                  <Card
                    key={exercise.id}
                    className="p-6 border-none shadow-card hover:shadow-hover transition-smooth animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                          exercise.completed
                            ? "bg-accent"
                            : "border-2 border-muted-foreground"
                        }`}
                      >
                        {exercise.completed && (
                          <Check className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`font-semibold mb-1 ${
                            exercise.completed ? "text-muted-foreground line-through" : ""
                          }`}
                        >
                          {exercise.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {exercise.description}
                        </p>
                      </div>
                      {!exercise.completed && (
                        <Button size="sm" variant="outline">
                          Commencer
                        </Button>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wellbeing;
