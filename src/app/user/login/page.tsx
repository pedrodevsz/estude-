import { Header } from "@/components/header/Header";
import { ThemeSwitcher } from "@/components/themeSwitcher/ThemeSwitcher";
import { LoginForm } from "@/components/user/login/Login";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <ThemeSwitcher />
        <LoginForm />
      </main>
    </>
  )
}
