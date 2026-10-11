
import SearchOverlay from "@/component/Overlay";
import Sorting from "@/component/Sorting";
import { ProductItem } from "@/ProductType";
import Link from "next/link";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;

};

async function Page({ params}: PageProps) {
  const { slug } = await params;
  console.log(slug);
  

  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data: ProductItem[] = await res.json();

  const filterCategories: ProductItem[] = data.filter(
    (pro) => pro.category === slug,
  );

  

  console.log(filterCategories);

  return (
    <div className="mt-5">
      <div className="flex gap-2 my-5 items-center">
        <Link href={"/"}>
          <span className="hover:underline">হোম</span>
        </Link>
        <span>{">"}</span>

        <Link href={`/categories/${filterCategories[0].category}`}>
          <span className="hover:underline">
            {" "}
            {filterCategories[0].categoryNameBn}{" "}
          </span>
        </Link>
      </div>
      
      <Sorting filterCategories = {filterCategories}/>
      
      <SearchOverlay searchBar={filterCategories} />
    </div>
  );
}

export default Page;
