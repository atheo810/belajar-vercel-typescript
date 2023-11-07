import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative pt-[46px]">
      <span className="flex flex-row">
        <h1 className="text-rose-700 font-work text-lg font-bold leading-normal z-10 pl-24 pr-[398px]">
          Atheo Dev
        </h1>

        <ul className="flex flex-row">
          <li className="pr-[37px]">
            <Link className="" href="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="pr-[37px]">
            <Link href="/about">About</Link>
          </li>
          <li className="pr-[37px]">
            <Link href="/about">Our Service</Link>
          </li>
          <li className="pr-[37px]">
            <Link href="/about">Our Project</Link>
          </li>
          <li className="">
            <Link href="/about">Contact Us</Link>
          </li>
        </ul>
      </span>
    </nav>
  );
}
