"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface navLinksType {
  product: {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
  };
}

function NavLinks({ product }: navLinksType) {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div
      className={`${pathName === `/categories/${product.slug}` ? "bg-green-400" : ""} px-2 py-1 rounded-lg`}
    >
      <Link key={product.id} href={`/categories/${product.id}`}>
        {" "}
        <p>
          {product.icon} {product.nameBn}
        </p>
      </Link>
    </div>
  );
}

export default NavLinks;
