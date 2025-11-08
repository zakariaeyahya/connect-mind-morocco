import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatList from "@/components/shared/ChatList";
import ChatWindow from "@/components/shared/ChatWindow";
import { useChat } from "@/hooks/useChat";
import { MessageCircle } from "lucide-react";

const ProfessionalMessages = () => {
  const { conversations, getConversationMessages, sendMessage, markAsRead } = useChat();
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);

  // Professional ID (simulated as user 2 - Dr. Amina Benali)
  const currentUserId = 2;

  const handleSelectConversation = (id: number) => {
    setSelectedConversation(id);
    markAsRead(id);
  };

  const handleSendMessage = (content: string) => {
    if (selectedConversation) {
      sendMessage(selectedConversation, currentUserId, "Dr. Amina Benali", content);
    }
  };

  const selectedConv = conversations.find(c => c.id === selectedConversation);
  const messages = selectedConversation ? getConversationMessages(selectedConversation) : [];

  return (
    <div className="min-h-screen gradient-subtle">
      <Navbar />
      
      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-12">
        <div className="mb-6">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Messagerie Professionnelle
            </span>
          </h1>
          <p className="text-muted-foreground">
            Communiquez avec vos clients
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-card overflow-hidden" style={{ height: "calc(100vh - 280px)" }}>
          <div className="grid lg:grid-cols-3 h-full">
            <div className="lg:col-span-1 border-r border-border">
              <ChatList
                conversations={conversations}
                selectedConversation={selectedConversation}
                onSelectConversation={handleSelectConversation}
              />
            </div>
            
            <div className="lg:col-span-2">
              {selectedConv ? (
                <ChatWindow
                  conversation={selectedConv}
                  messages={messages}
                  onSendMessage={handleSendMessage}
                  currentUserId={currentUserId}
                />
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                  <MessageCircle className="w-20 h-20 text-muted-foreground/30 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Sélectionnez une conversation</h3>
                  <p className="text-muted-foreground">
                    Choisissez un client pour commencer à discuter
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfessionalMessages;
