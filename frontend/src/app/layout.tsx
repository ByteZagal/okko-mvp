import type { Metadata } from "next";
import Link from "next/link";
import "@/globals.css";
import { CartProvider } from "@/context/CartContext"; // 👈 importa el provider

export const metadata: Metadata = {
  title: {
    default: "Okko — Camisetas personalizadas Zaragoza",
    template: "%s | Okko",
  },
  description:
    "Tienda de camisetas personalizadas en Zaragoza. Compra online fácil, rápida y con estilo.",
  openGraph: {
    title: "Okko — Camisetas personalizadas Zaragoza",
    description:
      "Tienda de camisetas personalizadas en Zaragoza. Compra online fácil, rápida y con estilo.",
    url: "http://localhost:3000",
    siteName: "Okko",
    locale: "es_ES",
    type: "website",
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
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        {/* 👇 Envolvemos todo en el provider */}
        <CartProvider>
          <header className="border-b bg-red-200">
            <nav className="mx-auto max-w-5xl flex justify-between items-center p-4">
              <Link href="/" className="text-lg font-bold text-blue-600">
                Okko
              </Link>
              <ul className="flex gap-6 text-sm font-medium">
                <li>
                  <Link href="/products" className="hover:text-blue-600">
                    Catálogo
                  </Link>
                </li>
                <li>
                  <Link href="/cart" className="hover:text-blue-600">
                    Carrito
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="hover:text-blue-600">
                    Admin
                  </Link>
                </li>
              </ul>
            </nav>
          </header>

          <main className="flex-1 mx-auto w-full max-w-5xl p-6">
            {children}
          </main>

          <footer className="border-t bg-gray-50 text-center py-4 text-sm text-gray-600">
            © {new Date().getFullYear()} Okko. Camisetas personalizadas en Zaragoza.
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
