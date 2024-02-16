// Next y React
import { NextResponse, type NextRequest } from 'next/server'

export const config = {
    matcher: ['/:path*']
}

export function middleware(request: NextRequest) {
    return NextResponse.next()
}
