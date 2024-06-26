import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Header/navbar";
import { CartProvider } from "@/contexts/CartContext"; // Ensure this path is correct
import Footer from "@/components/Footer";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS Teste Prático",
  description: "Teste Prático de um catálogo de produtos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} text-slate-700`}>
        <CartProvider>
          <div className="w-full mx-auto">
            <Navbar />
            {children}
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}