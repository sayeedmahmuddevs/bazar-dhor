import Image from 'next/image'
import NavBar from './NavBar';



function Header() {

  const date = new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "long",
  });

    
  return (
    <div className='max-w-7xl mx-auto px-2 w-full mt-2'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-2'>
            <div className='bg-green-400 p-2  rounded-xl flex justify-center items-center w-13 h-13'>
                <Image src="/logo-icon.png" alt="Logo" width={50} height={50} />
            </div>
            <div>
                <h1 className='text-2xl font-bold '>
                    বাজার ধর
                </h1>
                <p>
                    {date}
                </p>
            </div>

        </div>

        <div className='flex gap-3'>
            <button className='hover:bg-gray-200 rounded-lg px-2 py-1 hover:underline hover:decoration-gray-500 cursor-pointer '>সাইন ইন</button>
            <button className='bg-green-500 px-2 py-1 rounded-lg hover:bg-green-600 text-white '>সাইন আপ</button>
        </div>

      </div>
      <NavBar/>
    </div>
  )
}

export default Header
