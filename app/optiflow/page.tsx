import FeedContainer from "@/components/FeedContainer";
import Rightbar from "@/components/Rightbar";

const getAllPosts = async () => {
  try {
    const response = await fetch("http:localhost:3000/api/post");

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const dynamic = "force-dynamic";

const Page = async () => {
  const allPosts = await getAllPosts();

  // console.log(allPosts);

  if (!allPosts) {
    return (
      <div>
        <Rightbar />
        <div className="mr-[360px]">Posts not found</div>
      </div>
    );
  }

  return (
    <FeedContainer allPosts={allPosts} />
  );
};

export default Page;
