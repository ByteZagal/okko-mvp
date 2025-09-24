import type { Metadata } from "next";
import "@/globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Okko — Camisetas personalizadas Zaragoza",
    template: "%s | Okko",
  },
  description:
    "Tienda de camisetas personalizadas en Zaragoza. Compra online fácil, rápida y con estilo.",
  metadataBase: new URL("https://okko-demo.vercel.app"), // cambia al dominio real
  openGraph: {
    title: "Okko — Camisetas personalizadas Zaragoza",
    description:
      "Tienda de camisetas personalizadas en Zaragoza. Compra online fácil, rápida y con estilo.",
    url: "https://okko-demo.vercel.app",
    siteName: "Okko",
    locale: "es_ES",
    type: "website",
    images: ["/images/og-default.png"], // placeholder
  },
  twitter: {
    card: "summary_large_image",
    title: "Okko — Camisetas personalizadas Zaragoza",
    description:
      "Tienda de camisetas personalizadas en Zaragoza. Compra online fácil, rápida y con estilo.",
    images: ["/images/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="flex min-h-screen flex-col bg-white text-gray-900 antialiased">
        <CartProvider>
          <Header />
          <main className="mx-auto w-full max-w-5xl flex-1 p-6">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
