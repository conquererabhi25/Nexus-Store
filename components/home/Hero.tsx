import React from 'react'
import HeroCorousel from '@/components/home/HeroCorousel'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
        <div>
            <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'>
                We are reinveting the way people shop. 
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
                We are a group of passionate individuals who are dedicated to making the world a better place.
                We believe in the power of technology to transform lives and create a better future for all.
            </p>
            <Button asChild size={"lg"} className='mt-10'>
                <Link href="/products">Our Products</Link>
            </Button>
        </div>
        <HeroCorousel/>
    </section>
  )
}

export default Hero
