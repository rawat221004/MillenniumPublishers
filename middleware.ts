import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the origin from the request headers
  const origin = request.headers.get('origin') || '';
  
  // Get the pathname from the URL
  const pathname = request.nextUrl.pathname;
  
  // Only apply CORS middleware to API routes
  if (pathname.startsWith('/api/')) {
    // Create a new response with CORS headers
    const response = NextResponse.next();
    
    // Allow requests from your own domain in production and localhost in development
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    
    return response;
  }
  
  // For non-API routes, just continue
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
