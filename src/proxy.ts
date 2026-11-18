import { NextRequest, NextResponse } from "next/server.js";

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (searchParams.has("__wd")) {
    return NextResponse.next();
  }

  if (pathname === "/world-door" || pathname === "/world-door/index.html") {
    return NextResponse.redirect(new URL(`/${request.nextUrl.search}`, request.url), 308);
  }

  if (pathname === "/") {
    const target = new URL("/world-door/index.html", "http://localhost:3000");
    target.search = request.nextUrl.search;
    target.searchParams.set("__wd", "1");
    return NextResponse.rewrite(target);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/world-door", "/world-door/index.html"],
};
