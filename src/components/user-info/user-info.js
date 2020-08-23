import React from 'react';


import './user-info.css';
import { Redirect } from 'react-router-dom';
import ItemHistoryOrder from '../item-history-order';

const UserInfo = ( {user ,isAuth, currentPrice} ) => {

    let itemHistoryOrder = 'History Empty';

    if( user ){
        const { name, email, historyOrder, group } = user;

        if(historyOrder){
            itemHistoryOrder = historyOrder.map( (el) => {
                return <ItemHistoryOrder item={ el } key={ el.orderId } id={ el.orderId } currentPrice={ currentPrice } />
             });
        }

        return (
            <div className="user-info container">
            <h2 className="user-info__title">User Info</h2>
            <ul className="user-info__list-info">
                <li className="user-info__item">
                    <span className="user-info__item-text">Name:</span>
                    <span className="user-info__item-value">{ name }</span>
                </li>
    
                <li className="user-info__item">
                    <span className="user-info__item-text">E-mail:</span>
                    <span className="user-info__item-value">{ email }</span>
                </li>
    
                <li className="user-info__item">
                    <span className="user-info__item-text">Group users</span>
                    <span className="user-info__item-value">{ group }</span>
                </li>
            </ul>
    

            <h2 className="user-info__title">History order </h2>
            <ul className="user-info__list-order">
                { itemHistoryOrder }
            </ul>
            
        </div>
        );
    }
    
    if(isAuth !== "ok") {
        return <Redirect to="/login" />
    }
};

export default UserInfo;