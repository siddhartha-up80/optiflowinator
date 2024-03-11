"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import AICodeEditor from "./AICodeEditor";
import { useCodeEditor } from "@/app/context/CodeEditorContext";
import DropDownBasic from "./DropDown";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const AIEditor = () => {
  const { codeValue }: any = useCodeEditor();
  const [loading, setLoading] = useState(false);
  const [aiCode, setAiCode] = useState("");

  const getAiCode = async (code: any) => {
    try {
      setLoading(true);
      setAiCode("");

      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: code }),
      });

      if (response.status === 201) {
        const data = await response.json();
        setAiCode(data);
        console.log(data);
        setLoading(false);
        console.log("code submitted successfully!");
      } else {
        console.error("code submission failed.");
      }
    } catch (error) {
      console.error("Error submitting the code:", error);
    }
  };

  return (
    <div>
      <div className="bg-gradient-to-b bg-green-600 ">
        <div className=" flex md:flex-col-reverse flex-col mx-auto lg:flex-row items-stretch min-h-[80vh] md:p-0 px-5">
          <div className="flex flex-col md:px-6 px-2 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 h-full">
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2 text-gray-50 ">
                <p className="text-lg leading-relaxed font-semibold">
                  Choose option from the list
                </p>
                <p className="leading-relaxed font-medium">
                  Get your code explained, convert to different language or
                  optimised by AI
                </p>
              </div>
            </div>
            <div className=" flex flex-col md:flex-col md:gap-4 gap-y-4">
              <div className="group relative rounded-lg pl-1 md:pl-4 pr-1 py-1 lg:p-6 cursor-pointer bg-white  lg:ring-1 lg:ring-inset lg:ring-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="font-display text-xl text-green-600">
                      <ArrowRight />
                    </div>
                    <p className="ml-2 mr-2 mt-1 text-md lg:block  text-gray-700 font-semibold">
                      Get code explanation
                    </p>
                  </div>
                  <Button
                    className="min-w-24"
                    type="button"
                    onClick={() =>
                      getAiCode("Explain this code in detailed: " + codeValue)
                    }
                  >
                    Explain
                  </Button>
                </div>
              </div>

              <div className="group relative rounded-lg pl-1 md:pl-4 pr-1 py-1 lg:p-6 cursor-pointer bg-white  lg:ring-1 lg:ring-inset lg:ring-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="font-display text-2xl text-green-600">
                      <ArrowRight />
                    </div>
                    <p className="ml-2 mr-2 mt-1 text-md lg:block  text-gray-700 font-semibold">
                      Optimise
                    </p>
                  </div>
                  <Button
                    className="min-w-24"
                    type="button"
                    onClick={() =>
                      getAiCode("Optimise this code: " + codeValue)
                    }
                  >
                    Optimise
                  </Button>
                </div>
              </div>

              <div className="group relative rounded-lg pl-1 md:pl-4 pr-1 py-1 lg:p-6 cursor-pointer bg-white  lg:ring-1 lg:ring-inset lg:ring-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="font-display text-2xl text-green-600">
                      <ArrowRight />
                    </div>
                    <p className="ml-2 mr-2 mt-1 text-md lg:block  text-gray-700 font-semibold">
                      Convert to{" "}
                      <span className="hidden md:inline">
                        different language
                      </span>
                    </p>
                  </div>
                  {/* <Button
                    className="min-w-24"
                    type="button"
                    onClick={() =>
                      getAiCode("Convert this code to java: " + codeValue)
                    }
                  >
                    Explain
                  </Button> */}

                  <DropDownBasic getAiCode={getAiCode} codeValue={codeValue} />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 xl:w-3/5 bg-white dark:bg-black text-white max-h-max flex-1">
            {/* {aiCode === "" ? (
                <AICodeEditor showcopy={true} aiValue={codeValue} />
              ) : aiCode != "" ? (
                <AICodeEditor showcopy={true} aiValue={aiCode} />
              ) : (
                <div>Loading</div>
              )} */}

            {loading === true ? (
              <div className="h-full flex justify-center items-center">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-rose-600 mx-auto"></div>
              </div>
            ) : aiCode != "" ? (
              <AICodeEditor showcopy={true} aiValue={aiCode} />
            ) : (
              <AICodeEditor showcopy={true} aiValue={codeValue} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIEditor;
