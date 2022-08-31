import React, { useState } from 'react'
import '../App.css';

export default function TextForm(props) {
    const itemstyle = {
        color: 'green'
    }
    const itemstyle1 = {
        color: 'orange'
    }
    const onClickUpHandler = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to uppercase!", "success");
    }
    const onClickLcHandler = () => {
        let newtext = text.toLocaleLowerCase();
        setText(newtext)
        props.showAlert("Converted to lowercase!", "success");
    }

    const onChangeHandler = (event) => {
        setText(event.target.value)

    }
    const onClickCt = () => {
        let newText = ''
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }
    const onClickCopy = () => {
        var text = document.getElementById("cont");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard", "success");
    }
    const onClickRs = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }

    const [text, setText] = useState('')
    return (
        <span className='cont'>
            <h2 >{props.heading}</h2>
            <textarea name="" value={text} onChange={onChangeHandler} cols="100" rows="5" placeholder='Enter the Text' id='cont'></textarea>
            <br />
            <input type="submit" onClick={onClickUpHandler} value="Convert to UpperCase" className='upper'></input>
            <input type="submit" onClick={onClickLcHandler} value="Convert to LowerCase" className='upper'></input>
            <input type="submit" onClick={onClickCt} value="Clear Text" className='upper'></input>
            <input type="submit" onClick={onClickCopy} value="Copy Text" className='upper'></input>
            <input type="submit" onClick={onClickRs} value="Remove Extra Spaces" className='upper'></input>
            <h3 style={itemstyle}>Your Text Summery</h3>
            <div className='info'>
                <h5>Words:{text.split(' ').length}</h5>
                <h5>Characters:{text.length}</h5>
                <h5>Time to read:{text.split(" ").length * 0.008}</h5>
                <h4 style={itemstyle}>Preview</h4 >
                <p style={itemstyle1}>{text.length > 0 ? text : "Enter Somthing to preview "}</p>
            </div>

        </span>

    )
}
