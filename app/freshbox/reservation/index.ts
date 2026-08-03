import type { Request, Response } from "express";

export default async function props(req: Request, res: Response) {
  return {
    title: "Réservation de Table — FreshBox Restaurant",
    description: "Réservez votre table pour un moment gastronomique exceptionnel.",
  };
}
