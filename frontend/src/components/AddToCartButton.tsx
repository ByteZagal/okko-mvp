"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/mockProducts";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500); // feedback breve
  }

  return (
    <div className="flex flex-col items-start gap-2">
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Añadir al carrito
      </button>
      <span
        role="status"
        aria-live="polite"
        className={`text-sm text-green-600 transition-opacity ${
          added ? "opacity-100" : "opacity-0"
        }`}
      >
        ¡Añadido!
      </span>
    </div>
  );
}
