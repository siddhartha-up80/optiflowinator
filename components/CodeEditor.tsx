//@ts-nocheck
"use client";

import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { useCodeEditor } from "@/app/context/CodeEditorContext";
import { Button } from "./ui/button";
import { Clipboard, ClipboardCheck } from "lucide-react";

// import { useCodeEditor } from "../app/context/CodeEditorContext";

const CodeEditor = ({ showcopy }) => {
  const { codeValue, updateCodeValue } = useCodeEditor();

  const [copy, setCopy] = useState(false);

  const handleChange = (value: any, event: any) => {
    // console.log("here is the current model value:", value);
    updateCodeValue(value);
  };

  // console.log(codeValue);

  return (
    <div>
      {showcopy && (
        <div className="flex justify-end mb-1">
          {copy ? (
            <Button className="py-1 inline-flex items-center gap-1">
              <span className="text-base my-1">
                <ClipboardCheck size={18} />
              </span>
              Copied
            </Button>
          ) : (
            <Button
              className="py-1 inline-flex items-center gap-1"
              onClick={() => {
                navigator.clipboard.writeText(codeValue);
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
          )}
        </div>
      )}

      <Editor
        height={"60vh"}
        defaultLanguage="python"
        defaultValue={`print("Welcome to OptiFlow Inator")`}
        theme="vs-dark"
        onChange={handleChange}
      />
    </div>
  );
};

export default CodeEditor;
