import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Pedidos — Okko",
  robots: { index: false },
};

export default function AdminOrdersPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Administrar pedidos</h1>
      {/* TODO: CRUD pedidos con API */}
    </main>
  );
}
