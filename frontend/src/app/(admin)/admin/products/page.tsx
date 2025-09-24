import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Productos — Okko",
  robots: { index: false },
};

export default function AdminProductsPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Administrar productos</h1>
      {/* TODO: CRUD productos con API */}
    </main>
  );
}
