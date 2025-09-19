"use client"
import React from 'react'
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { registerSchema,registerSchemaType } from '@/Schema/register.schema';
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { toast } from "sonner";
import { useRouter } from 'next/navigation';
import { AxiosError } from "axios";

export default function Register() {
  let router = useRouter();
  const form = useForm<registerSchemaType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(registerSchema),
  });

async  function handleRegister(values: registerSchemaType) {
    console.log(values);
 try {
   let res = await axios.post(
     `https://ecommerce.routemisr.com/api/v1/auth/signup`,
     values
   );
   if (res.data.message) {
     toast.success("you registered successfully !", {
       position: "top-center",
       duration: 3000,
     });
     router.push("/login");
   }
 } catch (err) {
   const error = err as AxiosError<{ message: string }>;

   toast.error(error.response?.data?.message || "Something went wrong", {
     position: "top-center",
     duration: 3000,
   });
 }
  

  
  }
  return (
    <>
      <div className="lg:w-[40%] w-[80%] mx-auto my-12 p-8 shadow-xl shadow-emerald-300 ">
        <h1 className="text-center text-3xl text-green-500 font-bold  p-4">
          Registration
        </h1>
        <p className="text-center text-sm text-green-500  my-1 ">
          Kindly fill this form
        </p>
        <Form {...form}>
          <form
            className=" w-full lg:w-[50%] mx-auto text-center"
            onSubmit={form.handleSubmit(handleRegister)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Name:</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
              name="password"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Password:</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rePassword"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Repasspwrd:</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Phone:</FormLabel>
                  <FormControl>
                    <Input type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="m-4 text-center  bg-green-500">
              Register Now
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
