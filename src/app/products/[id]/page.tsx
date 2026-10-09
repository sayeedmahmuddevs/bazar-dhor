import PriceTable from "@/component/ProductsDetailsPage/PriceTable";
import ProgressBar from "@/component/ProductsDetailsPage/ProgressBar";
import { ProductItem } from "@/ProductType";
import Image from "next/image";
import Link from "next/link";

interface paramsTypes {
  params: Promise<{
    id: number;
  }>;
}

async function page({ params }: paramsTypes) {
  const { id } = await params;
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data: ProductItem[] = await res.json();

  const singleProduct = data.find((pro) => String(pro.id) === String(id));

  return (
    <div>
      {/* category list */}
      <div className="flex gap-2 my-5 items-center">
        <Link href={"/"}>
          <span className="hover:underline">হোম</span>
        </Link>
        <span>{">"}</span>

        <Link href={`/categories/${singleProduct?.category}`}>
          <span className="hover:underline">
            {" "}
            {singleProduct?.categoryNameBn}{" "}
          </span>
        </Link>
        <span>{">"}</span>
        <Link href={`/categories/${singleProduct?.category}`}>
          <span className="hover:underline"> {singleProduct?.nameBn}</span>
        </Link>
      </div>

      {/* progressBar */}
      
        <ProgressBar product = {singleProduct} />

        {/* Products Details price */}

        <PriceTable product = {singleProduct}/>
    
    </div>
  );
}

export default page;
