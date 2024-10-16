import type { Metadata } from "next";
import { Inter } from 'next/font/google'

import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ELT Assessment",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-200 min-h-screen flex flex-col md:flex-row lg:flex-row">
        <Sidebar />

        <div className=" flex-col flex-grow flex w-full">
          <Navbar className="hidden md:block " />

          <main className="flex-grow p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
