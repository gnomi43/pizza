import React from 'react';


import './registration.css';
import { Redirect } from 'react-router-dom';

export default class Reg extends React.Component {

    state = {
        name: '',
        email: '',
        password: '',
    };

    onNameChange = (event) =>{
        this.setState({
            name: event.target.value
        });
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
        this.props.registration(this.state.name, this.state.email, this.state.password);
        this.setState({
            name: '',
            email: '',
            password: ''
        });
    };


    render(){
        const   {isAuth } = this.props,
                { name, email, password } = this.state;
    
        if(isAuth === "ok") {
            return <Redirect to="/" />
        }

        return (
            <div className="registration container">
            <h2 className="registration__form-title">Create User</h2>
            <form className="registration__form" method="post" onSubmit={ this.onSubmit }>
                
                <div className="registration__form-inputs">
                <div className="form-input__wrapper">
                    <label className="form-title" htmlFor="name-reg">Name</label>
                    <input className="form-input" type="name" name="name" placeholder="Your name" onChange={ this.onNameChange } value={ name } id="name-reg" required/>
                </div>

                <div className="form-input__wrapper">
                    <label className="form-title" htmlFor="email-reg">E-mail</label>
                    <input className="form-input" type="email" name="email" placeholder="Your name" onChange={ this.onEmailChange } value={ email } id="email-reg" required/>
                </div>

                <div className="form-input__wrapper">
                    <label className="form-title" htmlFor="password-reg">Password</label>
                    <input className="form-input" type="password" name="password" placeholder="Your password" onChange={ this.onPasswordChange } value={ password } id="password-reg" required/>
                </div>
                </div>

                <button className="registration__form-submit" type="submit" >Submit</button>
            </form>
        </div>
        );
    }
};

