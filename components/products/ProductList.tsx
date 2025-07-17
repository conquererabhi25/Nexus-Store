import { formatCurrancy } from "@/app/utils/curruncyFormat";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@prisma/client";
import Image from "next/image";
import FavouriteToggleButton from "./FavouriteToggleButton";

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { name, price, image, company } = product;
        const productID = product.id;
        const DollarAmount = formatCurrancy(price);
        return (
          <article key={productID} className="group relative">
            <Link href={`/products/${productID}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                <CardContent className="p-8 gap-y-4 grid md:grid-cols-3">
                  <div className="relative h-64 md:h-48 md:w-48">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width: 768px) 480px, (max-width: 1200px) 50vw, 30vw"
                      priority
                      className="object-cover rouded w-full  transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h2  className="text-xl font-semibold capitalize">
                      {name}
                    </h2>
                    <h4 className="text-muted-foreground">{company}</h4>

                  </div>
                  <p className="text-muted-foreground text-lg md:ml-auto">
                    {DollarAmount}
                  </p>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute bottom-8 right-8 z-5">
                <FavouriteToggleButton productId={productID} />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ProductList;
