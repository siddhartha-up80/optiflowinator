"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import AICodeEditor from "./AICodeEditor";
import { Editor } from "@monaco-editor/react";

interface PostFromProps {
  type: string;
  post: any;
  setPost: any;
  submitting: boolean;
  handleSubmit: any;
  updateCodeValue: any;
}

const PostForm = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
  updateCodeValue,
}: PostFromProps) => {
  
  const [newCode, setNewCode] = useState(post?.post);
  const handleChange = (value: any, event: any) => {
    // console.log("here is the current model value:", value);
    setNewCode(value);
    updateCodeValue(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-2">
        <Label>
          <span className="font-semibold text-base text-gray-700">
            {type} Your code post
          </span>
        </Label>
        {/* <Textarea
          value={`${post.post}`}
          onChange={(e) =>
            setPost({
              ...post,
              post: e.target.value,
            })
          }
          placeholder="Input your code to proceed with your post"
          required
          className="p-2"
        /> */}
        <Editor
          height={"40vh"}
          width={"100%"}
          defaultLanguage={`python`}
          value={newCode}
          // defaultValue={`print("Welcome to OptiFlow Inator")`}
          theme="vs-dark"
          onChange={handleChange}
        />

        <Label>
          <span className="font-semibold text-base text-gray-700">
            Write your topic name <br />
            <span className="font-normal">
              (dsa, array, strings, python, java, binary tree, etc.)
            </span>
          </span>
        </Label>
        <Input
          value={post.tag}
          onChange={(e) => setPost({ ...post, tag: e.target.value })}
          type="text"
          placeholder="Your Topic"
          required
          className=""
        />

        <div className="flex-end flex mb-5 gap-3">
          <Link href="/optiflow" className="text-gray-500 text-sm">
            <Button variant={`outline`}>Cancel</Button>
          </Link>
          <Button
            type="submit"
            variant={`default`}
            disabled={submitting}
            className=""
          >
            {submitting ? `${type}ing...` : "Share"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
