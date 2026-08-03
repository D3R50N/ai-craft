import type { Request, Response } from "express";

export default async function props(req: Request, res: Response) {
  return {
    title: "Donezo — SaaS Project & Task Management Dashboard",
    description: "Plan, prioritize, and accomplish your tasks with ease.",
    activeTab: "dashboard",
  };
}
