"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const List = () => {
  const [allPosts, setAllPosts] = useState([]);

  const fetchPosts = async () => {
    // setLoading(true);
    const response = await fetch("/api/post");
    const data = await response.json();

    setAllPosts(data);
    // setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="w-full min-h-[90vh] md:pr-5 flex flex-col justify-center">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Topics</CardTitle>
          <CardDescription>Explore and discover new topics</CardDescription>
        </CardHeader>
        <CardContent>
          {allPosts.map((post: any, index) => (
            <div key={index} className="md:w-1/3 lg:w-1/4 px-2 mb-4">
              <div className="bg-secondary p-4 rounded-lg">
                <div className="text-xl font-semibold mb-2">
                  {index + 1}. #{post?.tag}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default List;
