import React from "react";
import Items from "../../components/medicine/items";
import "./catalog.css"

class Catalog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 1,
                    name: 'Супрастин',
                    price: 123,
                    img: 'супрастин.jfif'
                },
                {
                    id: 2,
                    name: 'ношпа',
                    price: 220,
                    img: 'ношпа.jfif'
                },
                {
                    id: 3,
                    name: 'Зиоміцин',
                    price: 150,
                    img: 'зиоміцин.jfif'
                },
                {
                    id: 4,
                    name: 'Аспірин',
                    price: 101,
                    img: 'аспірин.jfif'
                },
                {
                    id: 5,
                    name: 'Аскорбінова кислота',
                    price: 15,
                    img: 'аскорбінка.jfif'
                },
                {
                    id: 6,
                    name: 'Мовіназа',
                    price: 300,
                    img: 'мовіназа.jfif'
                }
            ]
        }
    }
    render() {
        return (
            <main-content>
                <aside>
                    <div class="searchSec">
                        <input type="text" id="search" placeholder="Search..." />
                        <button onclick="searchCar()">Search</button>
                    </div>
                    <h2>Sort by:</h2>
                    <div class="sortCat">
                        <input type="checkbox" id="name" onclick="sortByName()" />
                        <label for="name">name</label>
                    </div>
                    <div class="sortCat">
                        <input type="checkbox" id="price" onclick="sortByPrice()" />
                        <label for="price">price</label>
                    </div>
                    <p>Total price: <span id="totalPrice"></span></p>
                </aside>
                <Items items={this.state.items} />
            </main-content>
        )
    }
}

export default Catalog;
