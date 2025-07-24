import { Header } from "@/components/header/Header";
import { RegisterForm } from "@/components/user/register/Register";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <RegisterForm />
      </main>
    </>
  )
}
