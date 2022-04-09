import { useEffect, useState } from 'react'
import createEditor from '../utils/editor'
import './../../node_modules/medium-editor/dist/css/medium-editor.min.css'

function Creator() {
    const [title, setTitle] = useState("Enter Title...")
    const [text, setText] = useState("Enter Text...")

    useEffect(() => {
        createEditor('.editable-title', 'Title', setTitle, undefined)
        createEditor('.editable-text', 'Body', setText, undefined)
    }, [])

    const handleChange = (text, medium) => {
        setTitle(text);
    }

    return (
        <div>
            <div className="form-group">
                <textarea col="1" className="editor-title" id="editor-title" hidden></textarea>
            </div>

            <h2 className="form-group">
                <textarea id="title" className="editable-title" ></textarea>
            </h2>

            <div className="form-group">
                <textarea col="1" className="editor-text" id="editor-text" hidden></textarea>
            </div>

            <div className="form-group">
                <textarea id="title" className="editable-text" ></textarea>
            </div>
        </div>
    )
}

export default Creator