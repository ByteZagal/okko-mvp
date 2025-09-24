"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-pink-100">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" className="text-lg font-extrabold text-pink-700">
          Okko
        </Link>
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link href="/products" className="transition-colors hover:text-pink-700">
              Catálogo
            </Link>
          </li>
          <li>
            <Link href="/cart" className="transition-colors hover:text-pink-700">
              Carrito
            </Link>
          </li>
          <li>
            <Link href="/login" className="transition-colors hover:text-pink-700">
              Admin
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
