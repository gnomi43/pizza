import React from 'react';
import { Link } from 'react-router-dom';
import './list-basket.css';

import ItemBasket from '../item-basket';

export default class ListBasket extends React.Component {

    render(){
        const { basket, currentPrice, quantity } = this.props;

        let itemBasket = null,
            totalPricePizza = 0,
            totalPrice = 0,
            deliveryCost = 5,
            priceSymbol = "$";

            

        if(basket){

            itemBasket = (basket).map( (el) => {
                totalPricePizza += el.quantity * el.price;

                return <ItemBasket  item = { el } 
                                    key={ el.id } 
                                    currentPrice={ currentPrice } 
                                    quantity={ quantity }
                                    />
            });
        }; 

        if(currentPrice === "euro"){
            deliveryCost = Number((deliveryCost * 0.8).toFixed(1));
            totalPricePizza = Number((totalPricePizza * 0.8).toFixed(1));
            priceSymbol = "€"
        }

        totalPrice = totalPricePizza + deliveryCost;
        
        if( itemBasket &&  itemBasket.length > 0) {
            return (
                <div className="basket container">
                    <div className="basket__wrapper">
                        <h1 className="basket__title">Cart</h1>
                        <ul className="basket__list">
                            { itemBasket }
                        </ul>
                        <div className="basket__total">
                            <p className="basket__total-calc">Total: {totalPricePizza} {priceSymbol}</p>
                            <p className="basket__total-calc">Delivery: {deliveryCost} {priceSymbol}</p>
                            <p className="basket__total-text">Order: {totalPrice} {priceSymbol}</p>
                        </div>
                        <Link to="/basket/order" className="basket__total-buy">Buy</Link>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="basket container">
                    <div className="basket__empty">Cart is empty</div>
                </div>
            )
        }


    }
};