import type { Request, Response } from "express";

export default async function props(req: Request, res: Response) {
  return {
    title: "PixelFix — Éditeur de Photos en Ligne Gratuit",
    description: "Retouchez vos photos instantanément sans inscription : filtres, rognage, filigranes et export HD.",
  };
}
