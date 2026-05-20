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
    <div
      className={cn(
        "min-h-screen flex items-center justify-center   from-[#0C5051] to-[#94FC71]",
        className
      )}
      {...props}
    >
      <Card 
        className="rounded-[30px] flex-shrink-0"
        style={{
          width: "1120px",
          height: "707px",
          maxWidth: "95vw",
          maxHeight: "95vh",
        }}
      >
        <CardContent className="grid p-0 md:grid-cols-2 h-full rounded-[30px] overflow-hidden">
          {reversed ? (
            <>
              <div className="flex items-center justify-center bg-white rounded-l-2xl p-6 md:p-8 h-full">
                <Vector />
              </div>

              <div className="p-6 md:p-8 flex items-center h-full">
                {children}
              </div>
            </>
          ) : (
            <>
              <div className="p-6 md:p-8 flex items-center h-full">
                {children}
              </div>

              <div className="flex items-center justify-center bg-white rounded-r-2xl p-6 md:p-8 h-full">
                <Vector />
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
