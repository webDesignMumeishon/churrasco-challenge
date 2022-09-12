import { NextResponse } from "next/server";
import {verify}  from "jsonwebtoken"
import type { NextRequest } from 'next/server'
import { NextCookies } from "next/dist/server/web/spec-extension/cookies";

export default async function middleware (req : NextRequest) {

    const {cookies} = req
    const url = req.url
    const jwt = cookies.get('OursiteJWT')

    if(url === 'http://localhost:3000/'){
        if(jwt !== undefined){
            return NextResponse.redirect('http://localhost:3000/products')
        }
    }
    else if(url.includes('/products')){
        if(jwt === undefined){
           return NextResponse.redirect('http://localhost:3000')
        }
    }
    else if(url.includes('/add')){
        if(jwt === undefined){
           return NextResponse.redirect('http://localhost:3000')
        }
    }
}