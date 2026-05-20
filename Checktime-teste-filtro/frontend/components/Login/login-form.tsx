import { Button } from "@/components/ui/button";
import { FieldGroup } from "@/components/ui/field";
import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthHeader } from "@/components/auth/auth-header";
import { AuthFormField } from "@/components/auth/auth-form-field";
import { AuthLinks } from "@/components/auth/auth-links";
import { routes } from "@/lib/routes";
import { loginAction } from "@/app/login/action";

export function LoginForm({ className }: { className?: string }) {
  return(
  <form action={loginAction} className={className}>
  <AuthLayout>
    <FieldGroup>

      <AuthHeader 
        title="LOGIN" 
        description="Use o seu email empresarial de preferência" 
      />

      <AuthFormField
        id="email"
        name="email"
        label="Email"
        type="email"
        placeholder="Digite o seu email"
        required
      />

      <AuthFormField
        id="password"
        name="password"
        label="Senha"
        type="password"
        placeholder="Digite a sua senha"
        required
      />
          <AuthLinks 
            forgotPasswordHref={routes.esqueciSenha}
            showForgotPassword={true}
            showSignUp={false}
          />

          <Button type="submit">ENTRAR</Button>

          <AuthLinks 
            signUpHref={routes.cadastro}
            showForgotPassword={false}
            showSignUp={true}
          />

        </FieldGroup>
      </AuthLayout>
    </form>
  );
}
