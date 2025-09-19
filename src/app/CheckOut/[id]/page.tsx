"use client";
import React, { useContext, useState } from "react";
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
import { useParams, useRouter } from "next/navigation";
import { checkoutSchema, checkoutSchemaType } from "@/Schema/Checkout";
import { OnlineCheckOut } from "@/CheckOutActions/OnlineCheckout.Action";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { CashCheckOut } from "@/CheckOutActions/CashCheckout.actions";
import { CartContext } from "@/context/Cartcontextx";
import clearCartItem from "@/CartActions/clearCartItem.action";
export default function CheckOut() {
  const {numberOfCartItems, setnumberOfCartItems } = useContext(CartContext)!;
  let { id }: { id: string } = useParams();
  const router = useRouter();
  const form = useForm<checkoutSchemaType>({
    defaultValues: {
      details: "",
      phone: "",
      city: "",
    },
    resolver: zodResolver(checkoutSchema),
  });
  const [payment, setPayment] = useState("cash");
  async function handleCheckOut(values: checkoutSchemaType) {
    if (payment === "credit") {
      let res = await OnlineCheckOut(id, "http://localhost:3000/", values);
      if (res.status === "success") {
          await clearCartItem();
                setnumberOfCartItems(0);

        window.location.href = res.session.url;
      }
    } else if (payment === "cash") {
      let res = await CashCheckOut(id, values);
      if (res.status === "success") {
        router.push("/Orders");
      
                  await clearCartItem();

        setnumberOfCartItems(0);
        form.reset();
      }
    }
  }

  return (
    <div className="w-[40%] mx-auto my-12 lg:shadow-2xl shadow-xl p-8 rounded-sm">
      <h1 className="text-center text-3xl text-green-500 font-bold p-4">
        CkeckOut Now
      </h1>

      <Form {...form}>
        <form
          className="w-full lg:w-[50%] mx-auto text-center"
          onSubmit={form.handleSubmit(handleCheckOut)}
        >
          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Details:</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
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
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City:</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <RadioGroup
            defaultValue="cash"
            className="flex items-center justify-between my-4"
            onValueChange={(value) => setPayment(value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cash" id="cash" />
              <Label htmlFor="cash">cash</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="credit" id="credit" />
              <Label htmlFor="credit">credit</Label>
            </div>
          </RadioGroup>
          <Button className="m-4 text-center bg-green-500">Pay Now</Button>
        </form>
      </Form>
    </div>
  );
}

