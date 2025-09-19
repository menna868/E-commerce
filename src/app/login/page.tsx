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
import { loginSchema, loginSchemaType } from "./../../Schema/login.schema";
import { signIn } from "next-auth/react";
import Link from "next/link";
export default function Login() {
  const router = useRouter();

  const form = useForm<loginSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  async function handleLogin(values: loginSchemaType) {
    const result = await signIn("credentials", {
      redirect: false, 
      email: values.email,
      password: values.password,
    });

    if (result?.ok) {
      toast.success("You logged in successfully!", {
        position: "top-center",
        duration: 3000,
      });
      router.push("/");
    } else {
      toast.error(result?.error || "Invalid credentials", {
        position: "top-center",
        duration: 3000,
      });
    }
  }

  return (
    <div className="lg:w-[40%] w-[80%] mx-auto my-12 p-8 shadow-xl shadow-emerald-300">
      <h1 className="text-center text-3xl text-green-500 font-bold p-4">
        Login
      </h1>
      <p className="text-center text-sm text-green-500 my-1">
        Kindly fill this form
      </p>
      <Form {...form}>
        <form
          className="w-full lg:w-[50%] mx-auto text-center"
          onSubmit={form.handleSubmit(handleLogin)}
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

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password:</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
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
            <Button className="m-4 text-center bg-green-500">Signin</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
