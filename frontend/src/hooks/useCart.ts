"use client";

import { useState, useEffect } from "react";
import type { Product } from "@/lib/mockProducts";

export interface CartItem {
  product: Product;
  qty: number;
}

const STORAGE_KEY = "okko:cart:v1";

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  // Cargar desde localStorage al montar
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch {
        console.warn("Carrito corrupto, reiniciando");
        setItems([]);
      }
    }
  }, []);

  // Guardar en localStorage cuando cambie
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  function addItem(product: Product, qty = 1) {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id
            ? { ...i, qty: i.qty + qty }
            : i
        );
      }
      return [...prev, { product, qty }];
    });
  }

  function removeItem(productId: string) {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  }

  function clearCart() {
    setItems([]);
  }

  const total = items.reduce(
    (sum, i) => sum + i.product.price * i.qty,
    0
  );

  return { items, addItem, removeItem, clearCart, total };
}
