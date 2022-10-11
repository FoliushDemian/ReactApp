import React, { Component } from "react";
import "../../index.css"

export class Item extends Component {
    render() {
        return (
            <div className="item">
                <img src={"./img/" + this.props.item.img} />
                <h2>{this.props.item.name}</h2>
                <div className="info">
                <b>price: {this.props.item.price}$</b>
                <button className="button-medicine">View more</button>
                </div>
            </div> 
        )
    }
}

export default Item;
