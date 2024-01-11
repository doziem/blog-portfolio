import { NextResponse } from "next/server";
import Post from "@/model/Post";
import connect from "@/utils/db";



export const GET = async (request) => {

    try {
        await connect()
        const post = await Post.find()
        console.log(process.env.MONGO_URL);

        return new NextResponse(post, { status: 200 })
    } catch (error) {
        return new NextResponse(error, { status: 500 })
    }
}

// export const GET = async (request) => {
//   const url = new URL(request.url);

//   const username = url.searchParams.get("username");

//   try {
//     await connect();

//     const posts = await Post.find(username && { username });

//     return new NextResponse(JSON.stringify(posts), { status: 200 });
//   } catch (err) {
//     return new NextResponse("Database Error", { status: 500 });
//   }
// };
