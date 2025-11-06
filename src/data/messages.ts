export interface Message {
  id: number;
  conversationId: number;
  senderId: number;
  senderName: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Conversation {
  id: number;
  participants: number[];
  participantNames: string[];
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  avatar?: string;
}

export const conversations: Conversation[] = [
  {
    id: 1,
    participants: [1, 5],
    participantNames: ["Zakariae El Amrani", "Dr. Amina Bennani"],
    lastMessage: "Merci pour la séance d'aujourd'hui, je me sens beaucoup mieux.",
    lastMessageTime: "2025-11-06T15:30:00",
    unreadCount: 0,
    avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400"
  },
  {
    id: 2,
    participants: [1, 2],
    participantNames: ["Zakariae El Amrani", "Dr. Karim El Fassi"],
    lastMessage: "Pouvons-nous déplacer notre rendez-vous de demain ?",
    lastMessageTime: "2025-11-06T11:20:00",
    unreadCount: 2,
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400"
  },
  {
    id: 3,
    participants: [1, 3],
    participantNames: ["Zakariae El Amrani", "Sarah Alaoui"],
    lastMessage: "Les exercices recommandés fonctionnent très bien !",
    lastMessageTime: "2025-11-05T18:45:00",
    unreadCount: 0,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400"
  }
];

export const messages: Message[] = [
  {
    id: 1,
    conversationId: 1,
    senderId: 1,
    senderName: "Zakariae El Amrani",
    content: "Bonjour Dr. Bennani, j'ai suivi vos conseils cette semaine.",
    timestamp: "2025-11-06T14:00:00",
    read: true
  },
  {
    id: 2,
    conversationId: 1,
    senderId: 5,
    senderName: "Dr. Amina Bennani",
    content: "Bonjour Zakariae ! C'est excellent. Comment vous sentez-vous ?",
    timestamp: "2025-11-06T14:15:00",
    read: true
  },
  {
    id: 3,
    conversationId: 1,
    senderId: 1,
    senderName: "Zakariae El Amrani",
    content: "Beaucoup mieux. Les exercices de respiration m'aident vraiment.",
    timestamp: "2025-11-06T14:20:00",
    read: true
  },
  {
    id: 4,
    conversationId: 1,
    senderId: 5,
    senderName: "Dr. Amina Bennani",
    content: "Je suis ravie de l'entendre. Continuez ainsi et on en discute lors de notre prochaine séance.",
    timestamp: "2025-11-06T14:25:00",
    read: true
  },
  {
    id: 5,
    conversationId: 1,
    senderId: 1,
    senderName: "Zakariae El Amrani",
    content: "Merci pour la séance d'aujourd'hui, je me sens beaucoup mieux.",
    timestamp: "2025-11-06T15:30:00",
    read: true
  }
];
