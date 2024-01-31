import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-2  font-bold tracking-wide uppercase">
        <li>
          <Link href="/" className="font-bold font-orbitron text-lg py-2 px-3 ">
            BAKTI Games
          </Link>
        </li>
        <li className="ml-auto">
          <Link
            href="/reviews"
            className="border-2 py-2 px-3 outline-3 hover:text-white"
          >
            Reviews
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="border-2 py-2 px-3 outline-3 hover:text-white"
            prefetch={false}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
