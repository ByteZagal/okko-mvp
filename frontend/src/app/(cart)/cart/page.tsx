import type { Metadata } from "next";
import CartClient from "@/components/CartClient";

export const metadata: Metadata = {
  title: "Carrito — Okko",
  robots: { index: false },
};

export default function CartPage() {
  return <CartClient />;
}
