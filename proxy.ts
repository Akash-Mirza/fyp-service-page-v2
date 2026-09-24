import { NextResponse, type NextRequest } from "next/server";

/* ============================================================
   FYP Desk — the gate (A3 §4)
   Runs on every request: no valid session cookie → the visitor
   is redirected to /login and never receives protected content.
   /login and static assets stay reachable; everything else
   requires the cookie.

   Next.js 16 convention: this file is proxy.ts exporting
   `proxy` (the middleware convention is deprecated in v16).
   ============================================================ */

const SESSION_COOKIE = "fyp_desk_session";

const PUBLIC_PATHS = ["/login"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isPublic = PUBLIC_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );

  if (isPublic) {
    return NextResponse.next();
  }

  const authed = request.cookies.get(SESSION_COOKIE)?.value === "ok";
  if (authed) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", request.url);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
};
