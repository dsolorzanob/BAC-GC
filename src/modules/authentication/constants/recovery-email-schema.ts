import { z } from "zod";

export const recoveryEmailSchema = z.object({
  email: z.string().email({ message: "El correo electrónico no es válido" }),
});
