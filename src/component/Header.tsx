"use client";

import Image from "next/image";
import NavBar from "./NavBar";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import { Clock } from "./clock";

function Header() {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-7xl px-2 pt-2">
      <div className="flex items-center justify-between">
        {/* Logo and title */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-green-400 p-2">
              <Image
                src="/logo-icon.png"
                alt="Logo"
                width={50}
                height={50}
                priority
              />
            </div>
          </Link>

          <div>
            <h1 className="text-2xl font-bold">বাজার ধর</h1>
            <p className="text-sm text-gray-500"><Clock/></p>
          </div>
        </div>

        {/* Desktop button */}
        <div className="hidden md:block">
          <Button />
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuShow((prev) => !prev)}
          className="rounded-lg p-2 text-2xl transition hover:bg-gray-100 md:hidden"
          aria-label={menuShow ? "Close menu" : "Open menu"}
          aria-expanded={menuShow}
        >
          {menuShow ? "✕" : "☰"}
        </button>
      </div>
       <NavBar menuShow={menuShow} />
    

    </div>
  );
}

export default Header;
