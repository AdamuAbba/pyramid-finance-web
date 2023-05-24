import * as z from "zod";

export const LOGIN_FORM_VALIDATION_SCHEMA = z
  .object({
    firstName: z
      .string({
        required_error: "Name is required",
      })
      .refine((str) => str.trim()),
    lastName: z
      .string({
        required_error: "Name is required",
      })
      .refine((str) => str.trim()),
    //since no country code was specified i'd assume that a valid phone number would would be longer that 11 characters
    emailOrPhone: z.union([
      z.string().email({ message: "email is invalid" }),
      z
        .string()
        .min(11, { message: "invalid phone number" })
        .refine((str) => str.trim()),
    ]),
    date: z.union([z.date(), z.string()]).optional(),
    password: z.string().min(4),
    confirmPassword: z
      .string()
      .min(4)
      .refine((str) => str.trim()),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type LoginFormType = z.infer<typeof LOGIN_FORM_VALIDATION_SCHEMA>;
