import * as z from "zod";

export const ResetSchema = z.object({
  email: z.string().nonempty("Email is required"),
  newPassword: z
    .string()
    .nonempty("Password is required")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
      "Password must be 8-20 chars, include uppercase, lowercase, number, and special character"
    ),
});

export type ResetSchemaType = z.infer<typeof ResetSchema>;
