import type { Request, Response } from "express";

export default async function props(req: Request, res: Response) {
  return {
    title: "Team Members — Donezo Dashboard",
    description: "Gestion de l'équipe et attribution des rôles.",
    activeTab: "team",
  };
}
