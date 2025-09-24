"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartClient() {
  const { items, addItem, removeItem, clearCart, total } = useCart();

  if (items.length === 0) {
    return (
      <main className="container-5xl py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Tu carrito está vacío</h1>
        <Link href="/products" className="text-blue-600 underline">
          Volver al catálogo
        </Link>
      </main>
    );
  }

  return (
    <main className="container-5xl py-12">
      <h1 className="text-3xl font-bold mb-6">Tu carrito</h1>
      <ul className="space-y-4 mb-6">
        {items.map((item) => (
          <li
            key={item.product.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <p className="font-semibold">{item.product.name}</p>
              <p className="text-sm text-gray-600">
                {item.qty} × {item.product.price} €
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <button
                onClick={() => addItem(item.product, -1)}
                className="px-2 py-1 border rounded hover:bg-gray-100"
                aria-label={`Disminuir cantidad de ${item.product.name}`}
              >
                -
              </button>
              <span>{item.qty}</span>
              <button
                onClick={() => addItem(item.product, 1)}
                className="px-2 py-1 border rounded hover:bg-gray-100"
                aria-label={`Aumentar cantidad de ${item.product.name}`}
              >
                +
              </button>
              <button
                onClick={() => removeItem(item.product.id)}
                className="text-red-600 hover:underline ml-4"
              >
                Quitar
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center font-bold text-lg mb-6">
        <span>Total:</span>
        <span>{total.toFixed(2)} €</span>
      </div>

      <div className="flex gap-4">
        <button
          onClick={clearCart}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Vaciar carrito
        </button>
        <Link
          href="/checkout"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Ir al checkout
        </Link>
      </div>
    </main>
  );
}
