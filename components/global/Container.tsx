// We have created a global container component that wraps our app and adds fixed width to app.
import React from 'react'
import {cn} from "@/lib/utils"

export default function Container({children,className}:{children:React.ReactNode,className?:string}){

    return (
        <div className={cn('mx-auto max-w-6xl xl:max-w-7xl px-8 cursor-pointer',className)}>
            {children}
        </div>
    )
}

