import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const loggedIn_userID = request.cookies.get("chawkbazar:user_id")?.value;

  if (!loggedIn_userID) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
  const response = NextResponse.next();
  return response;
}

export const config = {
  matcher: ["/checkout", "/my-account/:path*"],
};
