// Mock temporal de productos (se sustituirá con fetch al backend)
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const mockProducts: Product[] = [
  {
    id: "astro",
    name: "Camiseta Astro Gato",
    description: "Camiseta divertida con estampado de un gato astronauta.",
    price: 18.99,
    image: "/images/astroGato.webp", // 👈 con slash inicial
  },
  {
    id: "lemon",
    name: "Camiseta Lemon Bici",
    description: "Diseño fresco y juvenil con motivos de bici y limón.",
    price: 16.99,
    image: "/images/lemonBici.webp",
  },
  {
    id: "cafe",
    name: "Camiseta Info Café",
    description: "Edición para los amantes del café y la programación.",
    price: 20.99,
    image: "/images/infoCafe.webp",
  },
];
