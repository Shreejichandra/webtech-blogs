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

// <Grid container spacing={2}>
//   <Grid item xs={8}>
//     <Item>xs=8</Item>
//   </Grid>
//   <Grid item xs={4}>
//     <Item>xs=4</Item>
//   </Grid>
// </Grid>

export default function FeedCard(props) {
  const classes = useStyles();

  return (
    <div className="feedcard">
      {/* <Grid container justify="center"> */}
      <Card className={classes.root} style={{ backgroundColor: "#383838" }}>
        <CardActionArea component={RouterLink} to={`/article/${props.id}`}>
          <h2>{props.title}</h2>

          <CardMedia
            component="img"
            height="194"
            // image="./card1.jpg"
            image={require("./card1.jpg")}
            alt="Paella dish"
          />

          <CardContent>
            {/* <Typography variant="body2" className="card-content"> */}
            <p className="card-content"> {props.text}</p>

            {/* </Typography> */}
          </CardContent>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p
              style={{
                marginLeft: "13px",
                color: "#d4cccb",
                fontSize: "12px",
              }}
            >
              September 14, 2016
            </p>
            <CardHeader
              className="card-header"
              avatar={
                <Avatar alt="Emy Sharp" src={require("./my_picture.jpg")} />
              }
              title="Shreeji Chandra"
              // subheader="September 14, 2016"
              //   subheader={
              //     <Typography sx={{ color: "rgb(255, 46, 227)" }}>
              //       September 14, 2016
              //     </Typography>
              //   }
              // action={<FavoriteIcon />}
            />
          </div>
        </CardActionArea>
      </Card>
      {/* </Grid> */}
    </div>
  );
}
