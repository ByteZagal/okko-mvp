"use client";

import { useState } from "react";
import { z, ZodIssue } from "zod";
import { useCart } from "@/context/CartContext"; // 👈 usa el contexto nuevo
import Link from "next/link";

const CheckoutSchema = z.object({
  name: z.string().min(2, "Nombre demasiado corto"),
  email: z.string().email("Email no válido"),
  address: z.string().min(5, "Dirección demasiado corta"),
});

export default function CheckoutClient() {
  const { items, total, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmed, setConfirmed] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = CheckoutSchema.safeParse(form);

    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.issues.forEach((issue: ZodIssue) => {
        const field = issue.path[0];
        if (typeof field === "string") {
          newErrors[field] = issue.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    clearCart();
    setConfirmed(true);
  }

  if (confirmed) {
    return (
      <main className="container-5xl py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">¡Pedido confirmado!</h1>
        <p className="text-gray-600 mb-6">
          Gracias por tu compra (demo). Recibirás un correo de confirmación.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
        >
          Volver al inicio
        </Link>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="container-5xl py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">
          No tienes productos en el carrito
        </h1>
        <Link href="/products" className="text-blue-600 underline">
          Ver catálogo
        </Link>
      </main>
    );
  }

  return (
    <main className="container-5xl py-12">
      <h1 className="text-3xl font-bold mb-6">Checkout (Demo)</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block font-semibold mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="address" className="block font-semibold mb-1">
            Dirección
          </label>
          <input
            id="address"
            name="address"
            type="text"
            value={form.address}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          {errors.address && (
            <p className="text-red-600 text-sm">{errors.address}</p>
          )}
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
        >
          Confirmar pedido
        </button>
      </form>

      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-2">Resumen</h2>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.product.id} className="flex items-center gap-3">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-12 h-12 rounded border"
              />
              <span>
                {item.qty} × {item.product.name} — {item.product.price} €
              </span>
            </li>
          ))}
        </ul>

        <p className="font-bold mt-4">Total: {total.toFixed(2)} €</p>
      </div>
    </main>
  );
}
