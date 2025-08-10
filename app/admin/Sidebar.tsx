"use client"
import React from 'react'
import { adminLinks } from '../utils/links'
import { usePathname } from 'next/navigation' // it helps us to get the current pathname
import {Button} from "@/components/ui/button"
import Link from "next/link"

const SidebarElement = () => {
  const pathname = usePathname()
  return (
    <aside>
      {adminLinks.map((eachLink)=>{
        const isActivePage = pathname === eachLink.href
        const variant = isActivePage ? 'secondary' : 'outline'
        return(
          <Button key={eachLink.href}  asChild variant={variant} className='w-full mb-2 capitalize font-normal'>
            <Link key={eachLink.href} href={eachLink.href}>{eachLink.label}</Link>
          </Button>
        )
      })}
    </aside>
  )
}

export default SidebarElement
