import { useState } from "react";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DoneIcon from "@mui/icons-material/Done";
import { useHistory, useParams } from "react-router-dom";
import createEditor from "../utils/editor";
import Typography from "@mui/material/Typography";
import { style } from "@mui/system";

const ArticleView = () => {
  const [isliked, setIsLiked] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [bodyEditor, setBodyEditor] = useState(null);
  const [titleEditor, setTitleEditor] = useState(null);
  const [title, setTitle] = useState("ArticleTitle");
  const [body, setBody] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a lorem orci. Aenean efficitur quam vel dui maximus hendrerit. Pellentesque vitae nunc lacinia, semper eros non, varius ex. Suspendisse vel augue in lacus malesuada sagittis. Nulla tristique nec libero ac dignissim. Nam eget leo quis enim pellentesque interdum. Quisque porttitor nisl tellus, ac bibendum nunc rhoncus sed."
  );

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
  const xyz = useParams();
  console.log(xyz);
  // const { id } = props.match.params
  // console.log(props)

  const handleDoneEditing = () => {
    setIsEditing(false);
    titleEditor.destroy();
    bodyEditor.destroy();
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setAnchorEl(null);
    setTitleEditor(
      createEditor(".article-title", "Edit me", setTitle, ".article-title")
    );
    setBodyEditor(
      createEditor(".article-body", "Edit me", setBody, ".article-body")
    );
  };

  const handleDeleteClick = () => {
    console.log("Delete");
    setAnchorEl(null);
  };

  const menuOptions = [
    {
      name: "Edit",
      onClick: handleEditClick,
    },
    {
      name: "Delete",
      onClick: handleDeleteClick,
    },
  ];

  return (
    <div className="article">
      {/* <h2>{this.props.match.params.id}</h2> */}
      <CardHeader
        className="article-card-header author"
        action={
          <div>
            {isEditing && (
              <IconButton
                aria-label="more"
                aria-haspopup="true"
                aria-controls="long-menu"
              >
                <DoneIcon
                  onClick={handleDoneEditing}
                  style={{ color: "white" }}
                />
              </IconButton>
            )}

            <div style={{ display: "inline", border: "1px solid white", borderRadius: "10%", padding: "10px 8px 10px 0px" }}>
              <IconButton
                aria-label="more"
                onClick={handleLike}
                aria-haspopup="true"
                aria-controls="long-menu"
              >
                {isliked ? (
                  <FavoriteIcon style={{ color: "red" }} />
                ) : (
                  <FavoriteBorderOutlinedIcon style={{ color: "white" }} />
                )}
              </IconButton>
              45
            </div>
            <IconButton
              aria-label="more"
              onClick={handleClick}
              aria-haspopup="true"
              aria-controls="long-menu"
            >
            </IconButton>
            <IconButton
              aria-label="more"
              onClick={handleClick}
              aria-haspopup="true"
              aria-controls="long-menu"
            >
              <MoreVertIcon onClick={handleClick} style={{ color: "white" }} />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              keepMounted
              onClose={handleClose}
              open={open}
            >
              {menuOptions.map((option) => (
                <MenuItem key={option.name} onClick={option.onClick}>
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </div>
        }
        avatar={< Avatar alt="Emy Sharp" src={require("./logo192.png")} />}
        title="Shrimp and Chorizo Paella"
        // subheader="September 14, 2016"
        subheader={
          < Typography sx={{ color: "white" }}> September 14, 2016</Typography >
        }
      />
      < h2 className="article-title" > Article Title</h2 >
      <img src={require("./card1.jpg")} alt="blog_image" className="cover" />

      {
        isEditing ? (
          <p className="article-body-edit">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a lorem
            orci. Aenean efficitur quam vel dui maximus hendrerit. Pellentesque
            vitae nunc lacinia, semper eros non, varius ex. Suspendisse vel augue
            in lacus malesuada sagittis. Nulla tristique nec libero ac dignissim.
            Nam eget leo quis enim pellentesque interdum. Quisque porttitor nisl
            tellus, ac bibendum nunc rhoncus sed.
          </p>
        ) : (
          <p className="article-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a lorem
            orci. Aenean efficitur quam vel dui maximus hendrerit. Pellentesque
            vitae nunc lacinia, semper eros non, varius ex. Suspendisse vel augue
            in lacus malesuada sagittis. Nulla tristique nec libero ac dignissim.
            Nam eget leo quis enim pellentesque interdum. Quisque porttitor nisl
            tellus, ac bibendum nunc rhoncus sed.
          </p>
        )
      }
    </div >
  );
};

export default ArticleView;
