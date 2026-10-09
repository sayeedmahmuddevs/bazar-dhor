import Card from "@/component/Card";
import { ProductItem } from "@/ProductType";
import Link from "next/link";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function page({ params }: PageProps) {
  const { slug } = await params;
  console.log(slug);

  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
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

      <div className="flex justify-between bg-white items-center mb-5 px-5 rounded-xl py-2">
          <div className="flex gap-2 items-center mb-5 rounded-xl">
        <div className="p-2  rounded-xl flex justify-center items-center w-20 h-20 text-4xl">
          {filterCategories[0].image}
        </div>
        <div>
          <h1 className="text-2xl font-bold ">
            {filterCategories[0].categoryNameBn}
          </h1>
          <p>{filterCategories.length} টি পণ্যের আজকের দাম ও পরিবর্তন</p>
        </div>
      </div>

      <div>klfsjdal</div>

      </div>
      
      <div className="grid grid-cols-3 gap-10">
        {filterCategories.map((pro) => (
          <Card key={pro.id} card={pro} />
        ))}
      </div>
    </div>
  );
}

export default page;
