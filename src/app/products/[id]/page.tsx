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
  const priceChange =
    singleProduct?.yesterday !== undefined && singleProduct?.today !== undefined
      ? singleProduct.yesterday - singleProduct.today
      : 0;

  const priceIcon = singleProduct?.change?.pct === undefined ? (
              <span>তথ্য নেই</span>
            ) : singleProduct.change.pct === 0 ? (
              <span className="text-blue-700">
                ▬ {singleProduct.change.pct}%
              </span>
            ) : singleProduct.change.pct < 0 ? (
              <span className="text-green-700">
                ▼ {Math.abs(singleProduct.change.pct)}%
              </span>
            ) : (
              <span className="text-red-600">
                ▲ {Math.abs(singleProduct.change.pct)}%
              </span>
            )

  return (
    <div>
      {/* category list */}
      <div className="flex gap-2 my-5">
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
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Link href="/">
            <div className="bg-green-400 p-2  rounded-xl flex justify-center items-center w-13 h-13">
              {singleProduct?.image}
            </div>
          </Link>
          <div>
            <h1 className="text-2xl font-bold ">{singleProduct?.nameBn}</h1>
            <p>প্রতি কেজি {singleProduct?.nameBn}</p>
            <p>
              গতকালের তুলনায় আজ দাম{" "}
              {singleProduct?.change.dir === "up" ? (
                <span className="font-bold">{"বেড়েছে"}</span>
              ) : (
                <span className="font-bold">{"কমেছে"}</span>
              )}{" "}
              {priceChange}
            </p>
          </div>
        </div>

        <div>
          <h3>আজকের দাম </h3>
          <span>{singleProduct?.today}</span>
          <h3>টাকা/কেজি </h3>
          <span className="bg-gray-300 px-2 py-1 rounded-lg">
            {priceIcon}
          </span>
        </div>
      </div>
    </div>
  );
}

export default page;
