import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, User, Stethoscope, Shield } from "lucide-react";
import { toast } from "sonner";
import { UserRole } from "@/hooks/useRole";

const Auth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole>("user");

  const handleSubmit = async (e: React.FormEvent, action: "login" | "signup") => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;

    // Hardcoded emails
    const emailRoleMap: Record<string, UserRole> = {
      "patient@minconnect.ma": "user",
      "pro@minconnect.ma": "professional",
      "admin@minconnect.ma": "admin"
    };

    const role = emailRoleMap[email];

    setTimeout(() => {
      setIsLoading(false);
      
      if (!role) {
        toast.error("Email non reconnu. Utilisez patient@minconnect.ma, pro@minconnect.ma ou admin@minconnect.ma");
        return;
      }

      localStorage.setItem("minconnect-role", role);
      toast.success("Connexion réussie !");
      
      // Redirect based on role
      if (role === "professional") {
        navigate("/pro-dashboard");
      } else if (role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/dashboard");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen gradient-subtle flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md animate-scale-in">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center shadow-soft">
            <Heart className="w-6 h-6 text-white" fill="white" />
          </div>
          <span className="text-2xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            MinConnect
          </span>
        </Link>

        <Card className="p-8 shadow-card border-none">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold mb-2">Bienvenue</h1>
            <p className="text-muted-foreground">
              Bienvenue dans votre espace de bien-être
            </p>
          </div>

          {/* Info */}
          <div className="mb-6 p-4 bg-muted/50 rounded-lg text-sm text-muted-foreground">
            <p className="font-medium mb-2">Emails de test :</p>
            <ul className="space-y-1 text-xs">
              <li>• Patient : <code className="text-primary">patient@minconnect.ma</code></li>
              <li>• Professionnel : <code className="text-primary">pro@minconnect.ma</code></li>
              <li>• Administrateur : <code className="text-primary">admin@minconnect.ma</code></li>
            </ul>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Connexion</TabsTrigger>
              <TabsTrigger value="signup">Inscription</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={(e) => handleSubmit(e, "login")} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Mot de passe</Label>
                  <Input
                    id="login-password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full gradient-hero shadow-soft"
                  disabled={isLoading}
                >
                  {isLoading ? "Connexion..." : "Se connecter"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={(e) => handleSubmit(e, "signup")} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Nom complet</Label>
                  <Input
                    id="signup-name"
                    name="name"
                    type="text"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Mot de passe</Label>
                  <Input
                    id="signup-password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full gradient-hero shadow-soft"
                  disabled={isLoading}
                >
                  {isLoading ? "Création..." : "Créer mon compte"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-smooth">
              ← Retour à l'accueil
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
