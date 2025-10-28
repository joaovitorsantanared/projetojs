import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Vector } from "@/components/ui/Vector";

interface AuthLayoutProps {
  children: React.ReactNode;
  className?: string;
  reversed?: boolean;
}

export function AuthLayout({ children, className, reversed = false, ...props }: AuthLayoutProps & React.ComponentProps<"div">) {
  return (
    <div className={cn("h-[90vh] flex items-center justify-center overflow-hidden", className)} {...props}> {/*modifiquei de 80hv pra 90hv pra centralizar */}
      <Card className="w-[80vw] max-h-[80vh] rounded-[30px]">
        <CardContent className="grid p-0 md:grid-cols-2 h-full">
          {reversed ? (
            <>
              <div className="flex items-center justify-center bg-white rounded-2xl p-6 md:p-8">
                <Vector />
              </div>
              <form className="p-6 md:p-8 flex items-center">
                {children}
              </form>
            </>
          ) : (
            <>
              <form className="p-6 md:p-8 flex items-center">
                {children}
              </form>
              <div className="flex items-center justify-center bg-white rounded-2xl p-6 md:p-8">
                <Vector />
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}