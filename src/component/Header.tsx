"use client"

import Image from "next/image";
import NavBar from "./NavBar";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

function Header() {
  const date = new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "long",
  });

  const [menuShow, setMenuShow] = useState(false)
  console.log(menuShow)

  return (
    <div className="max-w-7xl mx-auto px-2 w-full pt-2 relative ">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Link href="/">
            <div className="bg-green-400 p-2  rounded-xl flex justify-center items-center w-13 h-13">
              <Image src="/logo-icon.png" alt="Logo" width={50} height={50} />
            </div>
          </Link>
          <div>
            <h1 className="text-2xl font-bold ">বাজার ধর</h1>
            <p>{date}</p>
          </div>
        </div>

        {/* button */}
        <div className="hidden md:block">
          <Button />

        </div>

        {/* mobilemenu */}
        <div 
        onClick={() => setMenuShow(!menuShow)}
        className="md:hidden cursor-pointer">☰</div>
      </div>
      
          <NavBar menuShow = {menuShow} />

    </div>
  );
}

export default Header;
