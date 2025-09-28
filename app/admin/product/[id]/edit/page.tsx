import {
  fetchSingleProductForUpdate,
  UpdateProductAction,
  UpdateImageAction,
} from "@/app/utils/action";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { ButtonSubmit } from "@/components/form/ButtonSubmit";
import CheckboxInput from "@/components/form/CheckBoxInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";

type EditProductPageProps = {
  params: {
    id: string;
  };
};

async function EditProduct({ params }: EditProductPageProps) {
  const { id } = params;
  const product = await fetchSingleProductForUpdate(id);
  const { name, price, image, description, company, featured } = product;

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Update Product</h1>
      <div className="border p-8 rounded-md">
        {/* Image Input container */}
        <ImageInputContainer
          action={UpdateImageAction}
          image={image}
          name={name}
          text="Update Image"
        >

          <input type="hidden" name="id" value={id}/>
          <input type="hidden" name="url" value={product.image}/>
        </ImageInputContainer>
        <FormContainer action={UpdateProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <input type="hidden" name="id" value={id} />
            <FormInput
              name="name"
              label="product name"
              type="text"
              defaultValue={name}
            />
            <FormInput
              name="company"
              label="company"
              type="text"
              defaultValue={company}
            />
            <PriceInput defaultValue={price} />
          </div>
          <TextAreaInput
            name="description"
            labelText="product description"
            defaultValue={description}
          />

          <div className="mt-6">
            <CheckboxInput
              name="featured"
              label="featured"
              defaultChecked={featured}
            />
          </div>

          <ButtonSubmit text="Update Product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}

export default EditProduct;
