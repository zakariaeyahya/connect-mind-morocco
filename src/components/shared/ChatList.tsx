import { MessageCircle } from "lucide-react";
import { Conversation } from "@/data/messages";
import { motion } from "framer-motion";

interface ChatListProps {
  conversations: Conversation[];
  selectedConversation: number | null;
  onSelectConversation: (id: number) => void;
}

const ChatList = ({ conversations, selectedConversation, onSelectConversation }: ChatListProps) => {
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const today = new Date();
    
    if (date.toDateString() === today.toDateString()) {
      return date.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
    }
    return date.toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
  };

  return (
    <div className="h-full bg-card border-r border-border">
      <div className="p-4 border-b border-border">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-primary" />
          Messages
        </h2>
      </div>
      
      <div className="overflow-y-auto h-[calc(100%-73px)]">
        {conversations.map((conversation, index) => (
          <motion.button
            key={conversation.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => onSelectConversation(conversation.id)}
            className={`w-full p-4 flex items-start gap-3 hover:bg-secondary/50 transition-smooth border-b border-border ${
              selectedConversation === conversation.id ? "bg-secondary" : ""
            }`}
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden">
                {conversation.avatar ? (
                  <img src={conversation.avatar} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white font-semibold">
                    {conversation.participantNames[1]?.[0] || "?"}
                  </div>
                )}
              </div>
              {conversation.unreadCount > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-white text-xs flex items-center justify-center font-semibold">
                  {conversation.unreadCount}
                </div>
              )}
            </div>
            
            <div className="flex-1 text-left min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className="font-semibold text-sm truncate">
                  {conversation.participantNames[1] || "Inconnu"}
                </p>
                <span className="text-xs text-muted-foreground">
                  {formatTime(conversation.lastMessageTime)}
                </span>
              </div>
              <p className="text-sm text-muted-foreground truncate">
                {conversation.lastMessage}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
