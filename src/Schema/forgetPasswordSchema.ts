import * as z from "zod"
export const ForgetSchema = z.object({
 
  email: z.email().nonempty("this field can not be empty"),

})
    ;

   export type ForgetSchemaType = z.infer<typeof ForgetSchema>;