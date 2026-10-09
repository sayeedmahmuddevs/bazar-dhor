import Card from "@/component/Card";
import Image from "next/image";

interface DataType{
  id:number
  nameBn: string
  image:string
  change : {
    dir:string
    pct:number
  }
  today:number
}


 export default async function Home() {

     const res = await fetch ("https://api.abcz.workers.dev/api/bazardor/products");
    const data : DataType[] = await res.json();

    const sortDataUp = data.filter(car => car.change.dir === "up").sort((a,b) => b.change.pct - a.change.pct )
    const sortDataDown = data.filter(car => car.change.dir === "down").sort((a,b) => b.change.pct - a.change.pct)
    

  const date = new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "long",
  });
  return (
    <div>
      <div className=" bg-white rounded-2xl mt-8 p-4 ">
        <span className="bg-green-200 rounded-xl px-2 py-1 text-green-600">
          {date}
        </span>
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold mt-3 text-gray-950">
              আজকের বাজারের দাম এক নজরে
            </h1>
            <p className="text-gray-500 mt-4">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম - বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>
            <button className="bg-green-400 rounded-lg px-2 py-1 text-white mt-10 ">সব পন্য দেখুন</button>
          </div>
          <div className="flex justify-center items-center">
            <Image 
            
            src="/bazar-hero.png" alt="Logo" width={300} height={300} 
            className="w-fill"
            />
          </div>
          
        </div>
      </div>


    <div className="mt-10">
      <h1 className="text-2xl font-semibold mb-2"> <span className="text-red-600">▲</span> আজ দাম বেড়েছে</h1>
      

      <div className="grid grid-cols-3 gap-5">
        {sortDataUp.slice(0,6).map(card => 
          <Card key={card.id} card = {card}/>  
        )}

      </div>
    </div>

    <div className="mt-10">
      <h1 className="text-2xl font-semibold mb-2"><span className="text-green-700">▼</span> আজ দাম কমেছে</h1>
      

      <div className="grid grid-cols-3 gap-5">
        {sortDataDown.slice(0,6).map(card => 
          <Card key={card.id} card = {card}/>  
        )}

      </div>
    </div>

    <div className="mt-10">
      <h1 className="text-2xl font-semibold mb-2"> সব পণ্য</h1>
      <p className="mb-2">মোট {data.length} পণ্য দেখানো হচ্ছে</p>
      

      <div className="grid grid-cols-3 gap-5">
        {data.map(card => 
          <Card key={card.id} card = {card}/>  
        )}

      </div>
    </div>


    </div>
  );
}
