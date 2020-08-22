import React from 'react';
import './currentPrice.css';

export default class CurrentPrice extends React.Component {

    updateCurPrice = (event) => {
        this.props.updateCurPrice(event.target.value);
    };

    render() {
        return (
            <div className="current-price">

                    <input  type="radio"
                            className="current-price__input"
                            id="euro"
                            value="euro"
                            onClick={this.updateCurPrice}
                            checked={this.props.currentPrice === "euro" ? true : false}
                            readOnly
                            />
                        <label htmlFor="euro" className="current-price__label">Euro</label>

                    <input  type="radio" 
                            className="current-price__input"
                            id="dollar"
                            value="dollar"
                            onClick={this.updateCurPrice}
                            checked={this.props.currentPrice === "dollar" ? true : false}
                            readOnly />
                        <label htmlFor="dollar" className="current-price__label">Dollar</label>

            </div>
        )
    }
};