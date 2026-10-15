"use client";

import { useState } from "react";
import { ProductItem } from "@/ProductType";
import Card from "@/component/Card";
import { ChevronDown } from "lucide-react";

type SortValue = "default" | "price_asc" | "price_desc";

interface SortType {
  filterCategories: ProductItem[];
}

function Sorting({ filterCategories }: SortType) {
  const [sort, setSort] = useState<SortValue>("default");

  const sortedProducts = [...filterCategories].sort((a, b) => {
    if (sort === "price_asc") {
      return a.today - b.today;
    }

    if (sort === "price_desc") {
      return b.today - a.today;
    }

    return 0;
  });

  const category = sortedProducts[0];

  if (!category) {
    return <p>কোনো পণ্য পাওয়া যায়নি।</p>;
  }

  return (
    <div>
      <div className="mb-5 flex items-center justify-between rounded-xl bg-white px-5 py-3 dark:bg-gray-800">
        <div className="flex items-center gap-2">
          <div className="flex h-20 w-20 items-center justify-center rounded-xl text-4xl">
            {category.image}
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              {category.categoryNameBn}
            </h1>

            <p>
              {sortedProducts.length} টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>

        <div>
          <label
            htmlFor="sort"
            className="mb-1 block text-md font-bold text-gray-500 "
          >
            সাজান
          </label>

          <select
            id="sort"
            value={sort}
            onChange={(e) =>
              setSort(e.target.value as SortValue)
            }
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-600 outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-100"
          >
            <option value="default">ডিফল্ট <span className="text-2xl"><ChevronDown/></span></option>
            <option value="price_asc">কম থেকে বেশি দাম</option>
            <option value="price_desc">বেশি থেকে কম দাম</option>
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((pro) => (
          <Card key={pro.id} card={pro} />
        ))}
      </div>
    </div>
  );
}

export default Sorting;