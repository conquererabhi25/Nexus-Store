import React from "react";
import Container from "@/components/global/Container";
import Logo from "./logo";
import NavSerach from "./NavSerach";
import CartButton from "./CartButton";
import {ModeToggle} from "./ThemeChange";
import LinksDropDown from "./LinksDropDown";
import { Suspense } from "react";

function NavbarPage() {
  return (
    <nav className="border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-warp py-8 gap-4">
        <Logo />
        <Suspense>
        <NavSerach />
        </Suspense>
       
        <div className="flex gap-4 items-center">
          <CartButton />
          <ModeToggle/>
          <LinksDropDown/>
        </div>
      </Container>
    </nav>
  );
}

export default NavbarPage;
