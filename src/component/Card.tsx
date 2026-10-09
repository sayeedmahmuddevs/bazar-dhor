
interface CardType {
  card: {
    id: number;
    nameBn: string;
    image: string;
    change: {
      dir: string;
      pct: number;
    };
    today: number
  };
}

async function Card({ card }: CardType) {
  return (
    <div className="bg-white p-4 rounded-3xl">
      <div className="flex gap-2 mb-5">
        <div className="bg-gray-200 p-1 text-2xl  rounded-xl flex justify-center items-center w-13 h-13">
          {card.image}
        </div>
        <div>
          <h1 className="text-xl font-bold ">বাজার ধর</h1>
          <p>প্রতি কেজি</p>
        </div>
      </div>
      <h4>আজকের দাম</h4>

      <div className="flex justify-between">
        <div>
          <span className="font-semibold text-2xl">{card.today}</span> {" "}
          <span>টাকা</span>
        </div>
        <span className="bg-gray-300 px-2 py-1 rounded-lg">{card.change.pct < 0 ? <span className="text-green-700">▼ {Math.abs(card.change.pct)} % </span> : <span className="text-red-600">▲  {Math.abs(card.change.pct)} % </span>} </span>
      </div>
    </div>
  );
}

export default Card;
