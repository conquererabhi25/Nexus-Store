import {Button} from "@/components/ui/button"
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

// Absolute Relative Logic 
// The component which we want to display on top of another component make it absolute 
// The component which we want to use as base for other component make it relative.

async function CartButton() {
    const cartCount = 10
  return (
    <Button asChild variant={"outline"} size={"icon"} className="flex justify-center items-center relative">
        <Link href="/cart">
        <FaShoppingCart className="text-2xl" />
        <span className="absolute -top-3 left-4 bg-primary text-xs text-white rounded-full h-6 w-6 flex items-center justify-center">
            {cartCount}
        </span>
        </Link>
    </Button>
  )
}

export default CartButton