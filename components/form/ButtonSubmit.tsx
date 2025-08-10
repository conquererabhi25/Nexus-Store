
// This button component is for submit create product form 
// keywords : create product button submit , submit button product , product submit button

"use client"

import React from 'react'
import {ReloadIcon} from "@radix-ui/react-icons" // its npm command is npm i radix-ui/react-icons
import {useFormStatus} from "react-dom"
import { Button } from '../ui/button'
import {cn} from "@/lib/utils"
import {LuTrash2} from "react-icons/lu"
import { CiEdit } from "react-icons/ci";


type btnSize = "default" | "sm" | "lg"

type SubmitButtonProps = {
  className?: string
  size?: btnSize
  text?:string
}

export const ButtonSubmit = ({className,size,text}:SubmitButtonProps) => {
  const {pending} = useFormStatus()
  return (
   <Button type="submit" disabled={pending} className={cn('capitalize',className)} size={size} >
    {pending? <><ReloadIcon className='animate-spin mr-2 h-4 w-4'/>Please wait </> : text}
   </Button>
  )
}


// ============================

type actionType = "edit" | "delete"  

export const IconButton = ({actionType}:{actionType:actionType}) => {
  const {pending} = useFormStatus()

  const renderIcon =()=>{
    switch(actionType){
      case "edit":
        return <CiEdit className='text-muted-foreground' />
      case "delete":
        return <LuTrash2 className='text-muted-foreground' />
        default:
          const never :never = actionType
          throw new Error(`IconButton: actionType ${never} is not supported`)
    }
  }
  return (
    <Button type="submit" size="icon" variant="link" className='p-2 cursor-pointer '>
      {pending? <ReloadIcon className='animate-spin'/>:renderIcon()}
    </Button>
  )
}
