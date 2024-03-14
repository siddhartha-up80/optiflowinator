import React from "react";
import { Input } from "./ui/input";

const Rightbar = () => {
  return (
    <div>
      <aside className="w-[340px] min-h-screen fixed right-0 top-0 z-40 border-l bg-white dark:bg-black">
        <div className="h-full w-full px-3 py-4 flex gap-5 ">
          <div className="w-full">
            <Input
              type="text"
              placeholder="Search for tags or username..."
              required
              className="w-full"
            />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Rightbar;
