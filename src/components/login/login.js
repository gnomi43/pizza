import React from 'react';

import './login.css';
import { Link, Redirect } from 'react-router-dom';

export default class login extends React.Component {

    state = {
        email: '',
        password: '',
    };

    onEmailChange = (event) =>{
        this.setState({
            email: event.target.value
        });
    };

    onPasswordChange = (event) =>{
        this.setState({
            password: event.target.value
        });
    };

    onSubmit = (event) =>{
        event.preventDefault();
        this.props.loginUser(this.state.email, this.state.password);
        this.setState({
            email: '',
            password: ''
        });
    };


    render(){
        const { isAuth } = this.props;
        const { email, password } = this.state;
        let error = null;

        if(isAuth === "error") {
            error = (<div className="login__error">Wrong password or user name.</div>)
        }
    
        if(isAuth === "ok") {
            return <Redirect to="/" />
        }


        return (
                <div className="login container">
                <h2 className="login__form-title">Sign in</h2>
                <form className="login__form" method="post" onSubmit={ this.onSubmit }>
                    {error}
                    <div className="login__form-inputs">
                        <div className="form-input__wrapper">
                            <label className="form-title" htmlFor="email">E-mail</label>
                            <input className="form-input" type="email" name="email" placeholder="Your name" onChange={ this.onEmailChange } value={ email } id="email" required/>
                        </div>

                        <div className="form-input__wrapper">
                            <label className="form-title" htmlFor="password">Password</label>
                            <input className="form-input" type="password" name="password" placeholder="Your password" onChange={ this.onPasswordChange } value={ password } id="password" required/>
                        </div>
                    </div>

                    <button className="login__form-submit" type="submit" >Submit</button>
                </form>
                <Link to="/registration" className="login__registration-link">
                    Registration
                </Link>
            </div>
        );

    };
};

