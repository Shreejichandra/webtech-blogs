import React, { useEffect, useState } from "react";
import Feed from "./Feed";
import "./styles.css";

export default function UserArticles() {
  const [name, setName] = useState("");

  useEffect(() => {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + localStorage.getItem("token"));

    fetch("http://localhost:8000/users/me", { 
      method: "GET",
      headers
    }).then(res => {
      return res.json();
    }).then(data => {
      setName(data.name);
    });
  }, []);

  return (
    <div class="container">
      <div class="split left" overflow="scroll">
        <img alt={ name } src={`http://localhost:8000/users/${localStorage.getItem("user_id")}/avatar`} />
        <h2>{ name }</h2>{" "}
      </div>

      <div class="split right">
        <Feed user={ true } homePage={ false } />
      </div>
    </div>
  );
}
