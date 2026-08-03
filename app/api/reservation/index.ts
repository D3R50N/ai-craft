import type { Request, Response } from "express";
import { connectDB } from "@/lib/db";
import { Reservation } from "@/lib/models/Reservation";

export default async function handler(req: Request, res: Response) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  try {
    await connectDB();

    const { name, phone, email, date, time, guests, notes } = req.body || {};

    if (!name || !phone || !email || !date || !time || !guests) {
      return res.status(400).json({ error: "Tous les champs obligatoires doivent être remplis" });
    }

    const reservation = await Reservation.create({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      date,
      time,
      guests: Number(guests),
      notes: (notes || "").trim(),
      status: "confirmed",
    });

    return res.status(201).json({
      message: "Réservation confirmée avec succès !",
      reservation,
    });
  } catch (error: any) {
    console.error("Reservation Error:", error);
    return res.status(500).json({ error: error.message || "Erreur lors de la réservation" });
  }
}
