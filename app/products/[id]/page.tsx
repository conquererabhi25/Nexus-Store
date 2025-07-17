import BreadCrumbs from "@/components/single-product-details/BreadCrumbs";
import { fetchSingleProduct } from "@/app/utils/action";
import Image from "next/image";
import { formatCurrancy } from "@/app/utils/curruncyFormat";
import FavouriteToggleButton from "@/components/products/FavouriteToggleButton";
import AddToCart from "@/components/single-product-details/AddToCart";
import ProductRating from "@/components/single-product-details/ProductRating";


interface SingleProductProps {
    params: {
      id: string;
    };
  }
  

  async function SingleProduct({ params }: SingleProductProps) {
    const productId = params.id;
    const product = await fetchSingleProduct(productId)
    const { name, price, image, description, company } = product;
    const DollarAmount = formatCurrancy(price);
    console.log("Im Product Main Page")
 
    return(
        <section>
        <BreadCrumbs name={product.name}>
        <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
          {/* Image first column */}
          <div className="relative h-full">
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 3vw"
              priority
              className="object-cover rounded w-full"
            />
          </div>

          {/* Product second column */}
          <div>
            <div className="flex gap-x-8 items-center">
              <h1 className="capitalize text-3xl font-bold">{name}</h1>
              <FavouriteToggleButton productId={productId} />
            </div>
            <ProductRating productID={productId} />
            <h4 className="text-xl mt-2">{company}</h4>
            <p className="text-md mt-3 bg-muted inline-block p-2 rounded text-gray-500">
              {DollarAmount}
            </p>
            <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
            <AddToCart productID={productId} />
          </div>
        </div>
      </BreadCrumbs>
    </section>
    )
}

export default SingleProduct