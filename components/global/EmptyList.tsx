import { cn } from '@/lib/utils'
import React from 'react'

const EmptyList = ({heading = "No items found." , className}:{heading?:string,className?:string}) => {
  return (
    <div>
      <h1 className={cn('text-xl',className)}>{heading}</h1> 
    </div>
  )
}

export default EmptyList
