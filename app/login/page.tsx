import { LoginForm } from "@/components/login-form"


export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-15">
      <div className="w-full max-w-sm md:max-w-2xl">
        <LoginForm />
      </div>
    </div>
  );
}
