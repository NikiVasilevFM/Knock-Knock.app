import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Start from '../components/Start/Start';

import './StartPage.css';

function StartPage(props) {
    return (
        <div>
            <div>
                <Header />
                <Start />    
                <Footer />
            </div>
        </div>
    )
};

export default StartPage;