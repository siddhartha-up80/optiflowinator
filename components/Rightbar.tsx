import React from "react";
import { Input } from "./ui/input";
import Link from "next/link";

const Rightbar = ({
  allPosts,
  searchtext,
  handleChange,
  handleTagClick,
}: any) => {
  return (
    <div className="hidden md:block">
      <aside className="w-[340px] min-h-screen fixed right-0 top-0 z-40 border-l bg-white dark:bg-black ">
        <div className="h-full px-3 py-4 space-y-4 ">
          <div className="">
            <Input
              type="text"
              placeholder="Search for tags or username..."
              value={searchtext}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div className="">
            <div className="mb-3 pb-4 border-b-2 border-solid hover:border-teal mt-2">
              <span className="text-lg font-bold">Topics</span>
            </div>
            <div className="p-3 flex justify-between flex-col overflow-y-auto">
              <div className="flex flex-wrap flex-col max-h-[60vh]">
                {allPosts.map((post: any, index: any) => (
                  <div key={index}>
                    <div className="mb-3 leading-tight">
                      <div>
                        <button
                          onClick={() =>
                            handleTagClick && handleTagClick(post.tag)
                          }
                          className="text-teal font-bold"
                        >
                          #{post.tag}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-xs mt-5 flex justify-between">
                <span className="mr-2">
                  <Link href="/" className="">
                    © 2024 OptiFlow Inator
                  </Link>
                </span>
                <span className="mr-2 ml-4 space-x-2">
                  <Link href="/optiflow" className="">
                    Feed
                  </Link>
                  <Link href="/" className="">
                    Home
                  </Link>
                  <Link href="/about" className="">
                    About
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Rightbar;
