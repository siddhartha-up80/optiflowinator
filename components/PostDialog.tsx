"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useSession } from "next-auth/react";
import PostForm from "./PostForm";
import { useCodeEditor } from "@/app/context/CodeEditorContext";
import { useRouter } from "next/navigation";

const PostDialog = ({ children }: any) => {
  const session = useSession();
  const router = useRouter();
  const { codeValue, updateCodeValue }: any = useCodeEditor();

  // console.log(session?.data?.user?.id);
  // console.log(session)

  const [submitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState("");
  const [post, setPost] = useState({ post: codeValue, tag: "programming" });


  const createPost = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      setSubmitted("submitting");
      const response = await fetch("/api/post/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.data?.user?.id,
          post: codeValue,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        setSubmitted("submitted");
        setTimeout(() => {
          router.push("/optiflow");
        }, 1000);
        console.log("Successfully saved post");
      }
    } catch (error) {
      console.log("Failed to save post");
      setSubmitted("failed");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[70vw]">
        <DialogHeader>
          <DialogTitle>Create Post</DialogTitle>
          <DialogDescription>
            Create a new post to share with the programmers community
          </DialogDescription>
        </DialogHeader>
        <PostForm
          type="Create"
          post={post}
          setPost={setPost}
          submitting={submitting}
          handleSubmit={createPost}
          updateCodeValue={updateCodeValue}
        />
        {submitted === "submitted" ? (
          <DialogFooter>
            <span className="text-green-500">Post Created!</span>
          </DialogFooter>
        ) : submitted === "failed" ? (
          <DialogFooter>
            <span className="text-red-500">Post Creation Failed!</span>
          </DialogFooter>
        ) : null}
      </DialogContent>
    </Dialog>
  );
};

export default PostDialog;
