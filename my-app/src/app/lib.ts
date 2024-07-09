import { SessionOptions } from "iron-session"
export interface SessionData{
    UNSTABLE_REVALIDATE_RENAME_ERROR: string,
    password: string
}

export const sessionOptions: SessionOptions = {
    password: process.env.SECRET_KEY!,
    cookieName:"login-session",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    }
}