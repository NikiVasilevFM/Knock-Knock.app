import React, { useState } from 'react';
import { sendMessage } from '../../websocketClient';
import './Typing.css';

function Typing() {

    const [text, setText] = useState("")
    const handleClick = () => {
        sendMessage(text)
        setText("")
    }
    return (
        <div className = "typing-form">
            <input value={text} onChange={(e) => setText(e.target.value)} className ="input-style" placeholder = "Enter text"></input>
            <button onClick = {handleClick} className = "btn">Send</button>
        </div>
    )
};

export default Typing;