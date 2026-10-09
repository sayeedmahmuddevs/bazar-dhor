import Card from "@/component/Card";
import { ProductItem } from "@/ProductType";

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
  const filterCategories = data.filter((pro) => pro.category === slug);

  console.log(filterCategories);

  return (
    <div className="h-110 mt-5">
      <h1>{slug}</h1>
      <div className="grid grid-cols-3 gap-10">
        {filterCategories.map((pro) => (
          <Card key={pro.id} card={pro} />
        ))}
      </div>
    </div>
  );
}

export default page;
