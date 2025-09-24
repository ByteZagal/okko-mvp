import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Okko — Camisetas personalizadas Zaragoza",
  description:
    "Compra camisetas personalizadas en Zaragoza con Okko. Catálogo variado, entrega rápida y diseño único.",
};

export default function HomePage() {
  return (
    <main className="container-5xl py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Bienvenido a <span className="text-blue-600">Okko</span>
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Tienda de camisetas personalizadas en Zaragoza. Explora nuestro
        catálogo con diseños únicos.
      </p>
      <Link
        href="/products"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
      >
        Ver catálogo
      </Link>
    </main>
  );
}
