import Image from "next/image";

async function Card() {

  return (
    <div className="bg-white p-4 rounded-3xl">
      <div className="flex gap-2">
        <div className="bg-green-400 p-2  rounded-xl flex justify-center items-center w-13 h-13">
          <Image src="/logo-icon.png" alt="Logo" width={50} height={50} />
        </div>
        <div>
          <h1 className="text-2xl font-bold ">বাজার ধর</h1>
          <p>প্রতি কেজি</p>
        </div>
      </div>
      <h4>আজকের দাম</h4>

      <div className="flex justify-between">
        <div>
          <span>54</span>
          <span>টাকা</span>
        </div>
        <span className="bg-gray-300 px-2 py-1">2.9%</span>
      </div>
    </div>
  );
}

export default Card;
