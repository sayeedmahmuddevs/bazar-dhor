"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";



function signInPage() {
  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Login failed!");
      return;
    }
    if (data) {
      toast("Successful log in");
      window.location.replace("/");
    }
  };

  const handleGoogleLogIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });

  };
  const handleGithubLogin = async () => {
    await authClient.signIn.social({
      provider: "github"
    })
  }

  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <div className="flex flex-col gap-5 justify-center items-center py-5 w-100 mt-10 bg-base-200 rounded-2xl">
        <form onSubmit={onSubmit}>
          <fieldset className="fieldset  border-base-300 rounded-box w-xs border p-4">
            <div className="flex justify-center items-center w-full">
              <div className="text-center">
                <legend className="font-bold text-2xl">
                  লগ ইন করুন
                </legend>
                <h5 className="text-gray-400">
                  বিনা খরচে সাইন ইন করে সব বিস্তারিত দাম দেখুন
                </h5>
              </div>
            </div>

            <label className="label">ইমেইল</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="ইমেইল লিখুন"
            />

            <label className="label">পাসওয়ার্ড</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="পাসওয়ার্ড দিন"
            />

            <button type="submit" className="btn btn-neutral mt-4">
              লগইন করুন{" "}
            </button>
          </fieldset>
        </form>

        <h5 className="w-full flex gap-2 items-center">
          <hr className="border w-full border-gray-400"></hr>
          অথবা
          <hr className="border w-full border-gray-400"></hr>
        </h5>

        <div className="flex gap-4">
          <button onClick={handleGoogleLogIn} className="border rounded-md px-2 py-1 flex gap-2 items-center hover:bg-gray-600">
             <FaGoogle/>{" "} লগইন করুন গুগল দিয়ে
          </button>

          <button onClick={handleGithubLogin} className="border rounded-md px-2 py-1 flex gap-2 items-center hover:bg-gray-600 ">
             <FaGithub/>{" "} লগইন করুন গিটহাব দিয়ে
          </button>
        </div>

        <div className="flex gap-2">
          <p>অ্যাকাউন্ট আছে?</p>
          <div>
            <Link href={"/sign-in"}>
              <button className="hover:underline text-green-400">
                সাইন ইন করুন
              </button>
            </Link>
          </div>
        </div>

        <div></div>
      </div>
    <Link href={"/"}>
      <button className="cursor-pointer">
        
        <span className=" inline-block transform rotate-180">➜ </span> {" "}হোম পেইজে ফিরে যান
      </button>
    </Link>
      
    </div>
  );
}

export default signInPage;
