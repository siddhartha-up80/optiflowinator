import React from "react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="w-full min-h-[90vh] md:pr-5 flex flex-col justify-center">
      <Card className="flex-1">
        <section className="m-4 md:m-8 px-4 py-2">
          <div className="container mx-auto p-4 my-6 space-y-2 text-center">
            <h2 className="text-2xl font-bold">
              Optiflow <span className="text-green-600">Inator</span>: AI based
              code optimizer
            </h2>
          </div>
          <div className="container mx-auto grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center p-4 shadow-sm hover:shadow-lg hover:shadow-green-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 text-green-600"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="my-3 text-xl font-semibold">Explanations</h3>
              <div className="space-y-1 text-center">
                <p>
                  The AI will generate a human-readable description of the code
                  you paste. For example, if you paste a function, the AI will
                  explain what the function does, or if you paste a class, the
                  AI will explain what the class is for.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4 shadow-sm hover:shadow-lg hover:shadow-green-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 text-green-600"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="my-3 text-xl font-semibold">Optimize</h3>
              <div className="space-y-1 text-center">
                <p>
                  The AI will optimize the code you paste, making it more
                  efficient and removing any unnecessary lines. For example, if
                  you paste a function, the AI will remove any unused variables
                  or code blocks that are not required for the function to work.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4 shadow-sm hover:shadow-lg hover:shadow-green-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 text-green-600"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="my-3 text-xl font-semibold">Language</h3>
              <div className="space-y-1 text-center">
                <p>
                  The AI can generate code in any programming language. The AI
                  will generate language that is correct, functional, and of
                  high quality. The optiflow should emulate the best practices
                  of a senior software engineer when generating code.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4 shadow-sm hover:shadow-lg hover:shadow-green-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 text-green-600"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="my-3 text-xl font-semibold">Simplicity</h3>
              <div className="space-y-1 text-center">
                <p>
                  The AI is designed to generate code that is easy to read,
                  understand, and maintain. The AI will generate code that is
                  simple and does not contain unnecessary details.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4 shadow-sm hover:shadow-lg hover:shadow-green-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 text-green-600"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="my-3 text-xl font-semibold">Share</h3>
              <div className="space-y-1 text-center">
                <p>
                  Share your code with others and get feedback. You can share
                  your code publicly or keep it private. You can also
                  collaborate with others on optiflow platform.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4 shadow-sm hover:shadow-lg hover:shadow-green-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 text-green-600"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="my-3 text-xl font-semibold">Free</h3>
              <div className="space-y-1 text-center">
                <p>
                  Optiflow is a free, open-source platform that allows you to
                  write, share, and collaborate on code with ease. Optiflow is
                  perfect for learning to code or using code as a tool for your
                  work.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Card>
    </div>
  );
};

export default About;
