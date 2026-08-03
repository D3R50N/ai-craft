import type { Request, Response } from "express";
import { connectDB } from "@/lib/db";
import { MenuItem } from "@/lib/models/MenuItem";

const initialMenuItems = [
  {
    name: "Fried Rice Deluxe",
    category: "Fried Chicken",
    description: "Delicious fried rice packed with grilled tofu, fresh veggies and authentic spices.",
    price: 11.50,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    isFeatured: true,
  },
  {
    name: "Pepperoni Supreme Pizza",
    category: "Pizza",
    description: "Crispy thin crust topped with premium pepperoni, rich tomato sauce and extra mozzarella cheese.",
    price: 12.50,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
    isFeatured: true,
  },
  {
    name: "Smokey Bacon Burger",
    category: "Burger",
    description: "Juicy beef patty with melted cheddar, crispy bacon, caramelized onions and signature house sauce.",
    price: 13.90,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    isFeatured: true,
  },
  {
    name: "Truffle Cream Pasta",
    category: "Pasta",
    description: "Al dente fettuccine in a rich wild mushroom truffle cream sauce topped with fresh parmesan.",
    price: 14.20,
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281293?auto=format&fit=crop&w=800&q=80",
    isFeatured: true,
  },
  {
    name: "Crispy Golden Wings",
    category: "Fried Chicken",
    description: "Double-fried chicken wings tossed in your choice of spicy buffalo or sweet honey garlic sauce.",
    price: 10.80,
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80",
    isFeatured: true,
  },
  {
    name: "Loaded French Fries",
    category: "French Fries",
    description: "Golden crispy fries smothered in warm cheese sauce, bacon bits and fresh jalapeños.",
    price: 7.50,
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=800&q=80",
    isFeatured: true,
  },
  {
    name: "Artisan Club Sandwich",
    category: "Sandwich",
    description: "Triple-decker toasted sourdough with smoked turkey, crisp bacon, avocado, lettuce and tomato.",
    price: 11.20,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    isFeatured: true,
  },
];

export default async function handler(req: Request, res: Response) {
  try {
    await connectDB();

    const count = await MenuItem.countDocuments();
    if (count === 0) {
      await MenuItem.insertMany(initialMenuItems);
    }

    const { category } = req.query;
    let query: any = {};

    if (category && category !== "All") {
      query.category = category;
    }

    const items = await MenuItem.find(query).sort({ createdAt: -1 }).lean();
    return res.status(200).json({ items });
  } catch (error: any) {
    console.error("Menu API Error:", error);
    return res.status(500).json({ error: "Erreur lors du chargement du menu" });
  }
}
