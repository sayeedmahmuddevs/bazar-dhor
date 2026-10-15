import MarqueeText from "react-marquee-text";
import { ProductItem } from "@/ProductType";
import Link from "next/link";

async function Marquee() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data: ProductItem[] = await res.json();
  console.log(data);

  return (
    <div>
      <MarqueeText>
        <div className="flex gap-10 md:mt-35 mt-20 ">
          {data.map((card) => (

            <Link key={card.id} href={`/products/${card.id}`}>
              <p>
                <span className="px-2 py-1 rounded-lg hover:underline">
                  {card.categoryIcon} {card.nameBn}{" "} {card.today} টাকা/কেজি
                  {card.change.pct < 0 ? (
                    <span className="text-green-700">
                      ▼ {Math.abs(card.change.pct)} %{" "}
                    </span>
                  ) : (
                    <span className="text-red-600">
                      ▲ {Math.abs(card.change.pct)} %{" "}
                    </span>
                  )}{" "}
                </span>
              </p>
            </Link>
            
          ))}
        </div>
      </MarqueeText>
    </div>
  );
}

export default Marquee;
