import { links } from "@/app/utils/links";
import { Button } from "../ui/button";
import { RiMenu3Fill } from "react-icons/ri";
import SignOutLink from "./SignOutLink";
import UserIcon from "./UserIcon";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { Separator } from "../ui/separator";

function LinksDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline"  className="cursor-pointer flex gap-3 max-w-[100px]">
          <RiMenu3Fill className="h-6 w-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <SignedOut>
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button className="w-full text-left cursor-pointer">Register</button>
            </SignUpButton>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <SignInButton mode="modal">
            <button className="w-full text-left cursor-pointer">Login</button>
          </SignInButton>
        </DropdownMenuItem>
        </SignedOut>
       
        <SignedIn>
          {links.map((eachLink) => {
            return (
              <DropdownMenuItem key={eachLink.href}>
                <Link href={eachLink.href}>{eachLink.label}</Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator/>
          <Separator className="mt-4 " />
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropDown;
