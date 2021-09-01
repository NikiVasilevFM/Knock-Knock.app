import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sendAuthMessage } from '../../websocketClient'
import { login } from '../../redux/actions';
import { useHistory } from 'react-router-dom';
import './Login.css';

function Login(props) {

    let [nickName, setnickName] = useState ("");
    let [login, setlogin] = useState ("");
    let [error, setError] = useState(null);

    const history = useHistory();
    const navigate = (page) => {
        history.push(page)
    };

    function handleLoginRequest() {
        props.loginRequest(nickName, login).then(() => {
            navigate('/start')
        }).catch((err) => {
            setError(err);
        });
    };

    return (
        <div className = "login-wrapper">
            <div className = "login-form">
                <p className = "sign-in">Sign in</p>
                <div className = "data-input">
                    <input onChange = {(event) => {setnickName(event.target.value)}} placeholder = "Enter your name"></input>
                    <input onChange = {(event) => {setlogin(event.target.value)}} placeholder = "Enter your id"></input>
                    <button onClick = {handleLoginRequest} >Entrance</button>
                </div>
                <div className = "logged-in">
                    {error !== null && <p>{error}</p>}
                    {/* {props.isAuth === true && <p>You are logged in!</p>} */}
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = ({ isAuth }) => ({ isAuth })
const mapDispatchToProps = (dispatch) => ({
    loginRequest: (nickName, pass) => {
        return fetch('http://localhost:4567/login', {method: "POST", headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({nickName, pass})}).then((info) => {
            if(info.ok) {
                sendAuthMessage(nickName);
                dispatch(login(pass))
            } else {
                throw new Error (info.status);
            }
        })
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);