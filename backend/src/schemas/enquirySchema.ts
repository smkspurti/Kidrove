import { z } from 'zod';

export const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format")
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
