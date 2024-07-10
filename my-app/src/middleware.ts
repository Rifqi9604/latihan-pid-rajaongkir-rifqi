import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/lib/lib";

export async function middleware(request: NextRequest) {
  console.log("Middleware running!");
  const token = request.cookies.get("token")?.value;

  if (token) {
    const user = await decrypt(token);

    if (user && !request.nextUrl.pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  if (!token && !request.nextUrl.pathname.startsWith("/auth/login")) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
