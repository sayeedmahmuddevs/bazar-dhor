import { ProductItem } from "@/ProductType";
import Link from "next/link";
interface CardType {
  card: ProductItem
}

 function Card({ card }: CardType) {
  return (
    <Link href={`/products/${card.id}`}>
        <div className="bg-white dark:bg-gray-700 p-4 rounded-3xl">
      <div className="flex gap-2 mb-5">
        <div className="bg-gray-200 dark:bg-gray-400 p-1 text-2xl  rounded-xl flex justify-center items-center w-13 h-13">
          {card.image}
        </div>
        <div>
          <h1 className="text-xl font-bold ">{card.nameBn}</h1>
          <p>প্রতি কেজি</p>
        </div>
      </div>
      <h4>আজকের দাম</h4>

      <div className="flex justify-between">
        <div>
          <span className="font-semibold text-2xl">{card.today}</span> {" "}
          <span>টাকা</span>
        </div>
        <span className="bg-gray-300 dark:bg-gray-500 px-2 py-1 rounded-lg">{card.change.pct===0? <span className="text-blue-700"> ▬ {card.change.pct} % </span>: card.change.pct < 0 ? <span className="text-green-700">▼ {Math.abs(card.change.pct)} % </span> : <span className="text-red-600 dark:text-red-500">▲  {Math.abs(card.change.pct)} % </span>} </span>
      </div>
    </div>
    </Link>
    
  );
}

export default Card;
