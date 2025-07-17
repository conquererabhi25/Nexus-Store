import React from 'react'
import {Button} from "@/components/ui/button"

const AddToCart = ({productID}:{productID:string}) => {
  console.log(productID)
  return (
    <Button className='capitalize mt-8' size={'lg'}>Add to Cart</Button>
  )
}

export default AddToCart
