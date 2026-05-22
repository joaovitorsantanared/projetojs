"use client";

import { LoginForm } from "@/components/Login/login-form";
import { Snackbar, Alert } from "@mui/material";
import { useSearchParams } from "next/navigation";

export default function Login() {
  const params = useSearchParams();

  const showError = params.get("error") === "1";

  return (

    
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-15">
      <div className="w-full max-w-[1142px] h-auto md:h-[707px] flex items-center justify-center">

        <Snackbar
          open={showError}
          autoHideDuration={2000}
        >
          <Alert severity="error">
            Email ou senha incorretos!
          </Alert>
        </Snackbar>

        <LoginForm />
      </div>
    </div>
  );
}