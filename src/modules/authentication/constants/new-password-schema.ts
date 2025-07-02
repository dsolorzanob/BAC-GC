import { z } from "zod";

export const newPasswordSchema = z.object({
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});

