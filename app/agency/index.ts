import type { Request, Response } from "express";

const filmstripImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80",
];

const locations = [
  { city: "ABIDJAN", description: "SIÈGE REGIONAL, PROJETS TERTIAIRES ET RÉSIDENTIELS EN CÔTE D'IVOIRE." },
  { city: "DAKAR", description: "TOURS RÉSIDENTIELLES ET MUSÉOGRAPHIE CONTEMPORAINE AU SÉNÉGAL." },
  { city: "LOMÉ", description: "COMPLEXES BANCAIRES ET INFRASTRUCTURES PUBLIQUES AU TOGO." },
  { city: "PARIS", description: "BUREAU D'ÉTUDES INTERNATIONAL ET COLLABORATIONS EUROPÉENNES." },
];

export default async function props(req: Request, res: Response) {
  return {
    title: "Kabila Studio — Architectes & Direction Créative",
    description: "Peter Marino style architectural portfolio.",
    filmstripImages,
    locations,
  };
}
