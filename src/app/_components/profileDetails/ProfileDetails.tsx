"use server";

import { GetUsersApi } from "@/Api/GetAllUser.api";
import getMyToken from "@/Utilities/getMyToken";
import { Button } from "@/components/ui/button";
import { Label, TextInput } from "flowbite-react";
import Link from "next/link";
import { redirect } from "next/navigation";

function getUserIdFromToken(token: string): string | null {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.id || null;
  } catch {
    return null;
  }
}

export default async function ProfileDetails() {
  const token = await getMyToken();

  if (!token) {
    redirect("/login");
  }

  const userId = getUserIdFromToken(token);

  if (!userId) {
    redirect("/login");
  }

    const user = await GetUsersApi(userId);
    console.log(user);
    

  return (
    <div className="lg:w-[40%] w-[80%] mx-auto my-12 p-8 shadow-xl shadow-emerald-300">
      <div className="text-center text-green-500 font-extrabold my-4 text-4xl">
        <h1>My Profile</h1>
      </div>
      <form className="flex max-w-md flex-col gap-4 mx-auto">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name">Your Name:</Label>
          </div>
          <TextInput id="name" type="text" value={user.data.name} disabled />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email">Your Email:</Label>
          </div>
          <TextInput id="email" type="email" value={user.data.email} disabled />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="phone">Your Phone:</Label>
          </div>
          <TextInput id="phone" type="text" value={user.data.phone} disabled />
        </div>
        <div className="flex justify-between">
          <Link href="/UpdateData">
            {" "}
            <Button className="bg-green-500 cursor-pointer">Update Data</Button>
          </Link>{" "}
          <Link href="/ChangePassword">
            {" "}
            <Button className="bg-green-500 cursor-pointer">
              Change Password
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
