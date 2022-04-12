import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

import { Link as RouterLink } from "react-router-dom";
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from '@mui/icons-material/Share';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
});

const htmlToText = (html) => {
  let text = html;
  text = text.replace(/\n/gi, "");
  text = text.replace(/<style([\s\S]*?)<\/style>/gi, "");
  text = text.replace(/<script([\s\S]*?)<\/script>/gi, "");
  text = text.replace(/<a.*?href="(.*?)[\?\"].*?>(.*?)<\/a.*?>/gi, " $2 $1 ");
  text = text.replace(/<\/div>/gi, "\n\n");
  text = text.replace(/<\/li>/gi, "\n");
  text = text.replace(/<li.*?>/gi, "  *  ");
  text = text.replace(/<\/ul>/gi, "\n\n");
  text = text.replace(/<\/p>/gi, "\n\n");
  text = text.replace(/<br\s*[\/]?>/gi, "\n");
  text = text.replace(/<[^>]+>/gi, "");
  text = text.replace(/^\s*/gim, "");
  text = text.replace(/ ,/gi, ",");
  text = text.replace(/ +/gi, " ");
  text = text.replace(/\n+/gi, "\n\n");
  return text;
};


export default function FeedCard(props) {
  const classes = useStyles();

  return (
    <div className="feedcard">
      <Card className={classes.root} style={{ backgroundColor: "#383838" }}>
        <CardActionArea component={RouterLink} to={`/article/${props.article_id}`}>
          <h2>{htmlToText(props.title)}</h2>

          <CardMedia
            component="img"
            height="194"
            // image="./card1.jpg"
            image={`http://localhost:8000/articles/${props.article_id}/cover`}
            alt="Paella dish"
          />

          <CardContent>
            <p className="card-content"> {htmlToText(props.text).substring(0, 200) + (props.text.length > 200 ? "..." : "")}</p>
          </CardContent>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p
              style={{
                marginLeft: "13px",
                color: "#d4cccb",
                fontSize: "12px",
              }}
            >
              {props.date}
              {/* September 14, 2016 */}
            </p>
            <CardHeader
              className="card-header"
              avatar={
                <Avatar alt={props.author} src={`http://localhost:8000/users/${props.authorId}/avatar`} />
              }
              title={props.author}
            />
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
}
