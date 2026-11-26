import { NextResponse, type NextRequest } from "next/server";
import { DEMO_SESSION_COOKIE } from "@/lib/demo-session";

// Sends visitors without a demo session to the sign-in page
export function proxy(request: NextRequest) {
    const signedIn = request.cookies.has(DEMO_SESSION_COOKIE);
    const onSignInPage = request.nextUrl.pathname === "/sign-in";

    if (!signedIn && !onSignInPage) {
        return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    return NextResponse.next();
}

export const config = {
    // Skip Next.js internals and static files
    matcher: ["/((?!_next|assets|.*\\..*).*)"],
};
