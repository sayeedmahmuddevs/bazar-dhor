"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";

function page() {
  const session = authClient.useSession();
  const user = session.data?.user;

  return (
    <div className="border border-green-500 rounded-2xl  mt-5 pb-5">
      <div className="text-center bg-green-600 mb-10 text-2xl font-bold rounded-2xl">
        তোমার প্রোফাইল
      </div>

      <div className="grid md:grid-cols-2  px-5 gap-5 ">
      <div className=" flex justify-center items-center">
        <div className="w-90 h-90 rounded-full overflow-hidden">
            <Image
          src={user?.image}
          width={200}
          height={200}
          className="w-full h-full"
        />
        </div>
        
      </div>

      <div className="flex-col flex gap-5 border-l pl-5">
        <div className="flex gap-2 font-bold">
          <label>নাম :</label>
          <h1>{user?.name}</h1>
        </div>

         <div className="flex gap-2">
          <label>ইমেইল :</label>
          <h1>{user?.email}</h1>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default page;
