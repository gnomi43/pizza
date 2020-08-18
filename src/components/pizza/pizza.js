import React from 'react';
import './pizza.css';

import Header from '../header';
import ListPizza from '../list-pizza';


export default class Pizza extends React.Component {

    state = {
        menu: {},
        users:[
                {
                    basket: null,  
                    id: 1,
                    name: "admin",
                    email: "admin@admin.ru",
                    password: "123456"
                }
            ],
        isAuth: false,
        guestBasket: true,
        user: null
    };

    render(){
        return (
            <div className="pizza-wrapper">
                <Header />
                <ListPizza />
            </div>
        );
    }
};


 Pizza;