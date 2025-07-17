import React from 'react'
import {FaStar} from "react-icons/fa"

const ProductRating = ({productID}:{productID:string}) => {
  console.log(productID)
    const rating = 4.2
    const count = 5
    const className = `flex gap-1 items-center  text-md mt-1 mb-4`
    return (
    <span className={className}>
     <span className="flex items-center gap-1"> <FaStar className='w-3 h-3'/>
     {rating} </span>
      ({count}) reviews
    </span>
  )
}

export default ProductRating
