import React from 'react';
import { Image } from 'react-bootstrap';
import './Header.css';

function Header() {
    return (
        <div className="navBar">
            <div className="dashboard">
                <Image src="https://www.thesparksfoundationsingapore.org/images/logo_small.png" alt="logo" className="tsfLogo"/>
                <h1 className="header__title">TSF</h1>
            </div>
        </div>
    )
}

export default Header
