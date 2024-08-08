import { users } from "@/app/utils/data";
import { NextResponse } from "next/server";

export const GET = async (_, res) => {
    try {
        const user = users.filter(user => user.id === Number(res.params.id));
        if(user) {
            return NextResponse.json({
                success: true,
                data: user
            }, {status: 200})
        } else {
            return NextResponse.json({
                success: false,
                message: "User not found"
            }, {status: 404})
        }
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 });
    }
}