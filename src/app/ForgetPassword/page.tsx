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
import { ForgetSchema, ForgetSchemaType } from "@/Schema/forgetPasswordSchema";
import { ForgetPasswordApi } from "@/Api/ForgetPassword.api";
export default function ForgetPassword() {
  const router = useRouter();

  const form = useForm<ForgetSchemaType>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(ForgetSchema),
  });

  async function handleForget(values: ForgetSchemaType) {
    try {
      const result = await ForgetPasswordApi(values.email);

      if (result?.ok) {
        toast.success("Your email sent successfully!", {
          position: "top-center",
          duration: 3000,
        });
        router.push("/RestCode");
      } else {
        toast.error(result.data?.message || "Invalid email", {
          position: "top-center",
          duration: 3000,
        });
      }
    } catch (error) {
      toast.error("Server error, please try again later", {
        position: "top-center",
        duration: 3000,
      });
    }
}


  return (
    <div className="w-[40%] mx-auto my-12 lg:shadow-2xl shadow-xl p-8 rounded-sm">
      <h1 className="text-center text-3xl text-green-500 font-bold p-4">
        Forget Password
      </h1>
      <p className="text-center text-sm text-green-500 my-1">
        Kindly fill this form
      </p>
      <Form {...form}>
        <form
          className="w-full lg:w-[50%] mx-auto text-center"
          onSubmit={form.handleSubmit(handleForget)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Email:</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

         
          <div className="flex flex-col items-center my-4">
      
          
            <Button className="m-4 text-center bg-green-500">Send Your Email</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
