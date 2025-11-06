export interface User {
  id: number;
  name: string;
  email: string;
  role: "user" | "professional" | "admin";
  premium: boolean;
  active: boolean;
  avatar?: string;
  joinDate: string;
  lastSeen?: string;
}

export const users: User[] = [
  {
    id: 1,
    name: "Zakariae El Amrani",
    email: "zakariae@minconnect.ma",
    role: "user",
    premium: true,
    active: true,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    joinDate: "2024-03-15",
    lastSeen: "2025-11-06"
  },
  {
    id: 2,
    name: "Sarah Benjelloun",
    email: "sarah.b@minconnect.ma",
    role: "user",
    premium: false,
    active: true,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    joinDate: "2024-06-20",
    lastSeen: "2025-11-05"
  },
  {
    id: 3,
    name: "Ahmed Tazi",
    email: "ahmed.t@minconnect.ma",
    role: "user",
    premium: true,
    active: true,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    joinDate: "2024-01-10",
    lastSeen: "2025-11-06"
  },
  {
    id: 4,
    name: "Fatima Zahra",
    email: "fatima.z@minconnect.ma",
    role: "user",
    premium: false,
    active: false,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    joinDate: "2024-08-05"
  },
  {
    id: 5,
    name: "Dr. Amina Bennani",
    email: "amina.bennani@minconnect.ma",
    role: "professional",
    premium: true,
    active: true,
    avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
    joinDate: "2023-11-01",
    lastSeen: "2025-11-06"
  },
  {
    id: 6,
    name: "Admin MinConnect",
    email: "admin@minconnect.ma",
    role: "admin",
    premium: true,
    active: true,
    joinDate: "2023-01-01",
    lastSeen: "2025-11-06"
  }
];
