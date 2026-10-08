import MarqueeText from "react-marquee-text"


interface MarqueeType{
    id:number
    nameBn: string
    categoryIcon: string
}

async function Marquee() {
    const res = await fetch ("https://api.abcz.workers.dev/api/bazardor/products")
    const data : MarqueeType[] = await res.json()
    console.log(data)

  return (
    <MarqueeText>
        <div className="flex gap-10 mt-2 ">
      {data.map(cat =>(
        <p key={cat.id}>{cat.categoryIcon} {" "} {cat.nameBn}</p>
      ))}
    </div>

    </MarqueeText>
    
  )
}

export default Marquee
