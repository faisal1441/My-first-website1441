import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="absolute top-10 w-full">
      <nav className="p-6 bg-yellow-400 text-white h-2 flex flex-col md:flex-row md:justify-start
       md:items-center font-bold space-y-2 md:space-y-0 md:space-x-4 m-0">
        <Link href="/About">About</Link>
        <Link href="/Contact">Contact</Link>
        <Link href="/Program">Program</Link>
        <Link href="/Services">Services</Link>
        <Link href="/Car">Cars</Link>
      </nav>
    </header>
  );
}
