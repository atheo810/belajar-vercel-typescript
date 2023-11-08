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
          <span className="text-hijau font-Inter text-[59px] text-white font-bold leading-normal">
            Bali Quality Dev is your Solution
          </span>
        </h1>
        <p className="text-white font-work text-[27px] font-normal text-center">
          We have a special team that handles your project. consisting of Team
          Development, Team Designer, and Team Content Writer.
        </p>
      </span>
    </div>
  );
}
