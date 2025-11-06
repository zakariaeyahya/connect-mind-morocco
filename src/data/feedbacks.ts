export interface Feedback {
  id: number;
  userId: number;
  userName: string;
  professionalId: number;
  rating: number;
  comment: string;
  date: string;
}

export const feedbacks: Feedback[] = [
  {
    id: 1,
    userId: 1,
    userName: "Zakariae E.",
    professionalId: 1,
    rating: 5,
    comment: "Dr. Bennani est exceptionnelle. Elle m'a aidé à surmonter mes difficultés avec beaucoup de professionnalisme et d'empathie.",
    date: "2025-10-28"
  },
  {
    id: 2,
    userId: 2,
    userName: "Sarah B.",
    professionalId: 1,
    rating: 5,
    comment: "Très à l'écoute et bienveillante. Je recommande vivement !",
    date: "2025-10-15"
  },
  {
    id: 3,
    userId: 3,
    userName: "Ahmed T.",
    professionalId: 2,
    rating: 4,
    comment: "Bon professionnel, approche efficace pour gérer le stress.",
    date: "2025-10-20"
  },
  {
    id: 4,
    userId: 1,
    userName: "Zakariae E.",
    professionalId: 4,
    rating: 5,
    comment: "La thérapie de couple avec Dr. Tazi a transformé notre relation. Merci infiniment.",
    date: "2025-11-01"
  },
  {
    id: 5,
    userId: 4,
    userName: "Fatima Z.",
    professionalId: 3,
    rating: 4,
    comment: "Sarah est une excellente coach. Ses conseils sont pratiques et efficaces.",
    date: "2025-10-25"
  }
];
