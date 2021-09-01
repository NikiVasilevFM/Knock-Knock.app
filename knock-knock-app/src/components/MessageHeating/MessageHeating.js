import React from 'react';
import './MessageHeating.css';

function MessageHeating(props) {
    console.log(props)
    return (
        <div className = {props.type === 1 ? "my-message" : "other-message"}>
            <p className = "message-style">{props.text}</p>
            <p>{props.autorNickname}</p>
        </div>
    )
};

export default MessageHeating;
