import type { Request, Response } from "express";

const projectsList = [
  {
    id: "1",
    title: "Musée d'Art Contemporain Africain",
    location: "Abidjan, Côte d'Ivoire",
    year: "2025",
    category: "Muséographie & Culture",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "2",
    title: "Tour Résidentielle Les Almadies",
    location: "Dakar, Sénégal",
    year: "2024",
    category: "Architecture Résidentielle",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "3",
    title: "Siège Social Banque Panafricaine",
    location: "Lomé, Togo",
    year: "2024",
    category: "Tertiaire & Corporate",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "4",
    title: "Villa Ébène & Pierre Sauvage",
    location: "Kribi, Cameroun",
    year: "2023",
    category: "Résidence Privée",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80",
  },
];

export default async function props(req: Request, res: Response) {
  return {
    title: "Projets & Réalisations — Kabila Studio",
    description: "Explorer l'ensemble de nos réalisations architecturales à travers le continent.",
    projects: projectsList,
  };
}
