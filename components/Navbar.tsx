"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [state, setState] = React.useState(false);

  const session = useSession();

  const menus = [
    { title: "Home", path: "/" },
    { title: "About", path: "/optiflow/about" },
    { title: "Community", path: "/optiflow" },
  ];

  return (
    <div className="pb-24 flex items-center justify-center w-full">
      <header className="px-4 py-3 shadow text-gray-800 w-full h-max bg-green-50/90 dark:bg-black dark:text-white fixed md:top-3 top-0 max-w-7xl mx-auto rounded-md z-50">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            aria-label="Back to homepage"
            className=" flex md:justify-between justify-between items-center gap-2"
          >
            <Image
              height={50}
              width={50}
              className="bg-cover mx-auto bg-center object-cover rounded-full"
              src="/images/logo.jpg"
              alt="logo"
            />
            <span className="text-2xl md:text-3xl font-bold flex gap-x-1 flex-col md:flex-row leading-tight">
              <span>OptiFlow</span>
              <span className="text-green-600">Inator</span>
            </span>
          </Link>

          <div className="flex">
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 font-semibold hidden`}
            >
              <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0 mt-2 ml-5">
                {menus.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-gray-600 hover:text-green-600 text-base"
                  >
                    <Link href={item.path}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {session?.data?.user ? (
              <div className="gap-4 items-center ml-8 hidden md:flex">
                {session?.data?.user.image && (
                  <div className="mx-auto">
                    <Popover>
                      <PopoverTrigger>
                        <Image
                          src={session?.data?.user.image}
                          height={200}
                          width={200}
                          alt={
                            session?.data?.user.name
                              ? session?.data?.user.name
                              : "user"
                          }
                          className="rounded-full w-10"
                        />
                      </PopoverTrigger>
                      <PopoverContent className="flex flex-col gap-4 justify-between">
                        <div className="flex gap-2 items-center">
                          <Image
                            src={session?.data?.user.image}
                            height={200}
                            width={200}
                            alt={
                              session?.data?.user.name
                                ? session?.data?.user.name
                                : "user"
                            }
                            className="rounded-full w-10"
                          />
                          <span className="text-lg font-semibold">
                            {session?.data?.user.name}
                          </span>
                        </div>

                        <Button onClick={() => signOut()}>Sign Out</Button>
                      </PopoverContent>
                    </Popover>
                  </div>
                )}
                {/* <div className="text-xl font-semibold">
                  User Name: {session?.data?.user.name}
                </div> */}
              </div>
            ) : (
              <Link href={`/api/auth/signin`}>
                <Button className="ml-8" size={`lg`}>
                  Sign In
                </Button>
              </Link>
            )}
          </div>
          <div className="md:hidden flex gap-3 items-center">
            {session?.data?.user?.image && (
              <div className="mx-auto">
                <Popover>
                  <PopoverTrigger>
                    <div className="flex gap-2 items-center">
                      <Image
                        src={session?.data?.user.image}
                        height={200}
                        width={200}
                        alt={
                          session?.data?.user.name
                            ? session?.data?.user.name
                            : "user"
                        }
                        className="rounded-full w-10"
                      />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="flex flex-col gap-4 justify-between">
                    <div className="flex gap-2 items-center">
                      <Image
                        src={session?.data?.user.image}
                        height={200}
                        width={200}
                        alt={
                          session?.data?.user.name
                            ? session?.data?.user.name
                            : "user"
                        }
                        className="rounded-full w-10"
                      />
                      <span className="text-lg font-semibold">
                        {session?.data?.user.name}
                      </span>
                    </div>

                    <Button onClick={() => signOut()}>Sign Out</Button>
                  </PopoverContent>
                </Popover>
              </div>
            )}
            <Sheet>
              <SheetTrigger>
                <button
                  className="p-2 lg:hidden flex md:justify-center justify-start"
                  title="menu"
                >
                  <Menu />
                </button>
              </SheetTrigger>
              <SheetContent>
                <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0 mt-2 ml-5">
                  <li className="md:hidden">
                    {session?.data?.user?.image && (
                      <div className="mx-auto">
                        <Popover>
                          <PopoverTrigger>
                            <div className="flex gap-2 items-center">
                              <Image
                                src={session?.data?.user.image}
                                height={200}
                                width={200}
                                alt={
                                  session?.data?.user.name
                                    ? session?.data?.user.name
                                    : "user"
                                }
                                className="rounded-full w-10"
                              />
                              <span className="text-lg font-semibold">
                                {session?.data?.user.name}
                              </span>
                            </div>
                          </PopoverTrigger>
                          <PopoverContent className="flex flex-col gap-4 justify-between">
                            <div className="flex gap-2 items-center">
                              <Image
                                src={session?.data?.user.image}
                                height={200}
                                width={200}
                                alt={
                                  session?.data?.user.name
                                    ? session?.data?.user.name
                                    : "user"
                                }
                                className="rounded-full w-10"
                              />
                              <span className="text-lg font-semibold">
                                {session?.data?.user.name}
                              </span>
                            </div>

                            <Button onClick={() => signOut()}>Sign Out</Button>
                          </PopoverContent>
                        </Popover>
                      </div>
                    )}
                  </li>
                  {menus.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 hover:text-green-600 text-base"
                    >
                      <Link href={item.path}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}
