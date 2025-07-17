import React from 'react'
import Image from "next/image";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  import {Card, CardContent} from "@/components/ui/card"

import Hero1 from "@/public/wooden wardrobe.jpg"
import Hero2 from "@/public/balde electric.jpg"
import Hero3 from "@/public/storage 2 tier.jpg"
import Hero4 from "@/public/coffe filter.jpg"


const CorouselImages = [Hero1,Hero2,Hero3,Hero4]

const HeroCorousel = () => {
  return (
 <div className="hidden md:block">
    <Carousel  opts={{
       
        slidesToScroll: 1,
    loop: true,
  }}>
        <CarouselContent>
            {CorouselImages.map((eachImage,index)=>{
                return (
                    <CarouselItem key={index}>
                      <Card>
                        <CardContent className='p-2'>
                        <Image src={eachImage} alt="hero-image" priority className='w-full h-[28rem] rounded-md object-cover'/>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                )
            })}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
    </Carousel>
 </div>
  )
}

export default HeroCorousel