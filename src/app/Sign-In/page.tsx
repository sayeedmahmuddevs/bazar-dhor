"use client"

import { authClient } from "@/lib/auth-client"
import { error } from "console"
import { redirect } from "next/navigation"

function page() {
    
  const onSubmit = async( e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const user = Object.fromEntries(formData.entries()) as {name: string; email: string; password: string}
  
        
        const {data, error} = await authClient.signIn.email({
          ...user,
          callbackURL: "/"
        })
        if(data){
          console.log(data)
          redirect("/")
        }

  
    }
  

  return (
    <div className="flex justify-center items-center py-5 max-h-100 h-full">
        <form onSubmit={onSubmit}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend text-2xl text-center">Login</legend>

        <label className="label">Email</label>
        <input type="email" name="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" name="password" className="input" placeholder="Password" />

        <button type="submit" className="btn btn-neutral mt-4">Login</button>
      </fieldset>
    </form>
    </div>
    
  );
}

export default page;
