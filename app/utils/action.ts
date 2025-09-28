// keywords :- fetch single product , fetured many product , fetured All product featured product fetch

"use server";

import db from "@/app/utils/db";
import { redirect } from "next/navigation";
import { productSchema, ImageSchema, validateWithZodSchema } from "./schemas";
import { ZodError } from "zod";
import { auth, currentUser } from "@clerk/nextjs/server";
import { deleteDBImage, uploadImages } from "./supabase";
import { revalidatePath } from "next/cache";


const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) redirect("/");
  return user;
};

const getAdminUser = async () => {
  const user = await getAuthUser();
  if (user.id !== process.env.ADMIN_USER_ID) redirect("/");
  return user;
};

export const fetchFeturedProducts = async () => {
  const featuredProducts = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return featuredProducts;
};

// Fetch All products

export const fetchAllProducts = async ({ search = "" }: { search: string }) => {
  const allProducts = await db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ],
    }, // Here we use OR operator to search for name and company
    orderBy: {
      createdAt: "desc",
    },
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

// Fetch admin products

export const fetchAdminProducts = async () => {
  await getAdminUser(); // in this way we can check if user is admin or not its boolean
  const allProducts = await db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allProducts;
};

// Create product action / function

export const CreateProductAction = async (
  // prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const { userId } = await auth();

  if (!userId) {
    return { message: "Unauthorized: User not logged in." };
  }

  try {
    const rawData = Object.fromEntries(formData);
    console.log(rawData);
    const file = formData.get("image") as File;

    rawData.featured = formData.has("featured") ? "true" : "false";

    const validatedFields = validateWithZodSchema(productSchema, rawData);
    const validateFile = validateWithZodSchema(ImageSchema, { image: file });
    const fullPath = await uploadImages(validateFile.image);

    await db.product.create({
      data: {
        ...validatedFields,
        image: fullPath,
        clerkId: userId,
      },
    });
  } catch (error: any) {
    if (error instanceof ZodError) {
      console.error("Validation Errors:", error.issues);
    }
    // return { message: error.message || "An unexpected error occurred" };
  }
  redirect("/admin/product");
};

// Delete product action / function

export const DeleteProductAction = async (prevState: { productId: string }) => {
  const { productId } = prevState;
  await getAdminUser();
  try {
    const product = await db.product.delete({
      where: {
        id: productId,
      },
    });
    await deleteDBImage(product.image);
    revalidatePath("/admin/product");
    return { message: "Product deleted from database." };
  } catch (error) {
    return { message: `Failed to delete product-${error}` };
  }
};

// fetch single product for admin data update

export const fetchSingleProductForUpdate = async (productId: string) => {
  await getAdminUser();
  const singleProduct = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!singleProduct) redirect("/admin/product");
  return singleProduct;
};

export const UpdateProductAction = async (
  // prevState: any,
  formData: FormData
) => {
  await getAdminUser();
  try {
    const productId = formData.get("id") as string;
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(productSchema, rawData);
    await db.product.update({
      where: {
        id: productId,
      },
      data: {
        ...validatedFields,
      },
    });
    revalidatePath("/admin/product");
    return { message: "Product updated successfully." };
  } catch (error) {
    return { message: `Failed to update product-${error}` };
  }
};

export const UpdateImageAction = async ( formData: FormData) => {
  await getAdminUser();
  try {
    const image = formData.get("image") as File;
    const productId = formData.get("id") as string;
    

    const validateFile = validateWithZodSchema(ImageSchema, { image });
    const fullPath = await uploadImages(validateFile.image);
    await db.product.update({
      where: {
        id: productId,
      },
      data: {
        image: fullPath,
      },
    });
    revalidatePath(`admin/product/${productId}/edit`)
    return {message:"Product Image updated Successfully"}
  } catch (error) {
    return {message:`Failed to update product image-${error}`}
  }
};
