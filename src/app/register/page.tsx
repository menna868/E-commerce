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
 try{ let res = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values);
   if (res.data.message) {
     toast.success("you registered successfully !", { position: "top-center", duration: 3000 })
     router.push('/login')
    }
  }
 catch (err) {
   toast.error(err.response.data.message,{position:"top-center", duration:3000})
   
  }
  

  
  }
  return (
    
    <>
      <div className='w-[40%] mx-auto my-12 lg:shadow-2xl'>
        <h1 className='text-center text-3xl text-green-500 font-bold  p-4'>Registration</h1>
        <p className='text-center text-sm text-green-500  my-1 '>Kindly fill this form</p>
      <Form {...form}>
  <form className=' w-full lg:w-[50%] mx-auto text-center' onSubmit={form.handleSubmit(handleRegister)}><FormField
    control={form.control}
    name="name"
    render={({field}) => (
      <FormItem>

        <FormLabel>Name:</FormLabel>
        <FormControl>
          <Input {...field} />
        </FormControl>
        <FormMessage  />
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="email"
    render={({field}) => (
      <FormItem>

        <FormLabel>Email:</FormLabel>
        <FormControl>
          <Input type='email' {...field} />
        </FormControl>
        <FormMessage  />
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="password"
    render={({field}) => (
      <FormItem>

        <FormLabel>Password:</FormLabel>
        <FormControl>
          <Input type='password' {...field} />
        </FormControl>
        <FormMessage  />
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="rePassword"
    render={({field}) => (
      <FormItem>

        <FormLabel>Repasspwrd:</FormLabel>
        <FormControl>
          <Input type='password' {...field} />
        </FormControl>
        <FormMessage  />
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="phone"
    render={({field}) => (
      <FormItem>

        <FormLabel>Phone:</FormLabel>
        <FormControl>
          <Input type='tel' {...field} />
        </FormControl>
        <FormMessage  />
      </FormItem>
    )}
            />
          <Button className='m-4 text-center  bg-green-500'>Register Now</Button></form>
</Form></div></>)
}
