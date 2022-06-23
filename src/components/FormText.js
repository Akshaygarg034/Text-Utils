import React, { useState } from 'react';

export default function FormText(props) {

    function changeUpper() {
        let newText = text.toUpperCase();
        setText(newText);
    }
    function changeLower() {
        let newText = text.toLowerCase();
        setText(newText);
    }
    function clearText() {
        setText('');
    }
    function copyText() {
        var textToCopy = document.getElementById('myBox');
        textToCopy.select();
        navigator.clipboard.writeText(text);
    }
    function removeExtraSpaces() {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    }
    function changeValue(e) {
        setText(e.target.value);
    }

    const [text, setText] = useState('');
    var total_words;
    if (text === '') {
        total_words = 0;
    }
    else {
        total_words = text.split(' ').length;
    }
    return (
        <>
            <div className="container">
                <h2 className="my-3">{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? '#f1f1f2' : 'black' }} id="myBox" value={text} onChange={changeValue} rows="8" placeholder="Enter your text"></textarea>
                </div>
                <button className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'}`} onClick={changeUpper}>Uppercase</button>
                <button className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} mx-2`} onClick={changeLower}>Lowercase</button>
                <button className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} mx-2`} onClick={copyText}>Copy</button>
                <button className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} mx-2`} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-danger mx-2" onClick={clearText}>Clear</button>
            </div>
            <div className="container">
                <h2 className="my-3">Your Text Summary</h2>
                <p style={{fontWeight: 500, color: props.mode==='dark'?'white':'black'}}>{total_words} words {text.length} characters</p>
            <p style={{fontWeight: 500, color: props.mode==='dark'?'white':'black'}}>{0.008 * total_words} Minutes read</p>
        </div>
        </>
    )
}
