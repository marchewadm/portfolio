import { z } from "zod";

export const contactSchema = z.object({
  city: z.string().max(0).optional(),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  subject: z
    .string()
    .min(8, { message: "The subject must be at least 8 characters long" })
    .max(64, { message: "The subject can be at most 64 characters long" }),
  message: z
    .string()
    .min(32, { message: "The message must be at least 32 characters long" })
    .max(1024, { message: "The message can be at most 1024 characters long" }),
});
