"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex items-center">
        <span className="">
          <Menu />
        </span>
      </SheetTrigger>
      <SheetContent>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
