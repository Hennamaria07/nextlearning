import { NextResponse } from "next/server";

export const GET = (_, res) => {
    console.log(res.params.id); //2
    console.log(res) //{ params: { id: '2' } }
    return NextResponse.json({
        message: 'Hello, Next.js Serverless Function!'
    })
}