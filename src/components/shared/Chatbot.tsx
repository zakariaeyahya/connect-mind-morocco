import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { role: "bot", text: "Bonjour ! Comment vous sentez-vous aujourd'hui ? 🌿" }
  ]);

  const quickReplies = [
    "Trouver un professionnel",
    "Faire un exercice",
    "Suivre ma routine"
  ];

  const handleSend = () => {
    if (!message.trim()) return;
    
    setMessages(prev => [...prev, { role: "user", text: message }]);
    setMessage("");
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "bot", 
        text: "Je suis là pour vous aider. Que puis-je faire pour vous aujourd'hui ?" 
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full gradient-hero shadow-hover flex items-center justify-center z-50 transition-smooth hover:scale-110"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 shadow-hover border-none z-50 flex flex-col animate-slide-in-right">
          {/* Header */}
          <div className="p-4 gradient-hero text-white rounded-t-lg">
            <h3 className="font-semibold">Assistant MinConnect</h3>
            <p className="text-xs opacity-90">Toujours là pour vous</p>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === "user"
                      ? "bg-primary text-white"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="px-4 pb-2 flex gap-2 flex-wrap">
            {quickReplies.map((reply, idx) => (
              <button
                key={idx}
                onClick={() => setMessage(reply)}
                className="px-3 py-1 text-xs bg-secondary hover:bg-secondary/80 rounded-full transition-fast"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Écrivez votre message..."
              className="flex-1"
            />
            <Button onClick={handleSend} size="icon" className="gradient-hero shadow-soft">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
