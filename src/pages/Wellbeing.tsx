import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Headphones, BookOpen, Wind, Heart } from "lucide-react";
import { exercises, podcasts, articles } from "@/data/exercises";
import AudioPlayer from "@/components/shared/AudioPlayer";
import { Progress } from "@/components/ui/progress";

const Wellbeing = () => {
  return (
    <div className="min-h-screen gradient-subtle">
      <Navbar />

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Espace{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Bien-être
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des ressources pour cultiver votre sérénité au quotidien
          </p>
        </div>

        {/* Daily Progress */}
        <Card className="p-6 mb-8 border-none shadow-card gradient-card animate-scale-in max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Routine journalière</h3>
              <p className="text-sm text-muted-foreground">
                {exercises.filter(e => e.progress === 100).length} exercices complétés sur {exercises.length}
              </p>
            </div>
            <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center text-white font-bold text-lg shadow-soft">
              {Math.round((exercises.filter(e => e.progress === 100).length / exercises.length) * 100)}%
            </div>
          </div>
          <Button className="w-full gradient-hero shadow-soft">
            <Heart className="w-4 h-4" />
            Continuer ma routine
          </Button>
        </Card>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="meditation" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="meditation">Méditation</TabsTrigger>
              <TabsTrigger value="breathing">Respiration</TabsTrigger>
              <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
              <TabsTrigger value="exercises">Exercices</TabsTrigger>
              <TabsTrigger value="mindtalk">MindTalk</TabsTrigger>
            </TabsList>

            {/* Meditation */}
            <TabsContent value="meditation" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {exercises.filter(e => e.category === "Méditation").map((exercise, index) => (
                  <Card
                    key={exercise.id}
                    className="p-6 border-none shadow-card hover:shadow-hover transition-smooth cursor-pointer animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-xs font-medium text-accent uppercase">
                          {exercise.category}
                        </span>
                        <h3 className="text-lg font-semibold mt-1">
                          {exercise.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {exercise.duration} • {exercise.level}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {exercise.description}
                        </p>
                      </div>
                      <Button size="icon" className="gradient-hero shadow-soft">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progression</span>
                        <span className="font-medium">{exercise.progress}%</span>
                      </div>
                      <Progress value={exercise.progress} className="h-2" />
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Breathing */}
            <TabsContent value="breathing" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {exercises.filter(e => e.category === "Respiration").map((exercise, index) => (
                  <Card
                    key={exercise.id}
                    className="p-8 border-none shadow-card text-center gradient-card animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full gradient-hero flex items-center justify-center animate-pulse-soft">
                      <Wind className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {exercise.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {exercise.description}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {exercise.duration} • {exercise.level}
                    </p>
                    <Button className="gradient-hero shadow-soft">
                      <Play className="w-4 h-4" />
                      Commencer
                    </Button>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Podcasts */}
            <TabsContent value="podcasts" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {podcasts.map((podcast, index) => (
                  <Card
                    key={podcast.id}
                    className="p-6 border-none shadow-card animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center flex-shrink-0">
                        <Headphones className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{podcast.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {podcast.host} • {podcast.duration}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {podcast.description}
                    </p>
                    <AudioPlayer title={podcast.title} duration={podcast.duration} />
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Exercises */}
            <TabsContent value="exercises" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {exercises.filter(e => e.category === "Exercices").map((exercise, index) => (
                  <Card
                    key={exercise.id}
                    className="p-6 border-none shadow-card hover:shadow-hover transition-smooth animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <span className="text-xs font-medium text-accent uppercase">
                          {exercise.category}
                        </span>
                        <h3 className="text-lg font-semibold mt-1">
                          {exercise.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {exercise.duration} • {exercise.level}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          {exercise.description}
                        </p>
                      </div>
                      <Button size="icon" className="gradient-hero shadow-soft flex-shrink-0">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progression</span>
                        <span className="font-medium">{exercise.progress}%</span>
                      </div>
                      <Progress value={exercise.progress} className="h-2" />
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* MindTalk */}
            <TabsContent value="mindtalk" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                  <Card
                    key={article.id}
                    className="overflow-hidden border-none shadow-card hover:shadow-hover transition-smooth cursor-pointer animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-smooth"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <span className="text-xs font-medium text-primary">{article.category}</span>
                      </div>
                    </div>
                    <div className="p-5 space-y-3">
                      <h3 className="font-semibold line-clamp-2">{article.title}</h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {article.readTime}
                        </div>
                        <Button size="sm" variant="ghost" className="text-primary">
                          Lire
                        </Button>
                      </div>
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
