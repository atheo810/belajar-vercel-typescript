import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import "tailwindcss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atheo Portofolio",
  description: "Atheo Portofolio Using NextJS TS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
