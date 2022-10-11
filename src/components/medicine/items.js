import React, { Component } from "react";
import Item from "./item";

export class Items extends Component {
    render() {
        return (
            <div className="main-chapter">
                {this.props.items.map(el => (
                    <Item key={el.id} item={el} />
                ))}
            </div>
        )
    }
}

export default Items;
