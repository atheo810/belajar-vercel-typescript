import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Page From Atheo",
};

export default function DashboardPage() {
  return (
    <>
      <h1>testing dari dashboard</h1>
      <Image src="/eris.jpg" alt="Gambar eris" width={800} height={800} />
    </>
  );
}
