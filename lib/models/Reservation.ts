import mongoose, { Schema, Document, Model } from "mongoose";

export interface IReservation extends Document {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
  status: "pending" | "confirmed" | "cancelled";
}

const ReservationSchema: Schema<IReservation> = new Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    guests: { type: Number, required: true, min: 1 },
    notes: { type: String, default: "" },
    status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
  },
  { timestamps: true }
);

export const Reservation: Model<IReservation> =
  mongoose.models.Reservation || mongoose.model<IReservation>("Reservation", ReservationSchema);
