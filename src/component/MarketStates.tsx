"use client"

import { authClient } from '@/lib/auth-client'
import Image from "next/image";
import { ProductItem } from "@/ProductType";


interface marketStateType {
    data: ProductItem[]
}


function MarketStates({data} : marketStateType) {
    const session = authClient.useSession()
    const user = session.data?.user

      const division = data[0]?.markets
  const uniqueUsers = [
  ...new Map(division.map(user => [user.division, user])).values()
];

  return (
    <div>

        {user?
        <div className="flex gap-2 justify-center">
            <div className="bg-gray-200 dark:bg-gray-400 px-5 py-3 rounded-2xl flex flex-col items-center flex-wrap">
              <h3>পণ্য</h3>
              <span className="font-bold"><span className="text-4xl font-bold text-green-500">{data.length}</span> টি</span>
              <h3>নিত্যদিনের পণ্য </h3>
            </div>
            <div className="bg-gray-200 dark:bg-gray-400 px-5 py-3 rounded-2xl flex flex-col items-center">
              <h3>বাজার</h3>
              <span className="font-bold"><span className="text-4xl font-bold">{data[0].markets.length}</span>টি</span>
              <h3>বাজার অন্তর্ভূক্ত </h3>
            </div>
            <div className="bg-gray-200 dark:bg-gray-400 px-5 py-3 rounded-2xl flex flex-col items-center">
              <h3>বিভাগ</h3>
              <span className="font-bold"><span className="text-4xl font-bold"> {uniqueUsers.length}
                </span> টি</span>
              <h3>বিভাগের তথ্য </h3>
            </div>
          </div> :

            <div className="flex justify-center items-center">
            <Image
              src="/bazar-hero.png"
              alt="Logo"
              width={300}
              height={300}
              className="w-fill"
            />
          </div>
    
    
    }
            

    </div>

      
  )
}

export default MarketStates
