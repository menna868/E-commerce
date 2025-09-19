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
import { UpdateDateSchema, UpdateSchemaType } from "@/Schema/UpdateDataSchema";
import { UpdateUsersApi } from "@/Api/UpdateUserData.Api";

export default function UpdateUser() {
    const router = useRouter();
    
      const form = useForm<UpdateSchemaType>({
        defaultValues: {
          name: "",
          email: "",
          phone: "",
        },
        resolver: zodResolver(UpdateDateSchema),
      });
    
      async function handleUpdatingData() {
          const result = await UpdateUsersApi();
          console.log(result);
          

        if (result.message=="success") {
          toast.success("You logged in successfully!", {
            position: "top-center",
            duration: 3000,
          });
          router.push("/");
        } else {
          toast.error("Invalid credentials", {
            position: "top-center",
            duration: 3000,
          });
        }
      }
  return (
    <div className="lg:w-[40%] w-[80%] mx-auto my-12 p-8 shadow-xl shadow-emerald-300">
      <h1 className="text-center text-3xl text-green-500 font-bold p-4">
        Update Profile
      </h1>

      <Form {...form}>
        <form
          className="flex max-w-md flex-col gap-4 mx-auto"
          onSubmit={form.handleSubmit(handleUpdatingData)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Name:</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone:</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="m-4 text-center bg-green-500 cursor-pointer">
            Update
          </Button>
        </form>
      </Form>
    </div>
  );
}
