import React from 'react';
import { useHistory } from 'react-router-dom'
import './Start.css';


function Start(props) {

    const history = useHistory();
    const navigate = (page) => {
        history.push(page)
    }
    return (
        <div className = "start-wrapper">
            <div className = "start-form">
                <p className = "start-text">Welcome!</p>
                <div className = "start-button">
                    <button onClick={() => navigate('/login')}>Sign in</button>
                    <p className = "or-text">or</p>
                    <button onClick={() => navigate('/regestration')}>Registration</button>
                </div>
            </div>
        </div>
    )
};

export default Start;