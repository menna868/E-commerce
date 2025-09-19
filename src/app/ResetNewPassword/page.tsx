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
import { ResetSchema, ResetSchemaType } from "@/Schema/ResetSchema";
import { ResetNewPasswordApi } from "@/Api/SetNewPassword.api";

export default function ResetNewPassword() {
  const router = useRouter();

  const form = useForm<ResetSchemaType>({
    defaultValues: {
      email: "",
      newPassword: "",
    },
    resolver: zodResolver(ResetSchema),
  });

  async function handleReset(values: ResetSchemaType) {
    console.log("Form values:", values); 
    try {
      const result = await ResetNewPasswordApi(
        values.email,
        values.newPassword
      );

      if (result.ok) {
        toast.success("password set successfully!", {
          position: "top-center",
          duration: 3000,
        });
        router.push("/login");
      } else {
        toast.error(result.data?.message || "Invalid code", {
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
        SET New Password
      </h1>

      <Form {...form}>
        <form
          className="w-full lg:w-[50%] mx-auto text-center"
          onSubmit={form.handleSubmit(handleReset)}
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
            name="newPassword"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>New Password:</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col items-center my-4">
            <Button className="m-4 text-center bg-green-500">
              Update Password
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
