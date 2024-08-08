import { NextResponse } from "next/server";

export const POST = async (req, res) => {
    try {
        const { name, email, password } = await req.json();
        console.log(name, email, password);

        if ([name, email, password].some(field => !field)) {
            return NextResponse.json({
                success: false,
                message: "All fields are required and cannot be empty"
            }, { status: 400 });
        }
        console.log(name, email, password);
        return NextResponse.json({
            success: true,
            message: "Data received successfully"
        })
    } catch (error) {
        console.log(error.message);
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 });
    }
}