import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

const App = () => {
  const [isliked, setIsLiked] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const MyOptions = ["Edit", "Delete"];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLike = (event) => {
    setIsLiked(!isliked);
  };
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <CardHeader
        action={
          <div>
            <IconButton
              aria-label="more"
              onClick={handleLike}
              aria-haspopup="true"
              aria-controls="long-menu"
            >
              {isliked ? (
                <FavoriteIcon style={{ color: "red" }} />
              ) : (
                <FavoriteBorderOutlinedIcon />
              )}
            </IconButton>

            <IconButton
              aria-label="more"
              onClick={handleClick}
              aria-haspopup="true"
              aria-controls="long-menu"
            >
              <MoreVertIcon onClick={handleClick} />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              keepMounted
              onClose={handleClose}
              open={open}
            >
              {MyOptions.map((option) => (
                <MenuItem key={option} onClick={handleClose}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        }
        avatar={<Avatar alt="Emy Sharp" src="logo192.png" />}
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <h2>Article Title</h2>
      <img src="./logo192.png" alt="blog_image" />

      <p>
        Entrypoint main 2.47 MiB (2.29 MiB) = static/js/bundle.js 2.46 MiB
        main.1a7c99f6f2704742a4a2.hot-update.js 3.47 KiB 2 auxiliary assets
        cached modules 2.58 MiB [cached] 674 modules runtime modules 32.7 KiB 16
        modules ./src/components/ArticleView.js 1.93 KiB [built] [code
        generated] webpack 5.72.0 compiled successfully in 240 ms
      </p>
    </div>
  );
};

export default App;
