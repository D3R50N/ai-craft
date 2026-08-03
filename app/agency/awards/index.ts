import type { Request, Response } from "express";

const awardsFullList = [
  { year: "2025", title: "Lauréat Prix de l'Architecture Africaine Moderne", location: "Abidjan", category: "Grand Prix" },
  { year: "2024", title: "Grand Prix de la Création & Design d'Espace", location: "Dakar", category: "Design d'Intérieur" },
  { year: "2023", title: "Distinction Biennale Internationale d'Architecture", location: "Paris", category: "Urbanisme" },
  { year: "2022", title: "Médaille d'Or Développement Durable & Matériaux Nobles", location: "Lomé", category: "Éco-Conception" },
];

export default async function props(req: Request, res: Response) {
  return {
    title: "Prix & Distinctions — Kabila Studio",
    description: "Palmarès et reconnaissance internationale de Kabila Studio.",
    awards: awardsFullList,
  };
}
