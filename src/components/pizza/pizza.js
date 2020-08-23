import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './pizza.css';

import Header from '../header';
import ListPizza from '../list-pizza';
import ListBasket from "../list-basket";
import Order from "../order";
import Login from '../login';
import Reg from '../registration';
import { users } from '../arrayDB/users';
import UserInfo from '../user-info';


export default class Pizza extends React.Component {

    state = {
        currentPrice: "dollar",
        isAuth: false,
        basket: null,
        user: null
    };

    addToBasket = (id, quantity, price, name) => {

        const basketArr = this.state.basket;
        let newBasket = [];
        let i = 0;

        if(basketArr){
            basketArr.forEach((element) => {
                if(element.id === id){
                    element.quantity += quantity;
                    newBasket.push(element);
                    i++;
                } else {
                    newBasket.push(element);
                }
            });
        }

        if(i === 0){
            newBasket.push( { id, quantity, price, name } );
        }

        this.setState({
            basket: newBasket
        });
    };

    updateQuantity = (basketArr) => {
        let quantity = 0;

         basketArr.map( (el) => {
            return quantity +=el.quantity;
        });
        return quantity;
    };

    updateCurPrice = (currPrice) => {
        this.setState({
            currentPrice: currPrice
        });
    };

    updateBasketItem = (id, quantity) => {
         let indificator = null;

        const newBasket = [...(this.state.basket).map( (el, index) => {
            if(el.id === id){
                el.quantity = quantity;
            }

            if(el.quantity === 0){
                indificator = index;
            }
            return el;
       })];

      if(indificator !== null){
        newBasket.splice(indificator, 1);
      };

       this.setState({
            basket: newBasket
       });
    };

    loginUser = (email, password) => {
        let statusLogin = null,
            indexUser = null;

        users.forEach( (el, index)=>{
            if( el.email === email ){
                if( el.password === password ){
                    statusLogin = "ok";
                    indexUser = index;
                }
            }
        });

        if( statusLogin === "ok" ){
            const user = users[indexUser];

            this.setState({
                isAuth: statusLogin,
                user: user,
                basket: user.basket
            });
        } else {
            this.setState({
                isAuth: "error"
            });
        }
    };

    registration = (name, email, password) => {
        let id = 0;

        users.forEach(( el ) => {
            if( el.id >= id ){
                id = el.id;
            }
        });

        users.push(
            {
                id: id++,
                basket: null,  
                name: name,
                email: email,
                password: password,
                group: "users"
            },
        );

        this.setState({
            isAuth: "ok",
            user:{
                    id: id++,
                    basket: null,  
                    name: name,
                    email: email,
                    password: password,
                    group: "users"
                },
            basket: null
        });

    };

    logOut = () => {
        this.setState({
            isAuth: false,
            basket: null,
            user: null
        });
    };

    render(){

        const { basket, currentPrice, isAuth, user } = this.state;
        let quantity = 0;

        if( basket ){
            quantity = this.updateQuantity(basket);
        };

        return (
            <div className="pizza-wrapper">
                <Router basename={ process.env.PUBLIC_URL }>
                    <Header quantity = { quantity } updateCurPrice={ this.updateCurPrice } currentPrice={ currentPrice } state={ this.state } logOut={ this.logOut }/>
                        <main className="pizza-content">
                            <Route path="/" render={() => <ListPizza addToBasket = { this.addToBasket } currentPrice={ currentPrice }/>} exact/>
                            <Route path="/basket/" render={() => <ListBasket basket = { basket } currentPrice={ currentPrice }  quantity={ this.updateBasketItem }/>} exact />
                            <Route path="/basket/order" render={() => <Order basket = { basket } currentPrice={ currentPrice } />}/>
                            <Route path="/login" render={() => <Login loginUser = { this.loginUser } isAuth={ isAuth } />}/>
                            <Route path="/registration" render={() => <Reg registration = { this.registration } isAuth={ isAuth } />}/>
                            <Route path="/user-info" render={() => <UserInfo user = { user } isAuth={ isAuth } currentPrice={ currentPrice } />}/>
                        </main>
                </Router>
            </div>
        );
    }
};