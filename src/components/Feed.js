import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import PostCard from "./PostCard";
import chitter from "../apis/chitter";

const Feed = () => {
  const [posts, setPosts] = useState("");

  const renderedList = () => {
    if (posts) {
      const renderedList = posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ));
      return renderedList;
    }
  };
  const renderedPosts = renderedList();

  useEffect(() => {
    const getPosts = async () => {
      const response = await chitter.get("/peeps");
      setPosts(response.data);
    };
    getPosts();

    return () => {
      setPosts({});
    }
  }, []);

  return posts ? (
    <div className="ui one column stackable center aligned page grid">
      <div className="ui feed column twelve wide">{renderedPosts}</div>
    </div>
  ) : (
    <div>
      <Loader />
    </div>
  );
};

export default Feed;
