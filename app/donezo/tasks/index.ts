import type { Request, Response } from "express";

export default async function props(req: Request, res: Response) {
  return {
    title: "Tasks & Board — Donezo Dashboard",
    description: "Gérez vos tâches et projets en toute simplicité.",
    activeTab: "tasks",
  };
}
