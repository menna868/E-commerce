"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ChangePassSchema, ChangePassSchemaType } from "@/Schema/ChangePassSchema";
import { ChangePasswordApi } from "@/Api/ChangePass.api";
import Link from "next/link";

export default function ChangeUserPass() {
  const router = useRouter();

  const form = useForm<ChangePassSchemaType>({
    defaultValues: {
      currentPassword: "",
      password: "",
      rePassword: "",
    },
    resolver: zodResolver(ChangePassSchema),
  });

  async function handleChangePass(values:ChangePassSchemaType) {
    
    console.log(values);

      try {
       const result = await ChangePasswordApi(
         values.currentPassword,
         values.password,
         values.rePassword
          );
          console.log(result);
          
        if (result.ok) {
      toast.success("You changed your pass successfully!", {
        position: "top-center",
        duration: 3000,
      });
      router.push("/");
    } else {
      toast.error(result.data?.message || "Invalid code", {
                position: "top-center",
                duration: 3000,
              });
    }
}catch (error) {
      toast.error("Server error, please try again later", {
        position: "top-center",
        duration: 3000,
      });
    }
  }
  return (
    <div className="lg:w-[40%] w-[80%] mx-auto my-12 p-8 shadow-xl shadow-emerald-300">
      <div className="text-center text-green-500 font-extrabold my-4 text-3xl">
        <h1 >Change Password</h1>
      </div>

      <Form {...form}>
        <form
          className="flex max-w-md flex-col gap-4 mx-auto"
          onSubmit={form.handleSubmit(handleChangePass)}
        >
          <FormField
            control={form.control}
            name="currentPassword"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>currentPassword:</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Passowrd:</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>rePassword:</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col items-center my-4">
            {" "}
            <Link
              href={`/ForgetPassword`}
              className="text-green-500 hover:underline"
            >
              Forget Password?
            </Link>
            <Button className="m-4 text-center bg-green-500 cursor-pointer">Update</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
