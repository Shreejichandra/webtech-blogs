import React, { useEffect, useState } from "react";
import Header from "./Header";
import dummyData from "./dummy.json";
import FeedCard from "./FeedCard";
import IconButton from "@mui/material/IconButton";
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { useParams, useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

export default function Feed({ user, homePage }) {
  const [elements, setElements] = useState([]);

  const navigate = useNavigate();
  const Redirect = () => {
    navigate("/create");
  }

  useEffect(() => {

    let endpoint = "", requestOptions = {};

    if (user) {
      endpoint = "http://localhost:8000/articles";
      let headers = new Headers();
      headers.append("Authorization", "Bearer " + localStorage.getItem("token"));
      requestOptions = {
        method: "GET",
        headers
      }
    } else {
      endpoint = "http://localhost:8000/articles/all";
      requestOptions = {
        method: "GET"
      }
    }

    // Fetch the articles
    fetch(endpoint, requestOptions)
      .then(res => {
        return res.json();
      }).then(data => {
        const localElements = data.map((article) => {
          const date = new Date(article.createdAt);
          const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
          return <FeedCard article_id={article._id} title={article.title} text={article.body} author={article.author.name} authorId={article.author._id} date={date.toLocaleDateString("en-US", dateOptions)} />;
        });
        setElements(localElements);
      });
  }, []);

  return (
    <div>
      <div className={homePage ? "feed" : "user-feed"}>
        {/* <Header /> */}
        {elements}
      </div>
      <div style={{ position: "fixed", bottom: "1%", right: "1%" }}>
        <Tooltip title="write" placement="bottom" >
          <IconButton onClick={Redirect}>
            <Fab color="secondary" aria-label="edit">
              <EditIcon />
            </Fab>
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}
