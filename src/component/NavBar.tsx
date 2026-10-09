import Link from "next/link"

interface categoriesType{
    id: string
    slug : string
    nameBn: string
    icon: string
}

async function NavBar() {
    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/categories')
    const data :categoriesType[] = await res.json() 
    console.log(data)
  return (
    <div className="flex gap-5 mt-4 mb-2">
        {data.map((fruit) => {
           return <Link key={fruit.id} href={`/categories/${fruit.id}`}> <p >{fruit.icon} {" "} {fruit.nameBn}</p></Link>
        })}
      
    </div>
  )
}

export default NavBar
