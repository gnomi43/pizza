import React from 'react';
import './item-history-order.css';

 const ItemHistoryOrder = ({ id, item, currentPrice}) => {

    const { totalQuantity, totalPrice, address } = item;
    let priceSymbol = "$",
        price = totalPrice;

    if(currentPrice === "euro"){
        price = Number((price * 0.8).toFixed(2));
        priceSymbol = "€"
    };

    
    return (
        <li className="user-info__item-order">
            <div className="item-order__wrapper">
                <span className="item-order__detail">Quantity:</span>
                <span className="item-order__detail-value">{ totalQuantity }</span>
            </div>

            <div className="item-order__wrapper">
                <span className="item-order__detail">Price total:</span>
                <span className="item-order__detail-value">{ price } { priceSymbol }</span>
            </div>

            <div className="item-order__wrapper">
                <span className="item-order__detail">Address:</span>
                <span className="item-order__detail-value">{ address }</span>
            </div>
        </li>
    )
};

export default ItemHistoryOrder;