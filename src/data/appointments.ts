export interface Appointment {
  id: number;
  title: string;
  date: string;
  time: string;
  userId: number;
  professionalId: number;
  status: "confirmé" | "à venir" | "annulé" | "terminé";
  type: "en ligne" | "cabinet";
  notes?: string;
}

export const appointments: Appointment[] = [
  {
    id: 1,
    title: "Séance de thérapie cognitive",
    date: "2025-11-15",
    time: "14:00",
    userId: 1,
    professionalId: 1,
    status: "confirmé",
    type: "en ligne",
    notes: "Première séance de suivi"
  },
  {
    id: 2,
    title: "Consultation psychiatrique",
    date: "2025-11-16",
    time: "10:30",
    userId: 2,
    professionalId: 2,
    status: "confirmé",
    type: "cabinet"
  },
  {
    id: 3,
    title: "Session de coaching",
    date: "2025-11-18",
    time: "16:00",
    userId: 3,
    professionalId: 3,
    status: "à venir",
    type: "en ligne"
  },
  {
    id: 4,
    title: "Thérapie de couple",
    date: "2025-11-20",
    time: "15:00",
    userId: 4,
    professionalId: 4,
    status: "confirmé",
    type: "cabinet",
    notes: "Séance avec les deux partenaires"
  },
  {
    id: 5,
    title: "Consultation burn-out",
    date: "2025-11-12",
    time: "09:00",
    userId: 5,
    professionalId: 5,
    status: "terminé",
    type: "en ligne"
  }
];
