import { NextResponse } from "next/server"
import { users } from "@/app/utils/data"

export const GET = () => {
    return NextResponse.json(users, { status: 200 }) //we don't want need to provide status code
}