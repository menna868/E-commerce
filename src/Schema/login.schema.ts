import * as z from "zod"
export const loginSchema = z.object({
  email: z.email().nonempty("this field can not be empty"),
  password: z
    .string()
    .nonempty("this field can not be empty")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
      "Password must be 8-20 chars, include uppercase, lowercase, number, and special character"
    ),
});
    ;

   export type loginSchemaType = z.infer<typeof loginSchema>;