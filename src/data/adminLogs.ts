export interface AdminLog {
  id: number;
  action: string;
  entity: string;
  entityId: number;
  adminId: number;
  adminName: string;
  timestamp: string;
  details?: string;
}

export const adminLogs: AdminLog[] = [
  {
    id: 1,
    action: "Suppression",
    entity: "Post",
    entityId: 12,
    adminId: 6,
    adminName: "Admin MinConnect",
    timestamp: "2025-11-03T14:30:00",
    details: "Contenu signalé pour spam"
  },
  {
    id: 2,
    action: "Désactivation",
    entity: "Utilisateur",
    entityId: 4,
    adminId: 6,
    adminName: "Admin MinConnect",
    timestamp: "2025-11-02T10:15:00",
    details: "Violation des conditions d'utilisation"
  },
  {
    id: 3,
    action: "Validation",
    entity: "Professionnel",
    entityId: 5,
    adminId: 6,
    adminName: "Admin MinConnect",
    timestamp: "2025-10-28T16:45:00",
    details: "Vérification des diplômes complétée"
  },
  {
    id: 4,
    action: "Modération",
    entity: "Post",
    entityId: 8,
    adminId: 6,
    adminName: "Admin MinConnect",
    timestamp: "2025-10-25T09:20:00",
    details: "Contenu modéré pour langage inapproprié"
  },
  {
    id: 5,
    action: "Promotion",
    entity: "Utilisateur",
    entityId: 3,
    adminId: 6,
    adminName: "Admin MinConnect",
    timestamp: "2025-10-20T11:00:00",
    details: "Passage à Premium offert"
  },
  {
    id: 6,
    action: "Connexion",
    entity: "Utilisateur",
    entityId: 1,
    adminId: 6,
    adminName: "Admin MinConnect",
    timestamp: "2025-11-06T09:15:00",
    details: "Connexion réussie depuis Casablanca"
  },
  {
    id: 7,
    action: "Création",
    entity: "Professionnel",
    entityId: 8,
    adminId: 6,
    adminName: "Admin MinConnect",
    timestamp: "2025-11-05T14:20:00",
    details: "Nouveau professionnel en attente de validation"
  },
  {
    id: 8,
    action: "Modification",
    entity: "Post",
    entityId: 15,
    adminId: 6,
    adminName: "Admin MinConnect",
    timestamp: "2025-11-04T16:30:00",
    details: "Contenu mis à jour suite à signalement"
  },
  {
    id: 9,
    action: "Validation",
    entity: "Paiement",
    entityId: 42,
    adminId: 6,
    adminName: "Admin MinConnect",
    timestamp: "2025-11-03T11:45:00",
    details: "Paiement Premium vérifié et validé"
  },
  {
    id: 10,
    action: "Activation",
    entity: "Utilisateur",
    entityId: 12,
    adminId: 6,
    adminName: "Admin MinConnect",
    timestamp: "2025-11-02T15:00:00",
    details: "Compte réactivé après vérification"
  }
];
