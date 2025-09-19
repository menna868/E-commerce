import * as z from "zod"
export const VerifytSchema = z.object({
 
resetCode: z.string().min(6, "Code must be 6 digits"),

})
    ;

   export type VerifySchemaType = z.infer<typeof VerifytSchema>;