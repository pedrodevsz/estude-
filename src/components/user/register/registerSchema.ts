import { z } from "zod";

export const registerSchema = z.object({ // valida registro
  username: z
    .string()
    .min(3, { message: "O nome de usuário deve conter pelo menos 3 caracteres." }),
  email: z
    .email({ message: "E-mail inválido." }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres." }),
  repeatPassword: z
    .string()
    .min(6, { message: "A confirmação de senha deve ter no mínimo 6 caracteres." }),
})
  .refine((data) => data.password === data.repeatPassword, {
    message: "As senhas não coincidem.",
    path: ["repeatPassword"],
  });
