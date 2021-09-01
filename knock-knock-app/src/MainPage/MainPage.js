import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer'

import './MainPage.css';

function MainPage() {
    return (
        <div className="wrapper-main-page">
            <div className = "block-main-page">
                <Header />
                <Main />
                <Footer />
            </div>
        </div>
    )
};

export default MainPage;