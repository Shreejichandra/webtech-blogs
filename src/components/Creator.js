import { useEffect, useState } from 'react'
import createEditor from '../utils/editor'
import './../../node_modules/medium-editor/dist/css/medium-editor.min.css'

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

    return (
        <div>
            <div className='editable'>
                Hiii
            </div>
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
            <button onClick={handleClick}>Close</button>
            <button onClick={handleOpen}>Open</button>
        </div>
    )
}

export default Creator