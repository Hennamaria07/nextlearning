import { NextResponse } from "next/server"
import { users } from "@/app/utils/data"

export const GET = () => {
    return NextResponse.json({
        success: true,
        data: users
    }, { status: 200 }) 
}