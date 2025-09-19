import * as z from "zod"
export const UpdateDateSchema = z.object({
  name: z
    .string()
    .nonempty("this field can not be empty")
    .min(2, "min length is 2")
    .max(10, "max length is 10"),
  email: z.email().nonempty("this field can not be empty"),

    phone: z.string().regex(/^01[0251][0-9]{8}$/),
})

    ;

   export type UpdateSchemaType = z.infer<typeof UpdateDateSchema>;