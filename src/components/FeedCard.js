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
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from "@mui/icons-material/Favorite";
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
      {/* <Link underline='none' component={RouterLink} to='/article'></Link> */}
      <Card className={classes.root}>
        <CardActionArea component={RouterLink} to={`/article/${props.id}`}>
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
        </CardActionArea>
      </Card>
    </div>
  );
}
