import React from 'react';


import './registration.css';
import { Redirect } from 'react-router-dom';

const Reg = ( {registration, isAuth} ) => {

    if(isAuth === "ok") {
        return <Redirect to="/" />
    }

    return (
        <div className="registration container">
        <h2 className="registration__form-title">Create User</h2>
        <form className="registration__form" method="post" onSubmit={ registration }>
            
            <div className="registration__form-inputs">
            <div className="form-input__wrapper">
                <label className="form-title" htmlFor="name-reg">Name</label>
                <input className="form-input" type="name" name="name" placeholder="Your name" id="name-reg" required/>
            </div>

            <div className="form-input__wrapper">
                <label className="form-title" htmlFor="email-reg">E-mail</label>
                <input className="form-input" type="email" name="email" placeholder="Your name" id="email-reg" required/>
            </div>

            <div className="form-input__wrapper">
                <label className="form-title" htmlFor="password-reg">Password</label>
                <input className="form-input" type="password" name="password" placeholder="Your password" id="password-reg" required/>
            </div>
            </div>

            <button className="registration__form-submit" type="submit" >Submit</button>
        </form>
    </div>
    );
}

export default Reg;