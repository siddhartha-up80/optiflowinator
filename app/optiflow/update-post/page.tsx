"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PostForm from "@/components/PostForm";

const UpdatePrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const postId = searchParams.get("id");

  const [post, setPost] = useState({ post: "", tag: "" });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getPostDetails = async () => {
      const response = await fetch(`/api/post/${postId}`);
      const data = await response.json();

      setPost({
        post: data.post,
        tag: data.tag,
      });
    };

    if (postId) getPostDetails();
  }, [postId]);

  const updatePrompt = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!postId) return alert("Missing postId!");

    try {
      const response = await fetch(`/api/post/${postId}`, {
        method: "PATCH",
        body: JSON.stringify({
          post: post.post,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PostForm
      type="Edit"
      post={post}
      updateCodeValue={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default UpdatePrompt;
