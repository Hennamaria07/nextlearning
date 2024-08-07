import { NextResponse } from "next/server"

export const middleware = (req) => {
    // if(req.nextUrl.pathname !== '/login') {
    //     return NextResponse.redirect(new URL('/login', req.url));
    // }
    return NextResponse.json(
        {
            message: "Hello from middleware!",
            timestamp: new Date().toISOString(),
        }
    )
}

export const config = {
    matcher: ['/users/:path*'],
}