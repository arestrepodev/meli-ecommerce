import type { Metadata } from "next";
import "../styles/global.css";
import Search from '@/components/search';

export const metadata: Metadata = {
  title: "Mercado Libre - Arnold Restrepo",
  description: "Prueba técnica para Mercado Libre",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
