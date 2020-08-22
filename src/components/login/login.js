import React from 'react';

import './login.css';
import { Link, Redirect } from 'react-router-dom';

const login = ( { loginUser, isAuth } ) => {

    if(isAuth === "ok") {
        return <Redirect to="/" />
    }

    return (
            <div className="login container">
            <h2 className="login__form-title">Sign in</h2>
            <form className="login__form" method="post" onSubmit={ loginUser }>
                
                <div className="login__form-inputs">
                    <div className="form-input__wrapper">
                        <label className="form-title" htmlFor="email">E-mail</label>
                        <input className="form-input" type="email" name="email" placeholder="Your name" id="email" required/>
                    </div>

                    <div className="form-input__wrapper">
                        <label className="form-title" htmlFor="password">Password</label>
                        <input className="form-input" type="password" name="password" placeholder="Your password" id="password" required/>
                    </div>
                </div>

                <button className="login__form-submit" type="submit" >Submit</button>
            </form>
            <Link to="/registration" className="login__registration-link">
                Registration
            </Link>
        </div>
    );
}

export default login;