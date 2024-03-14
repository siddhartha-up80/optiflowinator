//@ts-nocheck
"use client";

import React from "react";
import { Card } from "./ui/card";
import PostCard from "./PostCard";

const Feed = ({
  allPosts,
  searchtext,
  setSearchText,
  searchedResults,
  setSearchedResults,
  handleChange,
  handleTagClick,
}: any) => {
  return (
    <div className="w-full flex flex-col justify-center gap-4 mx-auto">
      <section>
        <h1 className="text-2xl font-bold">
          Share, Explain and Optimise Code with OptiFlow Inator
        </h1>
      </section>
      <section className="flex flex-col gap-6">
        {searchtext ? (
          <>
            {searchedResults.map((data) => {
              return (
                <PostCard
                  key={data._id}
                  data={data}
                  handleTagClick={handleTagClick}
                />
              );
            })}
          </>
        ) : (
          <>
            {allPosts.map((data) => {
              return (
                <PostCard
                  key={data._id}
                  data={data}
                  handleTagClick={handleTagClick}
                />
              );
            })}
          </>
        )}
      </section>
    </div>
  );
};

export default Feed;
