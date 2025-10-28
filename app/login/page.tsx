import { LoginForm } from "@/components/login-form"


export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-15">
     <div className="w-full max-w-[1142px] h-auto md:h-[707px] flex items-center justify-center">
        <LoginForm /> {/* adiciona o formulario*/ }
      </div>
    </div>
  );
}


// antes era  <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-15">
// e <div className="w-full max-w-sm md:max-w-2xl"></div>

//agora eu coloquei essa atual pq ela parece centralizar no meu pc certinho