// // We are creating instance of prisma client in this file to communicate with our database.

// import { PrismaClient } from "@prisma/client";


// const prismaClientSingleton =()=>{
//     return new PrismaClient()  // This simply means that we are creating a new instance of prisma client everytime we call this function.
// };


// type prismaClientSingleton = ReturnType<typeof prismaClientSingleton>

// const globalForPrisma = globalThis as unknown as {prisma: prismaClientSingleton | undefined}


// const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

// export default prisma


// if (process.env.NODE_ENV === "production") {
//     globalForPrisma.prisma = prisma
// }




// utils/db.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"], // optional
  });

if (process.env.NODE_ENV == "production") globalForPrisma.prisma = prisma;

export default prisma;
