import MediumEditor from 'medium-editor'

const createEditor = (editorClass, placeholder, setter, elements) => {
    const editor = new MediumEditor(editorClass ,{ 
        autoLink: true,
        delay: 1000,
        targetBlank: true,
        toolbar: {
            buttons: [
            'bold', 
            'italic', 
            'quote', 
            'underline', 
            'anchor', 
            'h1',
            'h2', 
            'h3',
            'h4',
            'h5',
            'h6',
            'strikethrough',
            'subscript',
            'superscript',
            'pre',
            'html',
            'justifyCenter'
            ],
            diffLeft: 25,
            diffTop: 10,
        },
        anchor: {
            placeholderText: 'Enter a link',
            customClassOption: 'btn',
            customClassOptionText: 'Create Button'
        },
        paste: {
            cleanPastedHTML: true,
            cleanAttrs: ['style', 'dir'],
            cleanTags: ['label', 'meta'],
            unwrapTags: ['sub', 'sup']
        },
        anchorPreview: {
            hideDelay: 300
        },
        placeholder: {
            text: placeholder
        }
    })    

    editor.subscribe('editableInput', (ev, editable) => {
        if(typeof document !== 'undefined') {
            // this.setstate({
            //     title: document.getelementbyid('editor-title').value,
            //     // text: editor.getcontent(0),
            //     // description: `${editor.getcontent(0).substring(0,30).tostring()}...`
            // })
            setter(editor.getContent(0))
        }
    })

    if (elements)
        editor.addElements(elements)
}

export default createEditor;