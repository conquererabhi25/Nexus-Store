import {links} from "@/app/utils/links"

import { RiMenu3Fill } from "react-icons/ri";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button"
import Link from "next/link"



function LinksDropDown() {
  return (
    
    <DropdownMenu>
      <DropdownMenuTrigger>
     
        <RiMenu3Fill className="h-6 w-6" />
       
      </DropdownMenuTrigger>
      <DropdownMenuContent>
     
        {links.map((eachLink)=>{
            return(
                <DropdownMenuItem key={eachLink.href}>
                    <Link href={eachLink.href}>{eachLink.label}</Link>  
                </DropdownMenuItem>
            )
        })}

      
      </DropdownMenuContent>
    </DropdownMenu>
  
  );
}

export default LinksDropDown;
