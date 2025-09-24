"use client";

import { mockProducts } from "@/lib/mockProducts";
import ProductCard from "./ProductCard";

export default function ProductList() {
  if (mockProducts.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No hay productos disponibles en este momento 🚲🌻
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {mockProducts.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
