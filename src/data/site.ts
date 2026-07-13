export type Location = "levallois" | "saint-brice";

export const CONTACT_EMAIL = "neoxbeauty@gmail.com";

export interface Employee {
  id: string;
  name: string;
  role: string;
  location: Location;
  image: string;
}

export interface Service {
  title: string;
  description: string;
  image: string;
}

export interface Institute {
  id: Location;
  name: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
}

export const institutes: Institute[] = [
  {
    id: "levallois",
    name: "Neox Beauty Levallois",
    city: "Levallois-Perret",
    address: "32 Av. Georges Pompidou, 92300 Levallois-Perret",
    phone: "06 30 00 75 94",
    hours: "Lun–Ven : 10h–19h · Dim : 12h–19h · Fermé le samedi",
  },
  {
    id: "saint-brice",
    name: "Neox Beauty Saint-Brice",
    city: "Saint-Brice-sous-Forêt",
    address: "Centre commercial des vergers, 95350 Saint-Brice-sous-Forêt",
    phone: "01 39 90 86 06",
    hours: "Lun–Ven : 10h–19h · Dim : 12h–19h · Fermé le samedi",
  },
];

export const employees: Employee[] = [
  {
    id: "neorah-levallois",
    name: "Neorah",
    role: "Responsable",
    location: "levallois",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=500&fit=crop",
  },
  {
    id: "yolanda",
    name: "Yolanda",
    role: "Esthéticienne",
    location: "levallois",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
  },
  {
    id: "chloe",
    name: "Chloé",
    role: "Esthéticienne",
    location: "levallois",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop",
  },
  {
    id: "wendy",
    name: "Wendy",
    role: "Esthéticienne",
    location: "levallois",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop",
  },
  {
    id: "neorah-saint-brice",
    name: "Neorah",
    role: "Responsable",
    location: "saint-brice",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=500&fit=crop",
  },
  {
    id: "shana",
    name: "Shana",
    role: "Esthéticienne",
    location: "saint-brice",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=500&fit=crop",
  },
  {
    id: "eden",
    name: "Eden",
    role: "Esthéticienne",
    location: "saint-brice",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=500&fit=crop",
  },
  {
    id: "dorine",
    name: "Dorine",
    role: "Esthéticienne",
    location: "saint-brice",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
  },
];

export const services: Service[] = [
  {
    title: "Manucure & semi-permanent",
    description:
      "Soins des ongles, pose de vernis classique ou gel longue tenue.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop",
  },
  {
    title: "Pédicure",
    description: "Soin complet des pieds pour un résultat impeccable.",
    image:
      "https://images.unsplash.com/photo-1519415510236-718bdcd38c08?w=600&h=400&fit=crop",
  },
  {
    title: "Extensions & Nail Art",
    description: "Créations sur mesure pour des ongles sublimes.",
    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&h=400&fit=crop",
  },
  {
    title: "Soin du visage",
    description: "Prestations adaptées à chaque type de peau.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d880?w=600&h=400&fit=crop",
  },
  {
    title: "Épilation",
    description: "Épilation douce et précise, visage et corps.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop",
  },
  {
    title: "Maquillage",
    description: "Mise en beauté pour toutes vos occasions.",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop",
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=500&h=500&fit=crop",
    alt: "Nail art semi-permanent",
  },
  {
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop",
    alt: "Manucure élégante",
  },
  {
    src: "https://images.unsplash.com/photo-1519014816548-bf779f0e7b3e?w=500&h=500&fit=crop",
    alt: "Vernis semi-permanent nude",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&h=500&fit=crop",
    alt: "Soin beauté des mains",
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&h=500&fit=crop",
    alt: "Institut de beauté",
  },
  {
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop",
    alt: "Maquillage professionnel",
  },
];
