import { ProductItem } from "@/ProductType";
import { MarketPrice } from "@/ProductType";

interface priceTableType {
  product: ProductItem | undefined;
}

function PriceTable({ product }: priceTableType) {
  const prices: MarketPrice[] = [...(product?.markets ?? [])];
  
  const price = prices.sort((a, b) => a.min - b.min);

  return (
    <div className="p-4 rounded-2xl bg-white mt-5 my-5">
      <h1 className="text-4xl font-bold">দামের সারসংক্ষেপ</h1>

      <div className="grid grid-cols-3 gap-5 mt-5">

        <div className="bg-gray-100 rounded-2xl p-4">
          <h3 className="text-lg font-semibold text-gray-600">সর্বনিম্ন দাম</h3>
          <span className="text-green-500 text-3xl font-bold">
            {price[0].min} টাকা
          </span>
          <h3 className="text-lg font-semibold text-gray-600">
            সবচেয়ে কম দামের বাজার
          </h3>
        </div>

        
          <div className="bg-gray-100 rounded-2xl p-4">
            <h3 className="text-lg font-semibold text-gray-600">
              সর্বাধিক দাম
            </h3>
            <span className="text-red-500 text-3xl font-bold">
              {price[price.length-1].max} টাকা
            </span>
            <h3 className="text-lg font-semibold text-gray-600">
              সবচেয়ে বেশি দামের বাজার
            </h3>
          </div>

          <div className="bg-gray-100 rounded-2xl p-4">
            <h3 className="text-lg font-semibold text-gray-600">
              গড় দাম
            </h3>
            <span className="text-green-500 text-3xl font-bold">
              {((price[0].max + price[price.length-1].max) / 2).toFixed() } টাকা
            </span>
            <h3 className="text-lg font-semibold text-gray-600">
              প্রতি কেজির হিসাবে
            </h3>
          </div>

      </div>

      <div className="m-2 rounded-2xl">
        <div className="grid grid-cols-5 text-xl font-semibold text-gray-400 border-2 border-gray-400 rounded-t-lg">
            <span className="border-r-3 px-2 py-2">বাজার</span>
            <span className="border-r-3 px-2 py-2">বিভাগ</span>
            <span className="border-r-3 px-2 py-2 flex justify-end">সর্বনিম্ন</span>
            <span className="border-r-3 px-2 py-2 flex justify-end">সর্বাধিক</span>
            <span className="px-2 py-2 flex justify-end">গড়</span>
        </div>
        {price.map((pro, index) => 
           <div key={index} className={`grid grid-cols-5 text-xl font-semibold text-gray-700 border-2 border-gray-700 ${price.length-1 === index ? "rounded-b-lg": ""} ${(index+1)%2 === 0 ? "bg-green-50" : ""} `}>
            <span className="border-r-3 px-2 py-2">{pro.market}</span>
            <span className="border-r-3 px-2 py-2">{pro.division}</span>
            <span className="border-r-3 px-2 py-2 flex justify-end">{pro.min} টাকা</span>
            <span className="border-r-3 px-2 py-2 flex justify-end">{pro.max} টাকা</span>
            <span className="px-2 py-2 flex justify-end">{((pro.max+pro.min)/2).toFixed()} টাকা</span>
        </div>

        )}

      </div>
    </div>
  );
}

export default PriceTable;
