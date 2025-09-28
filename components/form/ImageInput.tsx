import React from 'react'
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"


// type ImageInputPros={
//     label?:string
//     defaultValue?:string
// }

const ImageInput = () => {
    const name = "image"    // we have to use same name value as it is present in our Prisma schema image.
  return (
    <div className="mb-2">
    <Label htmlFor={name} className="capitalize mb-2">Image</Label>
    <Input id={name} name={name} type="file"  defaultValue={name} required accept='image/*'/>
  </div>
  )
}

export default ImageInput
