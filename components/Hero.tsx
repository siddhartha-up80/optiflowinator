import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <section className="xl:max-w-4xl mx-auto">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:pt-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leadi sm:text-5xl space-x-2">
            <span>Share, Explain and Optimise Code with</span>
            <span>OptiFlow</span>
            <span className="text-green-600">Inator</span>
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Start your coding journey today with the ultimate Optiflow
            powered by Artificial Intelligence for explaining and optimizing, Share your code
            with your fellow developers!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link className="" href={"#code"}>
              <Button className="text-lg font-semibold">Get started</Button>
            </Link>
            <Link href={"/help"}>
              <Button variant={"outline"} className="text-lg font-semibold">
                Learn more
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap justify-center items-center w-full sm:w-700">
            <div className="w-full md:w-1/2">
              <div className="p-4 text-center">
                <h2 className="text-lg font-bold mb-1">Step 1</h2>
                <p className="text-gray-700">
                  Insert the code you want to be <br /> explained.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="p-4 text-center">
                <h2 className="text-lg font-bold mb-2">Step 2</h2>
                <p className="text-gray-700">
                  Choose how you want the <br /> code to be explained.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
