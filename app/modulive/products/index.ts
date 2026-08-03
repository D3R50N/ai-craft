import type { Request, Response } from "express";

const products = [
  {
    id: "1",
    name: "Easy Sofa",
    category: "Sofa",
    price: 66.00,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "2",
    name: "Modern Lounge Chair",
    category: "Chair",
    price: 126.00,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "3",
    name: "Minimalist Cabinet",
    category: "Cabinet",
    price: 138.00,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "4",
    name: "Rumpi Woven Chair",
    category: "Chair",
    price: 100.00,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "5",
    name: "Romp Toll Ottoman",
    category: "Sofa",
    price: 86.00,
    image: "https://images.unsplash.com/photo-1580481072645-022f9a6d8310?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "6",
    name: "Almirah Storage Cupboard",
    category: "Cabinet",
    price: 222.00,
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
  },
];

export default async function props(req: Request, res: Response) {
  return {
    title: "All Products — Modulive Store",
    description: "Explore our full catalog of sustainable, handcrafted furniture.",
    products,
  };
}
