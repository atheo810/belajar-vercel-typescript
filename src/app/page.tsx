import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="absolute top-0, z-10">
      <Image
        width={800}
        height={500}
        src="/image_banner.png"
        alt="Gambar Laptop"
        className="w-full h-[777px]"
      />
    </div>
  );
}
