import ProductList from "@/components/products/ProductList";

export default function ProductsPage() {
  return (
    <section className="space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Catálogo de camisetas
        </h1>
        <p className="mt-2 text-gray-600">
          Diseños únicos, hechos con cariño y listos para rodar contigo.
        </p>
      </header>
      <ProductList />
    </section>
  );
}
