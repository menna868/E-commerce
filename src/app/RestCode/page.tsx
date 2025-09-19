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
import { VerifyREsetApi } from "@/Api/VerifyResetCode.api";
import { VerifySchemaType, VerifytSchema } from "@/Schema/VerifySchema";


export default function RestCode() {
  const router = useRouter();

  const form = useForm<VerifySchemaType>({
    defaultValues: { resetCode: "" },
    resolver: zodResolver(VerifytSchema),
  });

  async function handleVerify(values: VerifySchemaType) {
    try {
      const result = await VerifyREsetApi(values.resetCode);

      if (result.ok) {
        toast.success("Code verified successfully!", {
          position: "top-center",
          duration: 3000,
        });
        router.push("/ResetNewPassword"); 
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
        Verify Reset Code
      </h1>
      <p className="text-center text-sm text-green-500 my-1">
        Enter the reset code sent to your email
      </p>
      <Form {...form}>
        <form
          className="w-full lg:w-[50%] mx-auto text-center"
          onSubmit={form.handleSubmit(handleVerify)}
        >
          <FormField
            control={form.control}
            name="resetCode"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Reset Code:</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col items-center my-4">
            <Button className="m-4 text-center bg-green-500">
              Verify Code
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
