import type { Metadata } from "next";
import "../styles/global.css";

export const metadata: Metadata = {
  title: "Mercado Libre - Arnold Restrepo",
  description: "Prueba técnica para Mercado Libre",
  icons: {
    icon: 'https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/favicon.svg',
  },
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
