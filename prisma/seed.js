const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const products = require('./HomePageProduct.json')



// async function main(){
//     await prisma.product.createMany({
//         data: products
//     })
// }

async function main(){
    for (const eachProduct of products){
        await prisma.product.create({
            data:eachProduct
        })
    }
}

main()
    .then(async ()=>{
        await prisma.$disconnect()
    })
    .catch(async (e)=>{
        await prisma.$disconnect()
        console.log(e)
    })