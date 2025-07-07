import { z } from "zod";

export const otpSchema = z.object({
  otp: z.string().length(6, { message: "El código debe tener 6 dígitos" }),
}); 