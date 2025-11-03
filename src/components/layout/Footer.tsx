import { Link } from "react-router-dom";
import { Heart, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center shadow-soft">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                MinConnect
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecter les esprits pour un monde plus équilibré
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-smooth">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/professionals" className="hover:text-primary transition-smooth">
                  Trouver un thérapeute
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-primary transition-smooth">
                  Communauté
                </Link>
              </li>
              <li>
                <Link to="/wellbeing" className="hover:text-primary transition-smooth">
                  Bien-être
                </Link>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="font-semibold mb-4">Légal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-primary transition-smooth">
                  À propos
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  CGU
                </a>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@minconnect.ma</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Casablanca, Maroc</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MinConnect. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
