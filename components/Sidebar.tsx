"use client";

import React from "react";
import SidebarDesktop from "./SidebarDesktop";
import {
  BookmarkPlus,
  Home,
  Info,
  List,
  MoreHorizontal,
  StickyNote,
  User,
} from "lucide-react";
import { SidebarItems } from "@/types";
import SidebarButton from "./SidebarButton";
import PostDialog from "./PostDialog";



const sidebarItems: SidebarItems = {
  links: [
    {
      label: "Feed",
      href: "/optiflow",
      icon: StickyNote,
    },
    {
      label: "Home",
      href: "/",
      icon: Home,
    },
    {
      label: "About",
      href: "/optiflow/about",
      icon: Info,
    },
    {
      label: "Topics",
      href: "/optiflow/list",
      icon: List,
    },
    {
      label: "Bookmarks",
      href: "/optiflow/bookmarks",
      icon: BookmarkPlus,
    },
    {
      label: "Profile",
      href: "/optiflow/profile",
      icon: User,
    },
  ],

  extras: (
    <div className="flex flex-col gap-2">
      {/* <SidebarButton icon={MoreHorizontal} className="w-full">
        More
      </SidebarButton> */}

      <PostDialog>
        <SidebarButton className="w-full justify-center" variant={"default"}>
          Post
        </SidebarButton>
      </PostDialog>
    </div>
  ),
};

const Sidebar = () => {
  return <SidebarDesktop sidebarItems={sidebarItems} />;
};

export default Sidebar;
