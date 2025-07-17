import React from 'react'
import { fetchFeturedProducts } from '@/app/utils/action'
import EmptyList from '../global/EmptyList'
import SectionTitle from '../global/SectionTitle'
import ProductGrid from '../products/ProductGrid'


async function FeaturedProducts () {
    const products = await fetchFeturedProducts()
    if(products.length===0){
        return <EmptyList/>
    }
  return (
    <section className="pt-24">
        <SectionTitle text="Featured Products" />
        <ProductGrid products={products} />

    </section>
  )
}

export default FeaturedProducts