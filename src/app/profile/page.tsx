"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

function ProfilePage() {
  const session = authClient.useSession();
  const user = session.data?.user;

  const [updateShow, setUpdateShow] = useState<boolean>(false);

  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name")?.toString().trim();
    const image = formData.get("image")?.toString().trim();

    const newUser: { name?: string; image?: string } = {};

    if (name) {
      newUser.name = name;
    }

    if (image) {
      newUser.image = image;
    }

    // The profile will not be updated if no field is filled in.
    
    if (Object.keys(newUser).length === 0) {
      toast.error("Please change at least one field.");
      return;
    }

    try {
      const result = await authClient.updateUser(newUser);

      if (result.error) {
        toast.error("Failed to update profile.");
        return;
      }

      toast.success("Profile updated successfully.");
      setUpdateShow(false);
    } catch {
      toast.error("There was a problem updating the profile");
    }
  };

  return (
    <div>
      <div className="border border-green-500 rounded-2xl  mt-5 pb-5">
        <div className="text-center bg-green-600 mb-10 text-2xl font-bold rounded-t-2xl">
          আমার প্রোফাইল
        </div>

        <div className="grid md:grid-cols-2  px-5 gap-5 ">
          <div className=" flex justify-center items-center">
            <div className="w-90 h-90 rounded-full overflow-hidden">
              <Image
                src={
                  user?.image ||
                  "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
                }
                alt="Profile Image"
                width={200}
                height={200}
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="border-l pl-5 flex justify-between flex-col items-start">
            {updateShow ? (
              <div>
                <form onSubmit={handleUpdateProfile}>
                  <fieldset className="fieldset p-4">
                    <label className="label">নতুন নাম</label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={user?.name}
                      className="input"
                      placeholder="নতুন নাম লিখুন"
                    />
                    <label className="label">ছবি</label>
                    <input
                      type="text"
                      name="image"
                      defaultValue={user?.image ?? ""}
                      className="input"
                      placeholder="ছবির লিংক দিন"
                    />

                    <div className="flex items-end">
                      <button type="submit" className="btn btn-neutral mt-4">
                        আপডেট করুন{" "}
                      </button>
                    </div>
                  </fieldset>
                </form>
              </div>
            ) : (
              <div className="flex-col flex gap-5">
                <div className="flex gap-2 font-bold">
                  <label>নাম :</label>
                  <h1>{user?.name}</h1>
                </div>

                <div className="flex gap-2">
                  <label>ইমেইল :</label>
                  <h1>{user?.email}</h1>
                </div>
              </div>
            )}
            <button
              onClick={() => {
                setUpdateShow(!updateShow);
              }}
              className="btn"
            >
              {updateShow ? "প্রোফাইল" : "ইডিট প্রোফাইল"}
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-5">
        <Link href={"/"}>
          <button className="cursor-pointer hover:underline">
            <span className=" inline-block transform rotate-180 ">➜ </span> হোম
            পেইজে ফিরে যান
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProfilePage;
