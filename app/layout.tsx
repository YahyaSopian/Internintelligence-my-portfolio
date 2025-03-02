import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yahya Sopian | Portfolio",
  description: "Portfolio web developer Yahya Sopian",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="w-svw overflow-x-hidden bg-gray-100 text-gray-900 m-0 p-0 ">
        <header className="mb-10">
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
