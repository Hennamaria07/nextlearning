import { NextResponse } from "next/server"
import { users } from "@/app/utils/data"
import fs from 'fs'

export const GET = () => {
    return NextResponse.json({
        success: true,
        data: users
    }, { status: 200 }) 
}

export const POST = async (req, res) => {
    try {
        const {name, email, password, id } = await req.json();
        if([name, email, password, id].some(field => !field || field.length === 0)) {
            return NextResponse.json({
                success: false,
                message: "All fields are required and cannot be empty"
            }, { status: 400 })
        } else if (typeof id !== "number") {
            return NextResponse.json({
                success: false,
                message: "ID must be a number"
            }, { status: 400 })
        } else if (id) {
            const userExists = users.find(user => user.id === id);
            if(userExists) {
                return NextResponse.json({
                    success: false,
                    message: "User with this ID already exists",
                }, { status: 409 })
            }
        }
        users.push({name, email, password, id});

        fs.writeFileSync('./app/utils/data.js', `export const users = ${JSON.stringify(users, null, 2)}`, 'utf-8');
        
        return NextResponse.json({
            success: true,
            message: "User created successfully",
            data: users
        }, { status: 201 })  // 201 Created
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500})
    }
}