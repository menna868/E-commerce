import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request:NextRequest) {
    
    let token = await getToken({ req: request });
    if (token) {

        if (
          request.nextUrl.pathname === "/login" ||
          request.nextUrl.pathname === "/register" ||
          request.nextUrl.pathname === "/ResetNewPassword" ||
          request.nextUrl.pathname === "/RestCode" ||
          request.nextUrl.pathname === "/ForgetPassword"
        ) {
          return NextResponse.redirect(new URL("/", request.url));
        } else {
          return NextResponse.next();
        }
    }
    else{
        if (
          request.nextUrl.pathname === "/cart" ||
          request.nextUrl.pathname === "/WishList"
        ) {
          return NextResponse.redirect(new URL("/login", request.url));
        } else {
          return NextResponse.next();
        }
    }
}

export const config = {
  matcher: [
    "/cart",
    "/login",
    "/register",
    "/WishList",
    "/ResetNewPassword",
    "/RestCode",
    
  ],
};