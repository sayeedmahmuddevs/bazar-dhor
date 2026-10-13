"use client"

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Button() {
  const session = authClient.useSession();
  


  const user = session.data?.user;

  const [profileShow, setProfileShow] = useState(false)

  const handlSignOut = () => {
      authClient.signOut()
  }

  return (
    <div>
      {user ? (
        <div className="relative">
          <div className="flex gap-2 items-center">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 rounded-full ring-2 ring-offset-2">
                <Image
                  alt="Tailwind-CSS-Avatar-component"
                  src={user.image}
                  width={20}
                  height={20}
                  className="w-6 h-6"
                />
              </div>
            </div>

            <button 
            onClick={()=> setProfileShow(!profileShow)}
            className="text-sm flex justify-center items-center">
              ▼
            </button>
          </div>
          <div className={`
            ${profileShow? "block":"hidden"}
            absolute top-10 left-0 z-[110] w-40 overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-xl shadow-black/10`}>
            
            {/* Settings */}
            <Link href={"/profile"}>
                <button 
                onClick={()=> setProfileShow(!profileShow)}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-gray-950">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path
                  d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.8 3.12-.09-.02a1.7 1.7 0 0 0-1.7.49l-.06.07h-3.6l-.06-.07a1.7 1.7 0 0 0-1.7-.49l-.09.02-1.8-3.12.06-.06A1.7 1.7 0 0 0 9.3 15l-.08-.03v-3.94L9.3 11a1.7 1.7 0 0 0-.34-1.88l-.06-.06 1.8-3.12.09.02a1.7 1.7 0 0 0 1.7-.49l.06-.07h3.6l.06.07a1.7 1.7 0 0 0 1.7.49l.09-.02 1.8 3.12-.06.06A1.7 1.7 0 0 0 19.4 11l.08.03v3.94z"
                  transform="translate(-1 -1) scale(1.05)"
                />
              </svg>
              Settings
            </button>

            </Link>
            

            {/* Divider */}
            <div className="my-1 border-t border-gray-100" />

            {/* Sign Out */}
            <button 
            onClick={handlSignOut}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-red-500 transition-all duration-200 hover:bg-red-50 hover:text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <path d="M16 17l5-5-5-5" />
                <path d="M21 12H9" />
              </svg>
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        
        <div className="flex gap-5 ">

          <Link href={"/sign-in"}>
              <button className="hover:bg-gray-200 hover:dark:bg-gray-500 rounded-lg px-2 py-1 hover:underline hover:decoration-gray-500 cursor-pointer ">
            সাইন ইন
            </button>
        </Link>
          <Link href={"/sign-up"}>
              <button className="bg-green-500 px-2 py-1 rounded-lg hover:bg-green-600 text-white ">
            সাইন আপ
          </button>
          </Link>
          
        </div>
      )}
    </div>
  );
}

export default Button;
