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
    <div className="flex gap-5 mt-4">
        {data.map((fruit) => {
           return <p key={fruit.id}>{fruit.icon} {" "} {fruit.nameBn}</p>
        })}
      
    </div>
  )
}

export default NavBar
