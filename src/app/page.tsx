import Link from "next/link";
export default function Home() {
  return (
    <>
      <Link href="/dashboard">Dashboard</Link>
      <hr />
      <Link href="/about">About</Link>
    </>
  );
}
