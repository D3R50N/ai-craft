import type { Request, Response } from "express";

export default async function props(req: Request, res: Response) {
  return {
    title: "DevCraft AI Hub — Portail Multi-Sites IA",
    description: "Plateforme multi-sites hébergeant plusieurs applications web générées par IA.",
  };
}
