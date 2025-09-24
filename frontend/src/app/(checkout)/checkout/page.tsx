import type { Metadata } from "next";
import CheckoutClient from "@/components/CheckoutClient";

export const metadata: Metadata = {
  title: "Checkout Demo — Okko",
  robots: { index: false },
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}
