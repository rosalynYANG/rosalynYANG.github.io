import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/world-door" || pathname === "/world-door/index.html") {
    return NextResponse.redirect(new URL(`/${request.nextUrl.search}`, request.url), 308);
  }

  if (pathname === "/") {
    return NextResponse.rewrite(new URL(`/world-door/index.html${request.nextUrl.search}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/world-door", "/world-door/index.html"],
};
