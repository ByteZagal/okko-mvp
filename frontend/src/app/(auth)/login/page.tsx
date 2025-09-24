import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login — Okko",
  robots: { index: false },
};

export default function LoginPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Iniciar sesión (Admin)</h1>
      {/* TODO: Formulario de login + JWT */}
    </main>
  );
}
