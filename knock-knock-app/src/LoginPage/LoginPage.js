import React from 'react';
import Login from '../components/Login/Login';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


function LoginPage() {
    return (
        <div>
            <div>
                <Header />
                <Login />
                <Footer />
            </div>
        </div> 
    )
};

export default LoginPage;