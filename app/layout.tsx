import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VV Signature Candles | Velas artesanales",
  description:
    "Velas artesanales y bouquets florales creados para regalar momentos, elegancia y emoción.",
  openGraph: {
    title: "VV Signature Candles",
    description: "Velas artesanales. Regalos que se convierten en recuerdos.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
