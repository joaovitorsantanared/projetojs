import { Button } from "@/components/ui/button";
import { FieldGroup } from "@/components/ui/field";
import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthHeader } from "@/components/auth/auth-header";
import { AuthFormField } from "@/components/auth/auth-form-field";
import { AuthLinks } from "@/components/auth/auth-links";
import { routes } from "@/lib/routes";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <AuthLayout className={className} reversed {...props}>
      <FieldGroup>
        <AuthHeader 
          title="CADASTRO" 
          description="Crie sua conta empresarial" 
        />
        
        <AuthFormField
          id="name"
          label="Nome"
          type="text"
          placeholder="Digite seu nome completo"
          required
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

        <AuthFormField
          id="confirmPassword"
          label="Confirmar Senha"
          type="password"
          placeholder="Confirme a sua senha"
          required
        />

        <Button type="submit">CADASTRAR</Button>

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