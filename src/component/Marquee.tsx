import MarqueeText from "react-marquee-text"


interface MarqueeType{
    id:number
    nameBn: string
    categoryIcon: string
    change:{
      pct:number
    }
}

async function Marquee() {
    const res = await fetch ("https://api.abcz.workers.dev/api/bazardor/products")
    const data : MarqueeType[] = await res.json()
    console.log(data)

  return (
    <MarqueeText>
        <div className="flex gap-10 mt-2 ">
      {data.map(card =>(
        <p key={card.id}><span className="px-2 py-1 rounded-lg">
          {card.categoryIcon} {" "} {card.nameBn} {" "}
          {card.change.pct < 0 ? <span className="text-green-700">▼ {Math.abs(card.change.pct)} % </span> : <span className="text-red-600">▲  {Math.abs(card.change.pct)} % </span>} </span> </p>
      ))}
    </div>

    </MarqueeText>
    
  )
}

export default Marquee
