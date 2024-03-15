//@ts-nocheck
"use client";

import React, { useState } from "react";
import Rightbar from "./Rightbar";
import Feed from "./Feed";
import MobileRightbar from "./MobileRightbar";


export const dynamic = "force-dynamic";

const FeedContainer = ({ allPosts }: any) => {
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item.creator?.username) ||
        regex.test(item.tag) ||
        regex.test(item.post)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <div className="">
      <div className="fixed top-4 right-5 z-50  md:hidden">
        <MobileRightbar
          allPosts={allPosts}
          searchtext={searchText}
          setSearchText={setSearchText}
          searchedResults={searchedResults}
          setSearchedResults={setSearchedResults}
          handleChange={handleSearchChange}
          handleTagClick={handleTagClick}
        />
      </div>

      <Rightbar
        allPosts={allPosts}
        searchtext={searchText}
        setSearchText={setSearchText}
        searchedResults={searchedResults}
        setSearchedResults={setSearchedResults}
        handleChange={handleSearchChange}
        handleTagClick={handleTagClick}
      />
      <div className="md:mr-[360px]">
        <Feed
          allPosts={allPosts}
          searchtext={searchText}
          setSearchText={setSearchText}
          searchedResults={searchedResults}
          setSearchedResults={setSearchedResults}
          handleChange={handleSearchChange}
          handleTagClick={handleTagClick}
        />
      </div>
    </div>
  );
};

export default FeedContainer;
