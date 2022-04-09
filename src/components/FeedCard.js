import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@mui/material/CardActions";
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from '@mui/icons-material/Share';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
});

export default function FeedCard(props) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <h3>{props.title}</h3>
        <CardMedia
          component="img"
          height="194"
          image="logo192.png"
          alt="Paella dish"
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.text}
          </Typography>
        </CardContent>
        <CardHeader
          avatar={<Avatar alt="Emy Sharp" src="logo192.png" />}
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
          action={<FavoriteIcon />}
        />
        {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        {/* </CardActions> */}
      </Card>
    </div>
  );
}
