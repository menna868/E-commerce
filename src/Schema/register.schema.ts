import * as z from "zod"
export const registerSchema = z
  .object({
    name: z
      .string()
      .nonempty("this field can not be empty")
      .min(2, "min length is 2")
      .max(10, "max length is 10"),
    email: z.email().nonempty("this field can not be empty"),
    password: z
      .string()
      .nonempty("this field can not be empty")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
        "Password must be 8-20 chars, include uppercase, lowercase, number, and special character"
      ),
    rePassword: z.string().nonempty("this field can not be empty"),
    phone: z.string().regex(/^01[0251][0-9]{8}$/),
  })
  .refine((object) => object.password === object.rePassword, {
    path: ["rePassword"],
    error: "password & rePassword are not matched",
  });
    ;

   export type registerSchemaType=z.infer<typeof registerSchema>