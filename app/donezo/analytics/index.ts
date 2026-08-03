import type { Request, Response } from "express";

export default async function props(req: Request, res: Response) {
  return {
    title: "Analytics & Performance — Donezo Dashboard",
    description: "Métriques avancées de productivité et statistiques du projet.",
    activeTab: "analytics",
  };
}
