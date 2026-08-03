import mongoose, { Schema, Document, Model } from "mongoose";

export interface IMenuItem extends Document {
  name: string;
  category: "Burger" | "Pizza" | "Fried Chicken" | "French Fries" | "Sandwich" | "Pasta";
  description: string;
  price: number;
  image: string;
  isFeatured?: boolean;
}

const MenuItemSchema: Schema<IMenuItem> = new Schema(
  {
    name: { type: String, required: true, trim: true },
    category: {
      type: String,
      required: true,
      enum: ["Burger", "Pizza", "Fried Chicken", "French Fries", "Sandwich", "Pasta"],
    },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const MenuItem: Model<IMenuItem> =
  mongoose.models.MenuItem || mongoose.model<IMenuItem>("MenuItem", MenuItemSchema);
