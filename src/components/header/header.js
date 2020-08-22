import React from 'react';
import './header.css';

import Basket from '../basket';
import CurrentPrice from '../currentPrice';
import { Link } from 'react-router-dom';

const Header = ( { updateCurPrice, currentPrice, quantity, state, logOut } ) => {
    const { user } = state;

    let auth = (
                <Link className="header__authorization" to="/login">
                    <div className="header__authorization-wrapper">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="a7q3" data-v-414055a2="">
                            <g fill="none" fillRule="evenodd" data-v-414055a2="">
                                <path d="M0 0h24v24H0z" data-v-414055a2=""></path>
                                <path d="M7 12.1c-.26 0-.52-.11-.71-.292a1.062 1.062 0 01-.29-.714c0-.262.11-.524.29-.715a1.042 1.042 0 011.42 0c.18.191.29.453.29.715 0 .261-.11.523-.29.714-.19.181-.45.292-.71.292zm10 0c-.26 0-.52-.11-.71-.29-.09-.1-.16-.21-.21-.331a.998.998 0 01-.08-.38c0-.13.03-.261.08-.381s.12-.23.21-.33c.28-.271.72-.371 1.09-.211.13.05.23.12.33.21.09.1.16.21.21.33.05.12.08.251.08.381s-.03.26-.08.381c-.05.12-.12.23-.21.33-.19.18-.45.291-.71.291zm-8.207 4.704a1 1 0 011.414-1.414c.99.99 2.596.99 3.586 0a1 1 0 011.414 1.414 4.537 4.537 0 01-6.414 0zM3.5 11.864c0 5.071 4.405 9.027 9.51 8.442 3.77-.433 6.876-3.455 7.402-7.204.411-2.927-.66-5.734-2.79-7.614a8.473 8.473 0 00-3.496-1.857 1 1 0 01.498-1.937 10.473 10.473 0 014.32 2.294c2.63 2.32 3.955 5.792 3.449 9.392-.653 4.653-4.48 8.376-9.156 8.912C6.943 23.014 1.5 18.127 1.5 11.863c0-4.819 3.273-8.985 7.876-10.17l1.249-.32v1.29a3.45 3.45 0 003.45 3.45h.3a1 1 0 010 2h-.3A5.453 5.453 0 018.789 3.99 8.507 8.507 0 003.5 11.863z" fill="currentColor" fillRule="nonzero" data-v-414055a2=""></path>
                            </g>
                        </svg>
                        <div className="header__authorization-text">Sign in</div>
                    </div>
                </Link>
                );

    if(user){
        const { name } = state.user;
        auth = ( <div className="header__authorization-wrapper">
                    <div className="header__authorization-login">
                        { name }
                    </div>

                    <div className="header__authorization-logout" onClick={ logOut }>
                        Log out
                    </div>

                </div> );
    }

    return (
        <header className="header container">
            <Link to="/" className="header__logo">
                <img src={require("../../img/logo/logo.png")} width="40" height="40" alt="logo pizza"/>
            </Link>
            <p className="header__tagline">We create best pizza</p>
            <CurrentPrice updateCurPrice = { updateCurPrice } currentPrice={ currentPrice }/>
                {auth}
            <Basket quantity = { quantity }/>
        </header>
    )
};

export default Header;
