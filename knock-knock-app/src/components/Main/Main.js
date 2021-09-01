import React from 'react';
import { connect } from 'react-redux';
import './Main.css';
import Messages from '../../components/Messages/Messages';
import Typing from '../../components/Typing/Typing';

function Main(props) {
    return (
        <div className = "main">
            <Messages messages = {props.messages}/>
            <Typing />
        </div>
    )
};

const mapStateToProps = ({ messages }) => ({
    messages,
})

export default connect(mapStateToProps)(Main);