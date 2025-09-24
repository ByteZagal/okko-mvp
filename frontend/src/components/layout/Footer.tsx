export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 text-center py-4 text-sm text-gray-600">
      <p>© {new Date().getFullYear()} Okko. Camisetas personalizadas en Zaragoza.</p>
      <p className="mt-1 text-xs">
        Diseñado con 🌻 y un poquito de 🚲 para gente libre
      </p>
    </footer>
  );
}
