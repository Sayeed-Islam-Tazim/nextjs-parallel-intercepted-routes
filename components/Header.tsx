"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "../lib/utils";

const Header = () => {
  const pathName = usePathname();
  return (
    <div className="flex items-center justify-between gap-5 bg-gray-800 text-white">
      <header className="p-4 text-2xl font-bold">
        <Link href="/" className="text-2xl font-medium">
          Taz Library App
        </Link>
      </header>
      <ul className="flex justify-center items-center gap-8">
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link
            href="/books"
            className={cn("", pathName === "/library" ? "" : "")}
          >
            Books
          </Link>
        </li>
        <li>
          <Link href="/authors">Authors</Link>
        </li>
        <li>
          <Link href="/genres">Genres</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
