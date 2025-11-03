import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Heart, MessageCircle, Send } from "lucide-react";
import { communityPosts } from "@/data/communityPosts";
import { toast } from "sonner";

const Community = () => {
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [newPost, setNewPost] = useState("");

  const handleLike = (postId: number) => {
    toast.success("Réaction ajoutée ❤️");
  };

  const handleReply = (postId: number) => {
    toast.success("Réponse envoyée !");
    setReplyingTo(null);
  };

  const handleNewPost = () => {
    if (newPost.trim()) {
      toast.success("Publication partagée avec la communauté !");
      setNewPost("");
    }
  };

  return (
    <div className="min-h-screen gradient-subtle">
      <Navbar />

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-12">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 animate-slide-up">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Communauté & Soutien
          </h1>
          <p className="text-lg text-muted-foreground">
            Un espace bienveillant pour partager et se soutenir mutuellement
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* New Post Card */}
          <Card className="p-6 mb-8 border-none shadow-card animate-scale-in">
            <h3 className="font-semibold mb-4">Partager avec la communauté</h3>
            <Textarea
              placeholder="Que souhaitez-vous partager aujourd'hui ?"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="mb-4 min-h-[100px]"
            />
            <Button
              className="gradient-hero shadow-soft"
              onClick={handleNewPost}
              disabled={!newPost.trim()}
            >
              <Send className="w-4 h-4" />
              Publier
            </Button>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="discussions" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
              <TabsTrigger value="groups">Groupes de soutien</TabsTrigger>
              <TabsTrigger value="events">Événements</TabsTrigger>
            </TabsList>

            <TabsContent value="discussions" className="space-y-6">
              {communityPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className="p-6 border-none shadow-card hover:shadow-hover transition-smooth animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Post Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-12 h-12 rounded-full object-cover shadow-soft"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{post.author}</h4>
                        <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {post.tag}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                    </div>
                  </div>

                  {/* Post Content */}
                  <p className="mb-4 text-foreground leading-relaxed">{post.content}</p>

                  {/* Post Actions */}
                  <div className="flex items-center gap-6 pt-4 border-t border-border">
                    <button
                      onClick={() => handleLike(post.id)}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-smooth"
                    >
                      <Heart className="w-5 h-5" />
                      <span>{post.likes}</span>
                    </button>
                    <button
                      onClick={() => setReplyingTo(replyingTo === post.id ? null : post.id)}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>{post.replies} réponses</span>
                    </button>
                  </div>

                  {/* Reply Form */}
                  {replyingTo === post.id && (
                    <div className="mt-4 pt-4 border-t border-border animate-slide-up">
                      <Textarea
                        placeholder="Écrivez votre réponse..."
                        className="mb-3"
                      />
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleReply(post.id)}
                        >
                          Répondre
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setReplyingTo(null)}
                        >
                          Annuler
                        </Button>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="groups">
              <Card className="p-12 text-center border-none shadow-card">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Groupes de soutien</h3>
                  <p className="text-muted-foreground mb-6">
                    Rejoignez des groupes thématiques pour échanger avec des personnes qui
                    partagent des expériences similaires.
                  </p>
                  <Button className="gradient-hero shadow-soft">
                    Explorer les groupes
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="events">
              <Card className="p-12 text-center border-none shadow-card">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Événements à venir</h3>
                  <p className="text-muted-foreground mb-6">
                    Participez à des ateliers, webinaires et sessions de groupe pour
                    enrichir votre parcours bien-être.
                  </p>
                  <Button className="gradient-hero shadow-soft">
                    Voir les événements
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Sidebar Tips */}
          <Card className="p-6 border-none shadow-card gradient-card">
            <h3 className="font-semibold mb-4">Conseils de nos experts</h3>
            <div className="space-y-4">
              <div className="p-4 bg-background/50 rounded-lg">
                <h4 className="font-medium mb-2 text-sm">
                  🌱 Prenez soin de votre santé mentale
                </h4>
                <p className="text-sm text-muted-foreground">
                  Parlez ouvertement de vos émotions et n'hésitez pas à demander de l'aide.
                </p>
              </div>
              <div className="p-4 bg-background/50 rounded-lg">
                <h4 className="font-medium mb-2 text-sm">
                  💪 La force est dans la vulnérabilité
                </h4>
                <p className="text-sm text-muted-foreground">
                  Partager ses difficultés est un signe de courage, pas de faiblesse.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Community;
