//@ts-nocheck
"use client";

import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { useCodeEditor } from "@/app/context/CodeEditorContext";
import { Button } from "./ui/button";
import { Clipboard, ClipboardCheck } from "lucide-react";

const AICodeEditor = ({ showcopy, aiValue }) => {
  const { codeValue, updateCodeValue } = useCodeEditor();
  const [newCode, setNewCode] = useState(aiValue);

  const [copy, setCopy] = useState(false);

  const handleChange = (value: any, event: any) => {
    // console.log("here is the current model value:", value);
    setNewCode(value);
    updateCodeValue(value);
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{ position: "absolute", top: 0, right: 0 }}
        className="z-50 m-2"
      >
        {showcopy && (
          <>
            {copy ? (
              <Button
                className="py-1 inline-flex items-center gap-1"
                variant={"ghost"}
              >
                <span className="text-base my-1">
                  <ClipboardCheck size={18} />
                </span>
                Copied
              </Button>
            ) : (
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
            )}
          </>
        )}
      </div>

      <Editor
        height={"80vh"}
        width={"100%"}
        defaultLanguage="python"
        value={newCode}
        // defaultValue={`print("Welcome to OptiFlow Inator")`}
        theme="vs-dark"
        onChange={handleChange}
      />
    </div>
  );
};

export default AICodeEditor;
