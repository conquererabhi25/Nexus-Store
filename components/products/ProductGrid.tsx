import React from "react";
import { formatCurrancy } from "@/app/utils/curruncyFormat";
import { Product } from "@prisma/client";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
// import { FaHeart } from "react-icons/fa";
// import { Button } from "@/components/ui/button";
import FavouriteToggleButton from "@/components/products/FavouriteToggleButton";

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { name, price, image } = product;
        const productID = product.id;
        const DollarAmount = formatCurrancy(price);
        return (
          <article key={productID} className="group relative">
            <Link href={`/products/${productID}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                <CardContent className="p-4">
                  <div className="relative h-64 md:h-48 rounded overflow-hidden">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width: 768px) 480px, (max-width: 1200px) 50vw, 30vw"
                      priority
                      className="object-cover rouded w-full  transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h2 className="text-lg capitalize">{name}</h2>
                    <p className="text-sm text-gray-500">{DollarAmount}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute top-11 right-6 z-10">
                <FavouriteToggleButton productId={productID} />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ProductGrid;
