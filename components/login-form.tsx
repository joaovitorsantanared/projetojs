import { Button } from "@/components/ui/button";
import { FieldGroup } from "@/components/ui/field";
import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthHeader } from "@/components/auth/auth-header";
import { AuthFormField } from "@/components/auth/auth-form-field";
import { AuthLinks } from "@/components/auth/auth-links";
import { routes } from "@/lib/routes";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <AuthLayout className={className} {...props}>
      <FieldGroup>
        <AuthHeader 
          title="LOGIN" 
          description="Use o seu email empresarial de preferência" 
        />
        
        <AuthFormField
          id="email"
          label="Email"
          type="email"
          placeholder="Digite o seu email"
          required
        />
        
        <AuthFormField
          id="password"
          label="Senha"
          type="password"
          placeholder="Digite a sua senha"
          required
        />

        {/* 🔹 Mostra apenas o link "Esqueci minha senha" */}
        <AuthLinks 
          forgotPasswordHref={routes.esqueciSenha}
          showForgotPassword={true}
          showSignUp={false}
        />

        {/* 🔹 Botão ENTRAR agora vem logo abaixo */}
        <Button type="submit">ENTRAR</Button>

        {/* 🔹 Mostra apenas "Não tem uma conta? Cadastre-se" */}
        <AuthLinks 
          signUpHref={routes.cadastro}
          showForgotPassword={false}
          showSignUp={true}
        />
      </FieldGroup>
    </AuthLayout>
  );
}
