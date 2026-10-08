import Image from "next/image";


export default function Home() {
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
    </div>
  );
}
