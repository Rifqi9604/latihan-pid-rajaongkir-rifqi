import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const loggedInCookie = request.cookies.get('loggedIn');

  if (!loggedInCookie) {
    // Redirect to the login page if the user is not logged in
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // Allow the request to proceed if the user is logged in
  return NextResponse.next();
}

// Apply this middleware only to paths that need authentication
export const config = {
  matcher: '/dashboard/:path*',
};
