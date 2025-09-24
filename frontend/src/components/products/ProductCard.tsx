"use client";

import Image from "next/image";
import { Product } from "@/lib/mockProducts";
import AddToCartButton from "@/components/AddToCartButton";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md focus-within:ring-2 focus-within:ring-pink-500">
      <div className="relative h-56 w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-semibold text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
        <p className="mt-2 font-bold text-pink-700">{product.price} €</p>
        <div className="mt-auto pt-3">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
