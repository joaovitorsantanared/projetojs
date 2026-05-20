"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FieldGroup } from "@/components/ui/field";
import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthHeader } from "@/components/auth/auth-header";
import { AuthFormField } from "@/components/auth/auth-form-field";
import { AuthLinks } from "@/components/auth/auth-links";
import { routes } from "@/lib/routes";
import { ValidarCadastro } from "@/app/cadastro/action";
import Alert from "@mui/material/Alert";

export function SignupForm({ className, ...props }: React.ComponentProps<"div">) {
  const router = useRouter();
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [alert, setAlert] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirm = formData.get("confirmPassword") as string;

    const newErrors: { email?: string; password?: string } = {};

    // Validações
    if (!emailRegex.test(email)) {
      newErrors.email = "Digite um email válido!";
    }

    if (!password) {
      newErrors.password = "A senha é obrigatória";
    } else if (password !== confirm) {
      newErrors.password = "As senhas estão diferentes";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const result = await ValidarCadastro(formData);

      if (result.success) {
        setAlert({ type: "success", text: "Cadastro realizado com sucesso!" });
        setTimeout(() => router.push("/"), 1500);
      } else {
        setAlert({ type: "error", text: result.message });
      }
    } catch {
      setAlert({ type: "error", text: "Erro ao conectar com o servidor." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout className={className} reversed {...props}>
      <FieldGroup>
        <AuthHeader title="CADASTRO" description="Crie sua conta empresarial" />

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">

          <AuthFormField
            id="nome"
            label="Nome"
            type="text"
            placeholder="Digite seu nome completo"
            required
            name="nome"
          />

          <AuthFormField
            id="email"
            label="Email"
            type="email"
            placeholder="Digite o seu email"
            required
            name="email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm -mt-2">{errors.email}</p>
          )}

          <AuthFormField
            id="password"
            label="Senha"
            type="password"
            placeholder="Digite a sua senha"
            required
            name="password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm -mt-2">{errors.password}</p>
          )}

          <AuthFormField
            id="confirmPassword"
            label="Confirmar Senha"
            type="password"
            placeholder="Confirme a sua senha"
            required
            name="confirmPassword"
          />

          <Button type="submit" disabled={loading}>
            {loading ? "Cadastrando..." : "CADASTRE-SE"}
          </Button>

          {alert && (
            <Alert variant="filled" severity={alert.type} style={{ marginTop: 15 }}>
              {alert.text}
            </Alert>
          )}
        </form>

        <AuthLinks
          signUpHref={routes.login}
          showForgotPassword={false}
          showSignUp={true}
          signUpText="Já tem uma conta? Faça login"
        />
      </FieldGroup>
    </AuthLayout>
  );
}