import React from "react";
import ReactDOM from "react-dom";
import Feed from "./Feed";
import "./styles.css";

export default function UserArticles() {
  return (
    <div class="container">
      <div class="split left" overflow="scroll">
        <img alt="Emy Sharp" src="logo192.png" />
        <p>Shreeji Chandra</p>{" "}
      </div>

      <div class="split right">
        <Feed homePage={false} />
      </div>
    </div>
  );
}
