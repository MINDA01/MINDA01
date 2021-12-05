import React from "react";
import "./Feed.css";
import Post from "./Post";
import QuoraBox from "./QuoraBox";

function Feed() {
  return (
    <div className="Feed">
      <QuoraBox />
      <Post />
    </div>
  );
}

export default Feed;
