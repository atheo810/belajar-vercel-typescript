import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Page From Atheo",
};

export default function DashboardPage() {
  return (
    <div className="banner-about min-h-[700px] flex justify-center items-center relative">
      <div className="banner-img absolute min-h-[700px] bg-banner-image bg-cover w-[100%] bg-fixed bg-no-repeat brightness-50 h-[100%]"></div>
      <span className="banner-text z-20">
        <h1>
          <span className="text-hijau font-sans text-[59px] text-white">
            Disini Kita menulis judul
          </span>
        </h1>
        <p>text</p>
      </span>
    </div>
  );
}
