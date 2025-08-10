import {createClient} from '@supabase/supabase-js'


const bucket = "product-bucket.1"

export const supabase= createClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_KEY as string
)


export const uploadImages = async (image:File)=>{
    const timestamp = Date.now();
    const newName = `${timestamp}-${image.name}`;
    const {data}  = await supabase.storage.from(bucket)
    .upload(newName,image,{cacheControl:"3600"});
    if(!data){
         throw new Error("Error uploading image")
    }
    return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl
}


export const deleteDBImage = (url: string) => {
    const bucket = "product-bucket.1";

    const imageName = url.split("/").pop();
    if(!imageName){
      throw new Error("Invalid image url")
    }
    return supabase.storage.from(bucket).remove([imageName]);
  };
  
  