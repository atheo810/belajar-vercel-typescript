import Link from "next/link";
import "tailwindcss";

export default function Navbar() {
  return (
    <nav className="flex flex-row">
      <ul className="no-underline">
        <li className="basis-1/2">
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li className="basis-1/2">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
