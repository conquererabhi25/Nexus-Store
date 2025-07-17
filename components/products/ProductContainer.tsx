

import ProductGrid from "@/components/products/ProductGrid";
import ProductList from "@/components/products/ProductList";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fetchAllProducts } from "@/app/utils/action";
import Link from "next/link";


async function ProductContainer({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) {
  const products = await fetchAllProducts({search});

  const totalProducts = products.length;
  // const searchTerm = search ? `&search=${search}` : "";
  return (
    <>
      {/* HEADER */}
      <section>
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-lg">
            {totalProducts} product{totalProducts > 1 && "s"}
          </h4>
          <div className="flex gap-x-4">
            <Button
              asChild
              variant={layout === "grid" ? "default" : "ghost"}
              size={"icon"}
            >
              <Link
                href={{
                  pathname: "/products",
                  query: { layout: "grid", search },
                }}
              >
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button
              asChild
              variant={layout === "list" ? "default" : "ghost"}
              size={"icon"}
            >
              <Link
                href={{
                  pathname: "products",
                  query: { layout: "list", search },
                }}
              >
                <LuList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className="mt-4 " />
      </section>

      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5>No Product Found with this search</h5>
        ) : layout === "grid" ? (
          <ProductGrid products={products} />
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </>
  );
}

export default ProductContainer;
