import React from 'react';

import './order.css';

const Order = ( {basket, currentPrice} ) =>{
    let price = 5,
        quantity = 0,
        priceSymbol = "$";

    if(basket) {
        basket.map( (el) => {
           return (
                quantity +=el.quantity,
                price +=el.quantity * el.price
               );
        });
    };

    if(currentPrice === "euro"){
        price = Number((price * 0.8).toFixed(1));
        priceSymbol = "€"
    }

    return (
        <div className="order container">
            <form className="order__form" method="post">
                <h2 className="order__form-title">Create order</h2>
                <div className="order__form-inputs">

                    <div className="form-input__wrapper">
                        <label className="form-title" htmlFor="name">Name</label>
                        <input className="form-input" type="text" name="name" placeholder="Your name" id="name" required/>
                    </div>

                    <div className="form-input__wrapper">
                        <label className="form-title" htmlFor="phone">Phone</label>
                        <input className="form-input" type="tel" name="phone" placeholder="Your phone" id="phone" required/>
                    </div>

                    <div className="form-input__wrapper">
                        <label className="form-title" htmlFor="phone">Email</label>
                        <input className="form-input" type="email" name="email" placeholder="Your email" id="email"/>
                    </div>

                    <div className="form-input__wrapper">
                        <label className="form-title" htmlFor="address">Address</label>
                        <textarea className="form-textarea" name="address" placeholder="Your address" id="address" required></textarea>
                    </div>

                </div>

                <div className="order__form-details">

                    <div className="form-detail">
                       Quantity {quantity}
                    </div>
                    
                    <div className="form-detail">
                      Total  {price} {priceSymbol}
                    </div>

                </div>

                <input type="number" name="total" value={price} hidden readOnly/>
                <button className="order__form-submit" type="submit" >Submit</button>
            </form>
        </div>
    );
}

export default Order;
