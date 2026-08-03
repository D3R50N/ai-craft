import type { Request, Response } from "express";

const initialMenuItems = [
  {
    _id: "1",
    name: "Attiéké & Poisson Grillé",
    category: "Spécialités Ivoiriennes",
    description: "Semoule de manioc cuite à la vapeur, servie avec poisson capitaine grillé, alloco et piment frais.",
    price: 8500,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
  },
  {
    _id: "2",
    name: "Poulet Yassa Sénégalais",
    category: "Spécialités Sénégalaises",
    description: "Poulet mariné aux citrons verts, caramélisé avec oignons, moutarde à l'ancienne et riz blanc parfumé.",
    price: 7500,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
  },
  {
    _id: "3",
    name: "Thieboudienne Royal",
    category: "Spécialités Sénégalaises",
    description: "Riz au gras mijoté au mérou frais, manioc, carottes, chou et sauce tamarin épicée.",
    price: 9000,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  },
  {
    _id: "4",
    name: "Brochettes Suya Pimentées",
    category: "Grillades & Suya",
    description: "Fine viande de bœuf marinée aux épices Kankankan, grillée au feu de bois avec oignons crus.",
    price: 6000,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
  },
];

export default async function props(req: Request, res: Response) {
  return {
    title: "FreshBox — Gastronomie & Saveurs Africaines",
    description: "Savourez les meilleurs plats traditionnels et modernes de la cuisine africaine.",
    menuItems: initialMenuItems,
  };
}
