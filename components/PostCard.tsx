//@ts-nocheck
"use client";

import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import PostEditor from "./PostEditor";

const dataCard = ({ data, handleEdit, handleDelete, handleTagClick }: any) => {
  const session = useSession();

//   console.log(session.data?.user?.id);
//   console.log(data.creator?._id);
  const pathName = usePathname();
  const router = useRouter();

  //   console.log(data.post);

  const handleProfileClick = () => {
    console.log(data);

    if (data.creator?._id === session?.user?.id)
      return router?.push("/profile");

    router.push(`/profile/${data.creator?._id}?name=${data.creator?.username}`);
  };

  return (
    <Card className="min-h-[60vh] w-full bg-white dark:bg-gray-700">
      <CardHeader>
        {data.creator ? (
          <div className="flex justify-between">
            <div onClick={handleProfileClick}>
              <div className="flex">
                <Image
                  src={data.creator?.image}
                  alt="user_image"
                  width={40}
                  height={40}
                  className="rounded-full object-cover object-center w-10 h-10"
                />
                <div className="ml-2 cursor-pointer">
                  <div className="font-bold">
                    <div onClick={handleProfileClick} className="text-sm">
                      {data.creator?.username}
                    </div>
                  </div>
                  <div className="text-sm">{data.creator?.email}</div>
                </div>
              </div>
              {/* <span className="text-grey-dark">15 Dec 2017</span> */}
            </div>
            <div></div>
          </div>
        ) : (
          <div className="justify-between flex font-bold">Unknown User</div>
        )}
      </CardHeader>
      <CardContent>
        <PostEditor postCode={data.post} />
      </CardContent>
      <CardFooter>
        <div className="">
          <span className="flex justify-center items-center">
            {session?.data?.user?.id === data.creator?._id &&
              pathName === "/profile" && (
                <div className="flex-center gap-4 border-t border-gray-100">
                  <p
                    className="font-inter text-sm green_gradient cursor-pointer"
                    onClick={handleEdit}
                  >
                    Edit
                  </p>
                  <p
                    className="font-inter text-sm orange_gradient cursor-pointer"
                    onClick={handleDelete}
                  >
                    Delete
                  </p>
                </div>
              )}
          </span>
          <span>
            <p
              className="font-inter text-sm blue_gradient cursor-pointer"
              onClick={() => handleTagClick && handleTagClick(data.tag)}
            >
              #{data.tag}
            </p>
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default dataCard;
