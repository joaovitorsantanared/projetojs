import { FieldDescription } from "@/components/ui/field";
import Link from "next/link";

interface AuthLinksProps {
  forgotPasswordHref?: string;
  signUpHref?: string;
  showForgotPassword?: boolean;
  showSignUp?: boolean;
  signUpText?: string;
}

export function AuthLinks({ 
  forgotPasswordHref = "#", 
  signUpHref = "#", 
  showForgotPassword = true, 
  showSignUp = true,
  signUpText = "Não tem uma conta? Cadastre-se",
}: AuthLinksProps) {
  return (
    <>
      {showForgotPassword && (
        <FieldDescription className="text-right text-white">
          <Link href={forgotPasswordHref}>
            <u>Esqueci minha senha</u>
          </Link>
        </FieldDescription>
      )}
      
      {showSignUp && (
        <FieldDescription className="text-center text-white">
          {signUpText.includes("?") ? (
            <>{signUpText.split("?")[0]}? <Link href={signUpHref}>{signUpText.split("?")[1].trim()}</Link></>
          ) : (
            <Link href={signUpHref}>{signUpText}</Link>
          )}
        </FieldDescription>
      )}      
    </>
  );
}