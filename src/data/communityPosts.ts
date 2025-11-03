export interface CommunityPost {
  id: number;
  author: string;
  avatar: string;
  content: string;
  tag: string;
  timestamp: string;
  replies: number;
  likes: number;
}

export const communityPosts: CommunityPost[] = [
  {
    id: 1,
    author: "Salma K.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    content: "Aujourd'hui j'ai fait ma première séance de méditation. Je me sens plus calme et centrée. Merci à cette communauté pour le soutien ! 🙏",
    tag: "#méditation",
    timestamp: "Il y a 2 heures",
    replies: 8,
    likes: 24
  },
  {
    id: 2,
    author: "Ahmed M.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    content: "Comment gérez-vous le stress au travail ? Je cherche des techniques efficaces pour mieux gérer la pression quotidienne.",
    tag: "#stress",
    timestamp: "Il y a 5 heures",
    replies: 15,
    likes: 31
  },
  {
    id: 3,
    author: "Zineb T.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    content: "Semaine difficile mais je continue d'avancer. N'oubliez pas : chaque petit pas compte ! 💪",
    tag: "#motivation",
    timestamp: "Il y a 1 jour",
    replies: 12,
    likes: 58
  },
  {
    id: 4,
    author: "Mehdi L.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
    content: "Ma première séance de thérapie s'est super bien passée. Je recommande vraiment de franchir le pas si vous hésitez.",
    tag: "#thérapie",
    timestamp: "Il y a 2 jours",
    replies: 19,
    likes: 47
  }
];
