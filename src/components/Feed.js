import React from "react";
import Header from "./Header";
import dummyData from "./dummy.json";
import FeedCard from "./FeedCard";

export default function Feed(props) {
  const elements = dummyData.map((feed) => {
    return <FeedCard title={feed.title} text={feed.text} />;
  });

  return (
    <div className={props.homePage ? "feed" : "user-feed"}>
      {/* <Header /> */}
      {elements}
    </div>
  );
}
