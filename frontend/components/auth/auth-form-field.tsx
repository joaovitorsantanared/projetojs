import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface AuthFormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string; // caso queira customizar o Input
}

export function AuthFormField({
  id,
  name,
  label,
  type = "text",
  placeholder = "",
  required,
  className,
}: AuthFormFieldProps) {
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>

      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className={className}
      />
    </Field>
  );
}
