import Card from "@/component/Card";
import { ProductItem } from "@/ProductType";
import SearchOverlay from "@/component/Overlay";
import MarketStates from "@/component/MarketStates";


export default async function Home() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data: ProductItem[] = await res.json();

  const sortDataUp = data
    .filter((car) => car.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct);
  const sortDataDown = data
    .filter((car) => car.change.dir === "down")
    .sort((a, b) => b.change.pct - a.change.pct);

  const date = new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="mb-5">
      <div className=" bg-white dark:bg-gray-800 rounded-2xl mt-8 p-4 ">
        <span className="bg-green-200 dark:bg-green-600 rounded-xl px-2 py-1 text-green-600 dark:text-green-300">
          {date}
        </span>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <h1 className="text-4xl font-bold mt-3 text-gray-950 dark:text-gray-200">
              আজকের বাজারের দাম এক নজরে
            </h1>
            <p className="text-gray-500 mt-4">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম - বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>
            <button className="bg-green-400 rounded-lg px-2 py-1 text-white mt-10 ">
              সব পন্য দেখুন
            </button>
          </div>
          
        <MarketStates data = {data} />
          
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-2xl font-semibold mb-2">
          {" "}
          <span className="text-red-600">▲</span> আজ দাম বেড়েছে
        </h1>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
          {sortDataUp.slice(0, 6).map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-2xl font-semibold mb-2">
          <span className="text-green-700">▼</span> আজ দাম কমেছে
        </h1>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
          {sortDataDown.slice(0, 6).map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>

      <SearchOverlay searchBar={data} />

      <div className="mt-10">
        <h1 className="text-2xl font-semibold mb-2"> সব পণ্য</h1>
        <p className="mb-2">মোট {data.length} পণ্য দেখানো হচ্ছে</p>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
          {data.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
