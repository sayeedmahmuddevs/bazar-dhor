"use client";

import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import NavLinks from "./NavLinks";
import { FaSearch } from "react-icons/fa";
import { searchContext } from "@/context/contextApi";

interface categoriesType {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

type NavBarType = {
  menuShow: boolean;
};

function NavBar({ menuShow }: NavBarType) {
  const [data, setData] = useState<categoriesType[]>([]);

  const { searchString, setSearchString } = useContext(searchContext);

  useEffect(() => {
    async function getCategories() {
      try {
        const res = await fetch(
          "https://openapi.programming-hero.com/api/bazardor/categories"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch categories");
        }

        const categories: categoriesType[] = await res.json();
        setData(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    getCategories();
  }, []);

  return (
    <div
      className={`absolute md:static top-10 right-0 md:top-0 md:right-0 md:left-0 px-10 rounded-lg flex md:flex-row flex-col gap-4 md:gap-5 mt-4 mb-2 md:dark:bg-gray-900 dark:bg-gray-700 bg-white py-5 md:py-0 transform md:transform-none transition-transform duration-200 ${
        menuShow
          ? "translate-x-0"
          : "translate-x-60 md:translate-x-0"
      }`}
    >
      {data.map((fruit) => (
        <NavLinks key={fruit.id} product={fruit} />
      ))}

      <div className="hidden md:block relative md:ml-50">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <FaSearch />
        </span>

        <input
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          placeholder="Search products..."
          className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-gray-500"
        />

        <button 
        onClick={() => setSearchString("")}
        className="absolute top-2 right-4 cursor-pointer text-gray-500">
          ✖
        </button>
      </div>

      <div className="md:hidden">
        <Button />
      </div>
    </div>
  );
}

export default NavBar;