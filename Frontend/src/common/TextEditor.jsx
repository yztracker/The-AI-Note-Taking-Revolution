import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';




function TextEditor({value, setValue}) {


    const modules = {
        // #3 Add "image" to the toolbar
        toolbar: [["bold", "italic", "image"]],
    }
    

    
    return (
     <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} />
      );
}

export default TextEditor;

