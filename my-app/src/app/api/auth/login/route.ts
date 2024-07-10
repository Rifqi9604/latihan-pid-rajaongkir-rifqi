import { NextRequest, NextResponse } from "next/server";
import { login } from "@/lib/lib";

export async function POST(request: NextRequest) {
    const formData = await request.formData();
    await login(formData);
    return NextResponse.json({ message: "Login successful" });
}
