import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";



// Prisma.ProductScalarFieldEnum.price // this is used to acess this value from prisma schema.

const name = "price";
type PriceInputProps = {
  label?: string;
  defaultValue?: number;
  placeholder?: string;
};

function PriceInput({ defaultValue }: PriceInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize mb-2">
        Price ($)
      </Label>
      <Input
        id={name}
        name={name}
        type="number"
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
}

export default PriceInput;
