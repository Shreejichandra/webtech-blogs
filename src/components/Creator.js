import { useEffect, useState } from 'react'
import createEditor from '../utils/editor'
import './../../node_modules/medium-editor/dist/css/medium-editor.min.css'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

function Creator() {
    const [title, setTitle] = useState("Enter Title...")
    const [text, setText] = useState("Enter Text...")
    const [e1, setE1] = useState(null);


    useEffect(() => {
        createEditor('.editable-title', 'Title', setTitle, undefined)
        setE1(createEditor('.editable', 'Edit me', setTitle, '.editable'))
        createEditor('.editable-text', 'Body', setText, undefined)
    }, [])

    const handleClick = () => {
        console.log(e1.getContent(0))
        e1.destroy();
    }

    const handleOpen = () => {
        setE1(createEditor('.editable', 'Edit me', setTitle, '.editable'))
    }

    const Input = styled('input')({
        display: 'none',
    });


    return (
        <div>
            <div className="form-group">
                <textarea col="1" className="editor-title" id="editor-title" hidden></textarea>
            </div>

            <h2 className="form-group">
                <textarea id="title" className="editable-title" ></textarea>
            </h2>

            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" type="file" />
                <Button variant="contained" component="span" style={{
                    borderRadius: 35,
                    backgroundColor: "#8b19e3",
                    fontSize: "12px",
                    margin: "1% 10%",
                }}>
                    Upload Image
                </Button>
                <img src={require("./card1.jpg")} alt="blog_image" className="cover" />
            </label>
            <div className="form-group">
                <textarea col="1" className="editor-text" id="editor-text" hidden></textarea>
            </div>

            <div className="form-group">
                <textarea id="title" className="editable-text" ></textarea>
            </div>

            <Button variant="contained" style={{
                borderRadius: 35,
                backgroundColor: "#8b19e3",
                fontSize: "18px",
                padding: "8px 36px",
                margin: "1% 45%"
            }}>Save</Button>
            {/* <button onClick={handleClick}>Close</button>
            <button onClick={handleOpen}>Open</button> */}
        </div>
    )
}

export default Creator