import React from 'react';
import './list-pizza.css';

export default class ListPizza extends React.Component {

    render(){
        return (
            <main className="menu container">
                <ul className="menu__list">

                    <li className="menu__item"
                        key="1">
                        <form>
                            <div className="menu__item-img">
                                <img src="#" alt="pizza"/>
                            </div>
                            <p className="menu__item-description">
                                This pizza is from Italy
                            </p>
                            <div className="menu__input-wrapper">
                                <input 
                                    className="menu__item-quantity"
                                    type="num"
                                    min="1" max="10" step="1"
                                    value="1"/>

                                <input 
                                    className="menu__item-submit"
                                    type="submit" 
                                    value="Add" />
                            </div>
                        </form>
                    </li>

                    <li className="menu__item"
                        key="1">
                        <form>
                            <div className="menu__item-img">
                                <img src="#" alt="pizza"/>
                            </div>
                            <p className="menu__item-description">
                                This pizza is from Italy
                            </p>
                            <div className="menu__input-wrapper">
                                <input 
                                    className="menu__item-quantity"
                                    type="num"
                                    min="1" max="10" step="1"
                                    value="1"/>

                                <input 
                                    className="menu__item-submit"
                                    type="submit" 
                                    value="Add" />
                            </div>
                        </form>
                    </li>


                    <li className="menu__item"
                        key="1">
                        <form>
                            <div className="menu__item-img">
                                <img src="#" alt="pizza"/>
                            </div>
                            <p className="menu__item-description">
                                This pizza is from Italy
                            </p>
                            <div className="menu__input-wrapper">
                                <input 
                                    className="menu__item-quantity"
                                    type="num"
                                    min="1" max="10" step="1"
                                    value="1"/>

                                <input 
                                    className="menu__item-submit"
                                    type="submit" 
                                    value="Add" />
                            </div>
                        </form>
                    </li>
                    
                </ul>
            </main>
        )
    }
};