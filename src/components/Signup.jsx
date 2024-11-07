import React from 'react'
import { Button } from './ui/button'
import {Form,FormControl,FormDescription,
    FormField,FormItem,FormLabel,FormMessage} from "@/components/ui/form"
import { Input } from './ui/input'
import {zodResolver} from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { z } from "zod";

const formSchema = z.object({
    email: z.string().email(),
    username: z.string().min(3).max(50),
    password: z.string().min(8),
  });

const onSubmit = (values) => {
    console.log(values);
  };
  
const Signup = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues: {
            email: "",
            username: "",
            password: "",
          },
    })
  return (
   <Form {...form}>
    <form>
    <FormField
    name="username"
    render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input placeholder="shadcn" {...field} />
          </FormControl>
          <FormDescription>
            This is your public display name.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
    </form>
   </Form>
  )
}

export default Signup