import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "../public/style/global.css";

const rubik = Rubik({ subsets: ["latin"], weight: ["500", "700"] });

export const metadata: Metadata = {
  title: "Busca CEP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
