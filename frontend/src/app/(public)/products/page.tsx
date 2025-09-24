import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { mockProducts } from "@/lib/mockProducts";
import AddToCartButton from "@/components/AddToCartButton";

export const metadata: Metadata = {
  title: "Catálogo camisetas personalizadas Zaragoza | Okko",
  description:
    "Explora el catálogo de camisetas personalizadas en Zaragoza. Modelos únicos y precios accesibles.",
};

export default function ProductsPage() {
  return (
    <main className="container-5xl py-12">
      <h1 className="text-3xl font-bold mb-8">Catálogo de camisetas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 hover:shadow-md transition flex flex-col"
          >
            <Link href={`/products/${product.id}`} className="block">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600 text-sm mb-2">
                {product.description}
              </p>
              <p className="font-bold text-blue-600">{product.price} €</p>
            </Link>
            <div className="mt-4">
              <AddToCartButton product={product} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
