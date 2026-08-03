import type { Request, Response } from "express";

const products = [
  {
    id: "1",
    name: "Canapé Bois d'Iroko & Tissu Wax",
    category: "Canapé",
    price: 185000,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "2",
    name: "Fauteuil Artisanal en Ébène & Raphia",
    category: "Fauteuil",
    price: 95000,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "3",
    name: "Buffet Sculpté en Teak Africain",
    category: "Meuble",
    price: 240000,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "4",
    name: "Chaise Tressée Motif Kente",
    category: "Fauteuil",
    price: 75000,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80",
  },
];

export default async function props(req: Request, res: Response) {
  return {
    title: "Modulive — Artisanat & Mobilier Africain Éco-Responsable",
    description: "Découvrez notre collection de meubles artisanaux en bois nobles d'Afrique.",
    products,
  };
}
