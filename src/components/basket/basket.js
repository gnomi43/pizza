import React from 'react';
import { Link } from 'react-router-dom';
import './basket.css';

export default class Basket extends React.Component {

    render() {
        const quantity = this.props.quantity;

        return (
            <Link className="header__basket-link" to="/basket/">
                <div className="header__basket">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="c6j1" data-v-414055a2=""><g fill="none" fillRule="evenodd" data-v-414055a2=""><path d="M0 0h24v24H0z" data-v-414055a2=""></path><path d="M6 6a4 4 0 014-4h4a4 4 0 014 4v2h5.133L21.82 18.496A4 4 0 0117.85 22H6.149a4 4 0 01-3.969-3.504L.867 8H6V6zm6 2a1 1 0 010 2H3.133l1.03 8.248A2 2 0 006.149 20h11.704a2 2 0 001.984-1.752L20.867 10H16V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v2h4z" fill="currentColor" fillRule="nonzero" data-v-414055a2=""></path></g></svg>
                    <div className="header__quantity">{ quantity }</div>
                </div>
            </Link>
        );
    }
};