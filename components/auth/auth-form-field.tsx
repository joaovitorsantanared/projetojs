import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface AuthFormFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

export function AuthFormField({ id, label, type, placeholder, required }: AuthFormFieldProps) {
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </Field>
  );
}