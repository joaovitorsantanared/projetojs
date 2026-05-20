import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // 🔹 Alterações feitas:
        // - Removido: "dark:bg-input/30" → isso aplicava um fundo escuro no modo dark, então o input deixava de ser transparente.
        // - Removido: "selection:bg-primary selection:text-primary-foreground" → essas classes faziam o fundo da seleção do texto ficar preto.
        // 🔹 Adicionado:
        // - "text-white" → deixa o texto digitado sempre em branco (visível em fundos escuros).
        // - "placeholder:text-gray-300" → deixa o placeholder (“Digite sua senha”) com tom claro e suave.
        "file:text-white placeholder:text-gray-300 border-input h-9 w-full min-w-0 rounded-[10px] border bg-transparent text-white px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        // 🔹 Mantido: efeitos de foco
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        // 🔹 Mantido: estilos de erro e aria-invalid
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
