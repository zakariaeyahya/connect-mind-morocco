import { useState } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const NotificationBell = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications] = useState([
    { id: 1, text: "Votre séance avec Dr. Bennani commence dans 1h", time: "Il y a 10 min", unread: true },
    { id: 2, text: "Nouveau message dans la communauté", time: "Il y a 2h", unread: true },
    { id: 3, text: "Rappel : Exercice de méditation quotidien", time: "Il y a 5h", unread: false },
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </Button>

      {isOpen && (
        <Card className="absolute right-0 top-12 w-80 shadow-hover border-none z-50 animate-scale-in">
          <div className="p-4 border-b border-border">
            <h3 className="font-semibold">Notifications</h3>
          </div>
          <div className="max-h-80 overflow-y-auto">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className={`p-4 border-b border-border hover:bg-muted/50 cursor-pointer transition-smooth ${
                  notif.unread ? "bg-accent/5" : ""
                }`}
              >
                <p className="text-sm font-medium">{notif.text}</p>
                <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
              </div>
            ))}
          </div>
          <div className="p-3 text-center border-t border-border">
            <button className="text-sm text-primary hover:underline">
              Voir toutes les notifications
            </button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default NotificationBell;
