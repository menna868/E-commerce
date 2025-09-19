import * as z from "zod"
export const checkoutSchema = z.object({
 
  details: z.string().nonempty("this field can not be empty"),
    phone: z.string().regex(/^01[0251][0-9]{8}$/),
    city: z.string().nonempty("this field can not be empty"),
})
    ;

   export type checkoutSchemaType = z.infer<typeof checkoutSchema>;