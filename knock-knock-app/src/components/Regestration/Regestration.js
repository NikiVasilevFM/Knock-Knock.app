import React, { useState } from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { register } from '../../redux/actions';
import { sendAuthMessage } from '../../websocketClient'
import './Regestration.css';

function Regestration(props) {
    const [error, setError] = useState(null)
    const [inputText, setInputText] = useState("");
    const history = useHistory()

    function navigateToChat () {
        history.push('/start')
    }
    function handleRegestredRequest() {
        props.regestrateRequest(inputText).catch((err) => {
            setError(err)
        });
    };

    return (
        <div className = "regestration-wrapper">
            <div className = "regestration-form">
                <p className = "title-form">Welcome!</p>
                <p className = "text-form">Please! Go through the simple registration procedure.</p>
                {props.login === null && (
                    <div className = "input-form">
                        <input value={inputText} onChange = {(event) => setInputText(event.target.value)} placeholder = "Enter your name"></input>
                        <button onClick = {handleRegestredRequest}>Register me</button>
                    </div>
                )}
                <div className = "show-id">
                    {props.login !== null && (
                        <>
                            <p>
                                Your id: {props.login}.<br />Save it somewhere!
                                
                            </p>
                            <button onClick={navigateToChat}>I stored it, get me to the chat!</button>
                        </>
                    )}
                    {error !== null && <p>{error}</p>}
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = ({ login }) => ({ login })
const mapDispatchToProps = (dispatch) => ({
    regestrateRequest: (nickName) => {
        return fetch('http://localhost:4567/regestration',
        {method: "POST", headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({nickName})}).then((info) => {
            if(info.ok) {
                return info.json()
            } else {
                throw new Error (info.status);
            }
        }).then(({ pass }) => {
            sendAuthMessage(nickName)
            dispatch(register(pass))
            return pass
        })
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Regestration);