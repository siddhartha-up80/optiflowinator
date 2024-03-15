//@ts-nocheck

import Post from "@/lib/models/Post";
import { connectToDB } from "@/lib/database";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest, { params } : any) => {
  try {
    await connectToDB();

    const post = await Post.findById(params.id).populate("creator");
    if (!post) return new Response("post Not Found", { status: 404 });

    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const PATCH = async (request: NextRequest, { params }: any) => {
  const { post, tag } = await request.json();

  try {
    await connectToDB();

    // Find the existing post by ID
    const existingpost = await Post.findById(params.id);

    if (!existingpost) {
      return new Response("post not found", { status: 404 });
    }

    // Update the post with new data
    existingpost.post = post;
    existingpost.tag = tag;

    await existingpost.save();

    return new Response("Successfully updated the posts", { status: 200 });
  } catch (error) {
    return new Response("Error Updating post", { status: 500 });
  }
};

export const DELETE = async (request: NextRequest, { params }: any) => {
  try {
    await connectToDB();

    // Find the post by ID and remove it
    await Post.findByIdAndRemove(params.id);

    return new Response("post deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting post", { status: 500 });
  }
};
