import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="header container">
            <a className="header__logo" href="/">Logo</a>
            <p className="header__tagline">We create best pizza</p>
            <div className="header__authorization">log in/Sing in</div>
            <div className="header__basket">Basket</div>
        </header>
    )
};

export default Header;