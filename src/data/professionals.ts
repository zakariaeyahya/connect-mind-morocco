export interface Professional {
  id: number;
  name: string;
  specialty: string;
  price: number;
  rating: number;
  reviews: number;
  languages: string[];
  city: string;
  available: boolean;
  image: string;
  description: string;
}

export const professionals: Professional[] = [
  {
    id: 1,
    name: "Dr. Amina Bennani",
    specialty: "Psychologue clinicien",
    price: 400,
    rating: 4.9,
    reviews: 127,
    languages: ["Français", "Arabe", "Anglais"],
    city: "Casablanca",
    available: true,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
    description: "Spécialisée dans la thérapie cognitive-comportementale avec plus de 10 ans d'expérience."
  },
  {
    id: 2,
    name: "Dr. Karim El Fassi",
    specialty: "Psychiatre",
    price: 600,
    rating: 4.8,
    reviews: 93,
    languages: ["Français", "Arabe"],
    city: "Rabat",
    available: true,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400",
    description: "Expert en gestion du stress et troubles anxieux. Approche intégrative."
  },
  {
    id: 3,
    name: "Sarah Alaoui",
    specialty: "Coach bien-être",
    price: 300,
    rating: 4.7,
    reviews: 156,
    languages: ["Français", "Anglais"],
    city: "Marrakech",
    available: false,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    description: "Accompagnement personnalisé pour retrouver équilibre et sérénité au quotidien."
  },
  {
    id: 4,
    name: "Dr. Youssef Tazi",
    specialty: "Thérapeute de couple",
    price: 500,
    rating: 4.9,
    reviews: 84,
    languages: ["Français", "Arabe", "Anglais"],
    city: "Casablanca",
    available: true,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400",
    description: "Spécialiste des relations et thérapie familiale. Approche systémique."
  },
  {
    id: 5,
    name: "Nadia Chraibi",
    specialty: "Psychologue du travail",
    price: 350,
    rating: 4.6,
    reviews: 72,
    languages: ["Français", "Arabe"],
    city: "Tanger",
    available: true,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    description: "Gestion du burn-out et développement professionnel personnel."
  },
  {
    id: 6,
    name: "Dr. Omar Berrada",
    specialty: "Addictologue",
    price: 550,
    rating: 4.8,
    reviews: 61,
    languages: ["Français", "Arabe", "Anglais"],
    city: "Fès",
    available: true,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400",
    description: "Accompagnement dans les dépendances et troubles compulsifs."
  }
];
