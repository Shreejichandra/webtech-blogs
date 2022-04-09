import React from "react";
import Header from "./Header";
import dummyData from "./dummy.json";
import FeedCard from "./FeedCard";

export default function Feed() {
  const elements = dummyData.map((feed) => {
    return <FeedCard title={feed.title} text={feed.text} />;
  });

  return (
    <div>
      {/* <Header /> */}
      {elements}
    </div>
  );
}
