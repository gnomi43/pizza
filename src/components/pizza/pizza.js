import React from 'react';
import './pizza.css';

import Header from '../header';
import ListPizza from '../list-pizza';


const Pizza = () => {
    return (
        <div className="pizza-wrapper">
            <Header />
            <ListPizza />
        </div>
    );
};


export default Pizza;