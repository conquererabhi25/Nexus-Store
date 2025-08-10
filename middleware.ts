// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { Toaster } from "sonner";




const isAdminRoute = createRouteMatcher(["/admin(.*)"])
const isPublicRoute = createRouteMatcher([
  "/",                  // Home page
  "/products",          // Products page
  "/about",             // About page
]);

export default clerkMiddleware(async(auth, req) => {
  const AdminId = process.env.ADMIN_USER_ID === (await auth()).userId
  if(isAdminRoute(req) && !AdminId){
    return NextResponse.redirect(new URL("/",req.url))
    
  }
  if (!isPublicRoute(req)) await auth.protect();
  
});

console.log("Middleware loaded");

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"], // Protect all except static
};


