"use client"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock } from "lucide-react";
import { loginSchema } from "./loginSchema";
import { validateEmail } from "@/lib/validationEmail/validationEmail";

export function LoginForm() {

  const loginForm = useForm<z.infer<typeof loginSchema>>({ // hookform que valida schema e define valores
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  async function submitLogin(values: z.infer<typeof loginSchema>) { // gerenciando o estado e a chamada para a rota
    const emailValidation = await validateEmail(values.email)

    if (!emailValidation.isValidFormat || !emailValidation.isMXFound || !emailValidation.isSMTPValid) {
      loginForm.setError("email", { // validando email
        type: "manual",
        message: "Email inválido, tente novamente"
      })
      console.error("Email inválido")
      return
    }
    console.log(values);
  }

  return (
    <div className="page-center">
      <Card className="card-form">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <Form {...loginForm}>
          <form onSubmit={loginForm.handleSubmit(submitLogin)}>
            <CardContent className="space-y-4">
              <FormField
                control={loginForm.control}
                name="email"
                render={({ field }) => (
                  <div>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="input-icon" />
                        <Input
                          type="email"
                          placeholder="seu@email.com"
                          className="input-icon-padding"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </div>
                )}
              />

              <FormField
                control={loginForm.control}
                name="password"
                render={({ field }) => (
                  <div>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="input-icon" />
                        <Input
                          type="password"
                          placeholder="••••••••"
                          className="input-icon-padding"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </div>
                )}
              />
            </CardContent>
            <CardFooter className="mt-6">
              <Button type="submit" className="btn-full">
                Entrar
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
