import React from 'react';
import './pizza.css';

import Header from '../header';
import ListPizza from '../list-pizza';


export default class Pizza extends React.Component {

    state = {
        currentPrice: "euro",
        isAuth: false,
        basket: null,
        user: null
    };

    addToBasket = (id, quantity, price) => {

        this.setState({
            basket: [ ...this.state.basket, { id, quantity, price } ]
        })
    };

    render(){
        return (
            <div className="pizza-wrapper">
                <Header />
                <ListPizza addToBasket = {this.addToBasket} currentPrice={ this.state.currentPrice }/>
            </div>
        );
    }
};