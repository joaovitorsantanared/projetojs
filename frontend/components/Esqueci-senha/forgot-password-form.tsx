import { Button } from "@/components/ui/button";
import { FieldGroup } from "@/components/ui/field";
import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthHeader } from "@/components/auth/auth-header";
import { AuthFormField } from "@/components/auth/auth-form-field";
import { AuthLinks } from "@/components/auth/auth-links";
import { routes } from "@/lib/routes";

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <AuthLayout className={className} {...props}>
      <FieldGroup>
        <AuthHeader 
          title="ESQUECEU A SENHA?" 
          description="Informe seu email e enviaremos um link para recuperação de sua senha caso tenha um email cadastrado" 
        />
        
        <AuthFormField
          id="email"
          name="email"   // ← add this line
          label=""
          type="email"
          placeholder="..."
          required
          />

        <Button type="submit">ENVIAR</Button>
        
        <AuthLinks 
          signUpHref={routes.login}
          showForgotPassword={false}
          showSignUp={true}
          signUpText="Voltar ao login"
        />
      </FieldGroup>
    </AuthLayout>
  );
}