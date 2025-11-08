import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import NotificationBell from "@/components/shared/NotificationBell";
import ThemeToggle from "@/components/shared/ThemeToggle";
import LanguageSelector from "@/components/shared/LanguageSelector";
import { useRole } from "@/hooks/useRole";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isAuthPage = location.pathname === "/auth";
  const { role } = useRole();

  const isDashboard = location.pathname.includes("/dashboard") || 
                     location.pathname === "/profile" ||
                     location.pathname === "/pro-dashboard" ||
                     location.pathname === "/admin-dashboard" ||
                     location.pathname === "/calendar" ||
                     location.pathname === "/messages" ||
                     location.pathname === "/wellbeing";
  
  const isLandingPage = location.pathname === "/";
  
  // Check if user is logged in
  const isLoggedIn = !!localStorage.getItem("minconnect-role");

  // Define role-specific navigation
  const getNavLinks = () => {
    if (role === "user") {
      return [
        { label: "Découvrir", path: "/dashboard" },
        { label: "Professionnels", path: "/professionals" },
        { label: "Communauté", path: "/community" },
        { label: "Bien-être", path: "/wellbeing" },
        { label: "Partenaires", path: "/partners" },
      ];
    } else if (role === "professional") {
      return [
        { label: "Tableau de bord", path: "/pro-dashboard" },
        { label: "Calendrier", path: "/calendar" },
        { label: "Messages", path: "/messages" },
      ];
    } else if (role === "admin") {
      return [
        { label: "Tableau de bord", path: "/admin-dashboard" },
        { label: "Calendrier", path: "/calendar" },
      ];
    }
    // Default for non-logged in users
    return [
      { label: "Accueil", path: "/" },
      { label: "Découvrir", path: "/professionals" },
      { label: "Communauté", path: "/community" },
      { label: "Partenaires", path: "/partners" },
    ];
  };

  const navLinks = getNavLinks();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center shadow-soft">
              <Heart className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              MinConnect
            </span>
          </Link>

          {/* Desktop Navigation */}
          {!isLandingPage && (
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSelector />
            <ThemeToggle />
            {isDashboard && <NotificationBell />}
            {!isAuthPage && !isLoggedIn && (
              <>
                <Link to="/auth">
                  <Button variant="ghost">Se connecter</Button>
                </Link>
                <Link to="/auth">
                  <Button className="gradient-hero shadow-soft">
                    Commencer
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && !isLandingPage && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {!isAuthPage && !isLoggedIn && (
                <div className="flex flex-col gap-2 px-4 pt-2">
                  <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full">
                      Se connecter
                    </Button>
                  </Link>
                  <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full gradient-hero shadow-soft">
                      Commencer
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
