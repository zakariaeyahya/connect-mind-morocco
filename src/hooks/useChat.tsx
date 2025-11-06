import { useState } from "react";
import { messages as initialMessages, conversations as initialConversations, Message } from "@/data/messages";

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [conversations, setConversations] = useState(initialConversations);

  const sendMessage = (conversationId: number, senderId: number, senderName: string, content: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      conversationId,
      senderId,
      senderName,
      content,
      timestamp: new Date().toISOString(),
      read: false
    };

    setMessages([...messages, newMessage]);

    // Update conversation
    setConversations(conversations.map(conv => {
      if (conv.id === conversationId) {
        return {
          ...conv,
          lastMessage: content,
          lastMessageTime: newMessage.timestamp,
          unreadCount: conv.unreadCount + (senderId !== 1 ? 1 : 0)
        };
      }
      return conv;
    }));
  };

  const getConversationMessages = (conversationId: number) => {
    return messages.filter(msg => msg.conversationId === conversationId);
  };

  const markAsRead = (conversationId: number) => {
    setConversations(conversations.map(conv => {
      if (conv.id === conversationId) {
        return { ...conv, unreadCount: 0 };
      }
      return conv;
    }));
  };

  return {
    conversations,
    messages,
    sendMessage,
    getConversationMessages,
    markAsRead
  };
};
