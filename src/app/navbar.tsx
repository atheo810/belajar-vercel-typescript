import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative">
      <span className="flex">
        <h1 className="text-rose-700 font-work text-lg font-bold leading-normal z-10 pl-24 pt-[46px] pr-[398px]">
          Atheo Dev
        </h1>

        <ul className="flex flex-row pt-[46px]">
          <li className="basis-1/2 items-center">
            <Link className="no-underline" href="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="basis-1/2 items-center">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </span>
    </nav>
  );
}
