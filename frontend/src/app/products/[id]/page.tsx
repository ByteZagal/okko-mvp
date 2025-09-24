import type { Metadata } from "next";
import Image from "next/image";
import { mockProducts } from "@/lib/mockProducts";
import AddToCartButton from "@/components/AddToCartButton";

interface ProductPageProps {
  params: { id: string };
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = mockProducts.find((p) => p.id === params.id);
  return {
    title: product
      ? `${product.name} — Camisetas Zaragoza | Okko`
      : "Producto no encontrado | Okko",
    description: product
      ? product.description
      : "Este producto no está disponible.",
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = mockProducts.find((p) => p.id === params.id);

  if (!product) {
    return (
      <main className="container-5xl py-12">
        <h1 className="text-2xl font-bold">Producto no encontrado</h1>
        <p className="text-gray-600">Vuelve al catálogo para ver más opciones.</p>
      </main>
    );
  }

  return (
    <main className="container-5xl py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-blue-600 mb-6">
            {product.price} €
          </p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </main>
  );
}
