"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Profile from "@/components/Profile";

const Page = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [myPosts, setMyPosts] = useState([]);

  // console.log(session?.user?.id);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user?.id}/posts`);
      const data = await response.json();

      setMyPosts(data);
    };

    if (session?.user?.id) fetchPosts();
  }, [session?.user?.id]);

  const handleEdit = (post: any) => {
    router.push(`/optiflow/update-post?id=${post._id}`);
  };

  // console.log(myPosts)

  const handleDelete = async (post: any) => {
    const hasConfirmed = confirm("Are you sure you want to delete this post?");

    if (hasConfirmed) {
      try {
        await fetch(`/api/post/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = myPosts.filter(
          (item: any) => item._id !== post._id
        );

        setMyPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Profile
        name="My"
        desc="Copy and Share the posts from the community"
        data={myPosts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Page;
