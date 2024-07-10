import { NextRequest, NextResponse } from "next/server";
import { logout } from "@/lib/lib";

export async function POST() {
    await logout();
    return NextResponse.json({ message: "Logout successful" });
}
