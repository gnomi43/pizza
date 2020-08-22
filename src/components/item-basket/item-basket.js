import React from 'react';
import './item-basket.css';

export default class ItemBasket extends React.Component {

    updateQuantity = (event) => {
        const   {id} = this.props.item,
                quantity = parseInt(event.target.value);
        this.props.quantity(id, quantity);
    };

    render(){
        const {id, quantity, name } = this.props.item;
        let { price } = this.props.item,
            priceSymbol = "$";

        if(this.props.currentPrice === "euro"){
            price = Number((price * 0.8).toFixed(1));
            priceSymbol = "€"
        }

        return (
            <li className="basket__item"
                key={id}>
                    <img className="basket__item-img" src={ require(`../../img/pizza_${id}.webp`) } alt={id} />
                    <div className="basket__item-name">{name}</div>
                    <div className="basket__item-input">
                        <span className="basket__item-input">Quantity</span>
                        <input  className="basket__item-quantity" 
                            type="number" 
                            name="quantity" 
                            id="quantity" 
                            min="0"
                            max="20"
                            onChange={ this.updateQuantity }
                            value={ quantity }/>
                    </div>
                    
                    <div className="basket__item-price">{price} {priceSymbol}</div>
                    <div className="basket__item-total"> Total  {(price * quantity).toFixed(1)} {priceSymbol}</div>
            </li>
        )
    }
};