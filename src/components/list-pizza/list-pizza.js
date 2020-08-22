import React from 'react';
import './list-pizza.css';

import ItemPizza from '../item-pizza';
import { menu } from '../arrayDB/menu.js';

export default class ListPizza extends React.Component {

    render(){

        const itemPizza = menu.map( (el) => {
           return <ItemPizza item = { el } key={el.id} addToBasket = {this.props.addToBasket} currentPrice={ this.props.currentPrice } />
        });

        return (
            <div className="menu container">
                <ul className="menu__list">
                    { itemPizza }
                </ul>
            </div>
        )
    }
};