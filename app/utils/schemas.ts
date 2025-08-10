import { z, ZodSchema } from "zod";

export const productSchema = z.object({
  name: z.string().min(2,{message:"Product name should be at least 2 characters"}),
  company: z.string().min(1,{message:"Company name should be at least 1 characters"}),
  price: z.coerce.number().int().min(0),
  description: z.string().refine(
    (description) => {
      const wordCount = description.trim().split(/\s+/).length;
      return wordCount >= 10 && wordCount <= 1000;
    },{message:"Description should be between 10 and 1000 words"}
  ),
  featured: z.coerce.boolean(),
});


export const ImageSchema = z.object({
  image:validateImageFile(),
})

function validateImageFile () {
  const maxUploadSize = 1024 * 1024   // 1MB
  const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"]
  return z.instanceof(File).refine((file)=>{
    return !file || file.size <= maxUploadSize 
  },"File size must be less than 1MB").refine((file)=>{
    return (
      !file || allowedImageTypes.some((types)=>file.type.startsWith(types))
    )
  },"File must be an image")
}



export function validateWithZodSchema<T>(schema: ZodSchema<T>, data: unknown):T {
  const result = schema.safeParse(data);
  if(!result.success){
    const errorMessage = result.error.issues.map((issue)=>issue.message).join(", ")
    throw new Error(errorMessage)
  }
  return result.data
}