import { NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest){
    console.log("MIDWARE RUN!")
    return NextResponse.next()
}