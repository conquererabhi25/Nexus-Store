import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

function FormInput({
  name,
  label,
  type,
  defaultValue,
  placeholder,
}: FormInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize mb-2">{label || name}</Label>
      <Input id={name} name={name} type={type} defaultValue={defaultValue} placeholder={placeholder}/>
    </div>
  );
}

export default FormInput;
