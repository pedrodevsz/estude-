"use client"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import z from "zod";
import { registerSchema } from "./registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Lock, Mail, User2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RegisterForm() {
  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      repeatPassword: ""
    }
  })

  async function submitRegister(values: z.infer<typeof registerSchema>) {

    console.log(values)
  }

  return (
    <div className="page-center">
      <Card className="card-form">
        <CardHeader>
          <CardTitle>Cadastrar-se</CardTitle>
        </CardHeader>
        <Form {...registerForm}>
          <form onSubmit={registerForm.handleSubmit(submitRegister)}>
            <CardContent className="space-y-4">
              <FormField
                control={registerForm.control}
                name="username"
                render={({ field }) => (
                  <div>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User2Icon className="input-icon" />
                        <Input
                          type="text"
                          placeholder="seu nome de usuário"
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
                control={registerForm.control}
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
                control={registerForm.control}
                name="password"
                render={({ field }) => (
                  <div>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="input-icon" />
                        <Input
                          className="input-icon-padding"
                          placeholder="Sua senha"
                          type="password"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </div>
                )}
              />
              <FormField
                control={registerForm.control}
                name="repeatPassword"
                render={({ field }) => (
                  <div>
                    <FormLabel>Confirme a senha</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="input-icon" />
                        <Input
                          className="input-icon-padding"
                          placeholder="Confirme sua senha"
                          type="repeatPassword"
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
                cadastrar-se
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  )
}
