import React from "react";
import EmptyList from "@/components/global/EmptyList";
import { DeleteProductAction, fetchAdminProducts } from "@/app/utils/action";
import Link from "next/link";
import {IconButton} from "@/components/form/ButtonSubmit";

import { formatCurrancy } from "@/app/utils/curruncyFormat";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import FormContainer from "@/components/form/FormContainer";

async function AdminProducts() {
  const items = await fetchAdminProducts();
  if (items.length === 0) <EmptyList />;
  console.log(items);
  return (
    <section>
      {/* <p>Total Products {items.length}</p> */}
      <Table>
        <TableCaption>Total Products {items.length}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Price</TableHead>

            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((eachItem) => {
            const {
              id: productId,
              name,
              company,
              price,
             
            } = eachItem;
            return (
              <TableRow key={productId}>
                <TableCell>
                  <Link
                    href={`/product/${productId}`}
                    className="underline text-muted-foreground tracking-wide capitalize"
                  >
                    {name}
                  </Link>
                </TableCell>
                <TableCell>{company}</TableCell>
                <TableCell>{formatCurrancy(price)}</TableCell>
                <TableCell className="flex items-center gap--x-2">
                  <Link href={`/admin/product/${productId}/edit`}>
                    <IconButton actionType="edit" />
                  </Link>
                  <DeleteProduct productId={productId} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
}


 function DeleteProduct({productId}:{productId:string}){
  const delProduct = DeleteProductAction.bind(null,{productId}) // here bind helps to pass productId to action function and null is for prevState
  return(
    <FormContainer action={delProduct}>
      <IconButton actionType="delete" />
    </FormContainer>
  )

}

export default AdminProducts;
