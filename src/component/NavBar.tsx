import { useEffect, useState } from "react";
import Button from "./Button";
import NavLinks from "./NavLinks";

interface categoriesType {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

type NavBarType = {
  menuShow: boolean
}

function NavBar({menuShow} : NavBarType) {
  const [data, setData] = useState<categoriesType[]>([]);

  useEffect(() => {
    async function getCategories() {
      const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/categories"
      );

      const categories: categoriesType[] = await res.json();
      setData(categories);
    }

    getCategories();
  }, []);

  return (
  
      <div className={`absolute md:static top-10 right-0 md:top-0 md:right-0 md:left-0 px-10 rounded-lg flex md:flex-row flex-col gap-4 md:gap-5 mt-4 mb-2 md:dark:bg-gray-900 dark:bg-gray-700 py-5 md:py-0 transform md:transform-none  ${menuShow ? "translate-x-0": "translate-x-60 md:translate-x-0" }`}>
        {data.map((fruit) => {
          return <NavLinks key={fruit.id} product={fruit} />;
        })}
        <div className="md:hidden">
        <Button />

        </div>
      </div>
    
  );
}

export default NavBar;
