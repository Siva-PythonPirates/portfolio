import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Check if the request is for the admin page
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Get the authorization header
    const authHeader = request.headers.get('authorization');
    
    // Check if the authorization header is present and correct
    if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_SECRET}`) {
      // Return a 401 Unauthorized response
      return new NextResponse(
        JSON.stringify({ error: 'Unauthorized' }),
        {
          status: 401,
          headers: {
            'Content-Type': 'application/json',
            'WWW-Authenticate': 'Bearer',
          },
        }
      );
    }
  }
  
  // Continue with the request
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/admin/:path*',
}; 