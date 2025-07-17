import db from "@/app/utils/db";
import SingleProduct  from "../products/[id]/page";
import { redirect } from "next/navigation";

export const fetchFeturedProducts = async () => {
  const featuredProducts = await db.product.findMany({
    where: {
      featured: true,
      
    },
  });
  return featuredProducts;
};


// Fetch All products 

export const fetchAllProducts = async ({search=''}:{search:string}) => {
  const allProducts = await db.product.findMany({
    where:{
      OR:[{name:{contains:search,mode:"insensitive"}},
        {company:{contains:search,mode:"insensitive"}}
      ]
    },    // Here we use OR operator to search for name and company
    orderBy:{
      createdAt:"desc"
    }
  });
  return allProducts;
};


// Fetch single product

// ✅ Make sure productID is defined and string
export const fetchSingleProduct = async (productId: string) => {
  if (!productId) {
    throw new Error("Product ID is required");
  }

  const singleProduct = await db.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!singleProduct) redirect("/products");

  return singleProduct;
};
