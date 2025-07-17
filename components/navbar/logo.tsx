import Link from "next/link";
import {Button} from "@/components/ui/button"
import { FaAppStore } from "react-icons/fa";


function Logo() {
  return (
   <Button asChild >
    <Link href="/" className="flex items-center gap-2">
      <FaAppStore className="text-2xl" />
      <span className="text-xl font-bold">Nexus Store</span>
      </Link>
   </Button>
  )
}

export default Logo