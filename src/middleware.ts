import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Redirect non-www to www (301 permanent redirect)
  if (
    hostname === 'sreetravel.com' ||
    hostname === 'http://sreetravel.com' ||
    hostname.startsWith('sreetravel.com:')
  ) {
    url.hostname = 'www.sreetravel.com';
    url.protocol = 'https';
    url.port = '';
    return NextResponse.redirect(url, 301);
  }

  // Redirect HTTP to HTTPS (for non-www already handled above)
  if (url.protocol === 'http:') {
    url.protocol = 'https';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico (favicon)
     * - public files (images, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|eot)$).*)',
  ],
};
