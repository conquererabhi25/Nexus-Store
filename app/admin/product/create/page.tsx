import React from 'react'
import {faker} from '@faker-js/faker' 
import FormContainer from "@/components/form/FormContainer"
import  FormInput  from '@/components/form/FormInput'
import PriceInput from '@/components/form/PriceInput'
import ImageInput from "@/components/form/ImageInput"
import TextAreaInput from '@/components/form/TextAreaInput'
import {CreateProductAction} from '@/app/utils/action'
import {ButtonSubmit} from '@/components/form/ButtonSubmit'
import CheckboxInput from '@/components/form/CheckBoxInput'


// faker library lt us generate fake form data like to create fake users or products.
// Install command :    [  npm i @faker-js/faker  ]

// Keywords : create product page , create product page , faker library , faker , find faker 



const CreateProductPage = () => {
    const name = faker.commerce.productName().toString()
    const price = faker.commerce.price()
    const comapnyName = faker.company.name().toString()
    const description = faker.lorem.paragraph({min:10,max:20}) // also we can use faker.lorem.paragraph({min:10,max:20})
  return (
    <section>
        <h1 className='text-2xl font-semibold mb-8 capitalize'>Create New Product</h1>
        <div className='border p-8 rounded-md'>
            <FormContainer action={CreateProductAction}>
                <div className='grid gap-4 md:grid-cols-2 my-4'>
                <FormInput type="text" name="name" placeholder={name} label="product name" defaultValue={name}/>
                    <FormInput type="text" name="company" placeholder={comapnyName} label="company" defaultValue={comapnyName}/>
                    <PriceInput/>
                    <ImageInput/>
                </div>
                <TextAreaInput name="description" labelText="product description" defaultValue={description}/>
                <div className="mt-6">
                <CheckboxInput name="featured" label="featured" defaultChecked={false} />
                </div>
                <ButtonSubmit text="create product" className='mt-8'/>
            </FormContainer>

        </div>
    </section>
  )
}

export default CreateProductPage
