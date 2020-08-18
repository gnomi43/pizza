import React from 'react';
import './item-pizza.css';

export default class ItemPizza extends React.Component {

    state = {
        quantity: 1,
    }

    quantityUpdate = (event) => {
        this.setState({
            quantity: event.target.value
        });
    };
    render(){
        const {id, name, desc } = this.props.item;
        let { price } = this.props.item,
            priceSymbol = "$";

        if(this.props.currentPrice === "euro"){
            price = (price * 1.3).toFixed(1);
            priceSymbol = "€"
        }

        return (
            <li className="menu__item"
                key={id}>
                <form onSubmit={ () => this.props.addToBasket(id, this.state.quantity, price) }>
                    
                    <div className="menu__item-img">
                        <img src={require(`../../img/pizza_${id}.webp`)} width="200" height="200" alt="pizza"/>
                    </div>
                    <p className="menu__item-description">
                        {name}
                    </p>
                    <p className="menu__item-description">
                        {desc}
                    </p>
                    <div className="menu__input-wrapper">
                        <input 
                            onChange={ this.quantityUpdate }
                            className="menu__item-quantity"
                            type="num"
                            min="1" max="10" step="1"
                            value="1"/>
                        <p className="menu__item-price">{price} {priceSymbol}</p>
                        <input 
                            className="menu__item-submit"
                            type="submit" 
                            value="Add" />
                    </div>
                </form>
            </li>
        )
    }
};