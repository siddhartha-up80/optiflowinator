"use client";

import React from "react";

const MobileNav = () => {
  return (
    <div className="md:hidden">
      <div className="px-4 py-3 shadow text-gray-800 w-full h-max bg-green-50/90 dark:bg-black dark:text-white fixed md:top-3 top-0 max-w-7xl mx-auto rounded-md z-50">
        <div className="flex justify-center items-center">
          <span className="text-2xl md:text-3xl font-bold flex gap-x-1 flex-row leading-tight">
            <span>OptiFlow</span>
            <span className="text-green-600">Inator</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
