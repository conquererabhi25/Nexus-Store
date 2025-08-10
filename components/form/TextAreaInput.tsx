import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";

type TextAreaInputProps = {
  name: string;
  labelText: string;
  defaultValue?: string;
};

function TextAreaInput({ name, labelText, defaultValue }: TextAreaInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize mb-2">
        {labelText}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={5}
        required
        className="leading-loose" // leading property helps to provide letter spacing
      />
    </div>
  );
}

export default TextAreaInput;
