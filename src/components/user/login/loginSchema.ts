import z from "zod";

export const loginSchema = z.object({ // valida o login com email e senha
  email: z.email({ message: "E-mail inválido" }),
  password: z.string().min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
});
