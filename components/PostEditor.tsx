"use client";

import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Clipboard, ClipboardCheck } from "lucide-react";

const PostEditor = ({ postCode }: any) => {
  const [newCode, setNewCode] = useState(postCode);
  const [copy, setCopy] = useState(false);

  const handleChange = (value: any, event: any) => {
    // console.log("here is the current model value:", value);
    setNewCode(value);
  };

  return (
    <div>
      {copy ? (
        <div className="flex justify-end w-full mb-2">
          <Button
            className="py-1 inline-flex items-center gap-1"
            variant={"ghost"}
          >
            <span className="text-base my-1">
              <ClipboardCheck size={18} />
            </span>
            Copied
          </Button>
        </div>
      ) : (
        <div className="flex justify-end w-full mb-2">
          <Button
            className="py-1 inline-flex items-center gap-1"
            variant={"ghost"}
            onClick={() => {
              navigator.clipboard.writeText(newCode);
              setCopy(true);
              setTimeout(() => {
                setCopy(false);
              }, 3000);
            }}
          >
            <span className="text-base my-1">
              <Clipboard size={18} />
            </span>
            Copy Code
          </Button>
        </div>
      )}
      <div className="h-full">
        <Editor
          height={"60vh"}
          width={"100%"}
          defaultLanguage={`python`}
          value={newCode}
          // defaultValue={`print("Welcome to OptiFlow Inator")`}
          theme="vs-dark"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default PostEditor;
