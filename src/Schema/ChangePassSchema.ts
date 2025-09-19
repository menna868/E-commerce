import * as z from "zod";

export const ChangePassSchema = z
  .object({
    currentPassword: z
      .string()
      .nonempty("Password is required")
      .min(6, "Password must be at least 6 characters"),
    password: z
      .string()
      .nonempty("Password is required")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
        "Password must be 8-20 chars, include uppercase, lowercase, number, and special character"
      ),
    rePassword: z
      .string()
      .nonempty("Password is required")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
        "Password must be 8-20 chars, include uppercase, lowercase, number, and special character"
      ),
  })
  .refine((object) => object.password === object.rePassword, {
    path: ["rePassword"],
    error: "password & rePassword are not matched",
  });

export type ChangePassSchemaType = z.infer<typeof ChangePassSchema>;
