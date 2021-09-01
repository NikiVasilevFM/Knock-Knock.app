import React from 'react';
import './Messages.css';
import MessageHeating from '../../components/MessageHeating/MessageHeating';

function Messages(props) {
    return (
        <div className = "message-window">
            {props.messages.map((item, idx) => {
                return <MessageHeating key={`message-${idx}`} text = {item.text} type = {item.type} autorNickname = {item.autorNickname}/>
            })}
        </div>
    )
};

export default Messages;