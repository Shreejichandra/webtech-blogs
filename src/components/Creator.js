import { useEffect, useState } from "react";
import createEditor from "../utils/editor";
import "./../../node_modules/medium-editor/dist/css/medium-editor.min.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

function Creator() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [selectedCover, setSelectedCover] = useState(undefined);
  const [preview, setPreview] = useState(undefined);

  // Initialize the editors
  useEffect(() => {
    createEditor(".editable-title", "Title", setTitle, undefined);
    createEditor(".editable-text", "Body", setBody, undefined);
  }, []);

  // For Cover image preview
  useEffect(() => {
    if (!selectedCover) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedCover);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedCover]);

  const selectCoverImage = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedCover(undefined);
      return;
    }

    setSelectedCover(e.target.files[0]);
  };

  const saveArticle = () => {
    console.log(title);
    console.log(body);

    let headers = new Headers();
    headers.append("Authorization", "Bearer " + localStorage.getItem("token"));
    headers.append("Content-Type", "application/json");
    const payload = { title, body };

    fetch("http://localhost:8000/articles", {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);

        // Cover Upload
        if (selectedCover) {
          const formData = new FormData();
          formData.append("cover", selectedCover);

          let headers = new Headers();
          headers.append("Authorization", "Bearer " + localStorage.getItem("token"));

          fetch("http://localhost:8000/articles/" + data._id + "/cover", {
            method: "POST",
            headers,
            body: formData,
          }).then((res) => {
            console.log(res.status);
          });
        }
      });
  };

  const Input = styled("input")({
    display: "none",
  });

  return (
    <div>
      <div className="form-group">
        <textarea
          col="1"
          className="editor-title"
          id="editor-title"
          hidden
        ></textarea>
      </div>

      <h2 className="form-group">
        <textarea id="title" className="editable-title"></textarea>
      </h2>

      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          type="file"
          onChange={selectCoverImage}
        />
        <Button
          variant="contained"
          component="span"
          style={{
            borderRadius: 35,
            backgroundColor: "#8b19e3",
            fontSize: "12px",
            margin: "1% 10%",
          }}
        >
          Upload Image
        </Button>
        <img
          src={selectedCover ? preview : require("./card1.jpg")}
          alt="blog_image"
          className="cover"
        />
      </label>
      <div className="form-group">
        <textarea
          col="1"
          className="editor-text"
          id="editor-text"
          hidden
        ></textarea>
      </div>

      <div className="form-group">
        <textarea id="title" className="editable-text"></textarea>
      </div>

      <Button
        variant="contained"
        style={{
          borderRadius: 35,
          backgroundColor: "#8b19e3",
          fontSize: "18px",
          padding: "8px 36px",
          margin: "1% 45%",
        }}
        onClick={saveArticle}
      >
        Save
      </Button>
      {/* <button onClick={handleClick}>Close</button>
            <button onClick={handleOpen}>Open</button> */}
    </div>
  );
}

export default Creator;
