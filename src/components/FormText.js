import React, { useState } from 'react';

export default function FormText(props) {

    function changeUpper() {
        let newText = text.toUpperCase();
        setText(newText);
    }
    function changeValue(e) {
        setText(e.target.value);
    }

    const [text, setText] = useState('');
    return (
        <div className="container">
            <h2 className="my-3">{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="textArea" value={text} onChange={changeValue} rows="8" placeholder="Enter your text"></textarea>
            </div>
            <button className="btn btn-primary" onClick={changeUpper}>Uppercase</button>
        </div>
    )
}
