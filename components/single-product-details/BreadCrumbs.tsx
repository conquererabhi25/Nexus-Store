import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

  type BreadCrumbsProps = {
    name: string;
    children?: React.ReactNode;
  };

const BreadCrumbs = ({ name, children }: BreadCrumbsProps) => {
  return (
    <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/" className='capitalize text-lg'>Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/products" className='capitalize text-lg'>Products</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink className='capitalize text-lg'>{name}</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
    </BreadcrumbList>
    {children}
  </Breadcrumb>
  )
}

export default BreadCrumbs
