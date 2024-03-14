"use client";

import { Home, LogIn, LogOut, MoreHorizontal, Settings } from "lucide-react";
import React from "react";
import SidebarButton from "./SidebarButton";
import { SidebarItems } from "@/types";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

interface SIdebarDesktopProps {
  sidebarItems: SidebarItems;
}

const SidebarDesktop = (props: SIdebarDesktopProps) => {
  const pathname = usePathname();
  const session = useSession();

  //   console.log(session);

  return (
    <aside className="w-[270px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r bg-white dark:bg-black">
      <div className="h-full px-3 py-4">
        {/* <h3 className="mx-3 text-lg font-semibold text-foreground">Optiflow</h3> */}
        <h3>
          <Link
            href={`/`}
            className="text-2xl md:text-3xl font-bold flex gap-x-1 flex-col md:flex-row leading-tight"
          >
            <span>OptiFlow</span>
            <span className="text-green-600">Inator</span>
          </Link>
        </h3>
        <div className="mt-5">
          <div className="flex flex-col gap-1 w-full">
            {props.sidebarItems.links.map((link, index) => (
              <Link key={index} href={link.href}>
                <SidebarButton
                  icon={link.icon}
                  className="w-full"
                  variant={pathname === link.href ? "secondary" : "ghost"}
                >
                  {link.label}
                </SidebarButton>
              </Link>
            ))}
            {session?.data ? (
              props.sidebarItems.extras
            ) : (
              <>
                <div className="flex flex-col gap-2">
                  <SidebarButton
                    className="w-full justify-center"
                    variant={"default"}
                    onClick={() => signIn()}
                  >
                    Login
                  </SidebarButton>
                </div>
              </>
            )}
          </div>
          <div className="absolute left-0 bottom-3 w-full px-3">
            <Separator className="absolute -top-3 left-0 w-full" />
            <Popover>
              {session?.data ? (
                <>
                  <PopoverTrigger asChild>
                    <Button variant={"ghost"} className="w-full justify-start">
                      <div className="flex justify-between items-center w-full">
                        <div className=" flex gap-2">
                          <Avatar className="w-5 h-5">
                            <AvatarImage
                              src={session?.data?.user?.image || ""}
                              className="object-cover object-center"
                            />
                            <AvatarFallback>💞</AvatarFallback>
                          </Avatar>
                          <span>{session?.data?.user?.name}</span>
                        </div>
                        <MoreHorizontal size={20} />
                      </div>
                    </Button>
                  </PopoverTrigger>
                </>
              ) : (
                <>
                  <PopoverTrigger asChild>
                    <Button variant={"ghost"} className="w-full justify-start">
                      <div className="flex justify-between items-center w-full">
                        <div className=" flex gap-2">
                          <span>Login to Optiflow Inator</span>
                        </div>
                        <MoreHorizontal size={20} />
                      </div>
                    </Button>
                  </PopoverTrigger>
                </>
              )}

              <PopoverContent className="mb-2 w-56 p-3">
                {session?.data ? (
                  <>
                    <div className="mb-2">
                      <Image
                        src={session?.data?.user?.image || ""}
                        width={800}
                        height={800}
                        className="w-full object-center object-cover aspect-square rounded-md"
                        alt="profile"
                      />
                    </div>
                    <div className="space-y-1">
                      <SidebarButton
                        size={`sm`}
                        icon={LogOut}
                        className="w-full"
                        onClick={() => signOut()}
                      >
                        Log Out
                      </SidebarButton>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-1">
                      <SidebarButton
                        size={`sm`}
                        icon={LogIn}
                        className="w-full"
                        onClick={() => signIn()}
                      >
                        Login
                      </SidebarButton>
                    </div>
                  </>
                )}
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarDesktop;
