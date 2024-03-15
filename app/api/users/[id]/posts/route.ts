import Post from "@/lib/models/Post";
import { connectToDB } from "@/lib/database";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest, { params }: any) => {
  try {
    await connectToDB();

    const posts = await Post.find({ creator: params.id }).populate(
      "creator"
    );

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch posts created by user", {
      status: 500,
    });
  }
};
