import React, { useState } from "react";
import "./catalog.css";
import Item from "../../components/medicine/item";

function Catalog() {
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'ношпа',
            price: 220,
            img: 'ношпа.jfif',
            description: "Історія створення дротаверину пов'язана із вивченням та синтезом інших міотропних спазмолітичних засобів. Першими спазмолітичними препаратами були екстракти опію, але у зв'язку із впливом на ЦНС використання їх було обмежене. У подальших дослідженнях властивостей алкалоїдів опію встановлено, що найвищу спазмолітичну дію та найменший вплив на ЦНС серед них має папаверин. "
        },
        {
            id: 2,
            name: 'Зиоміцин',
            price: 150,
            img: 'зиоміцин.jfif',
            description: "Азитроміцин є макролідним антибіотиком, який належить до групи азалідів. Молекула утворюється у результаті введення атома азоту в лактонове кільце еритроміцину А. Механізм дії азитроміцину полягає в інгібуванні синтезу бактеріального білка за рахунок зв'язування з 50 S-субодиницею рибосом і пригнічення транслокації пептидів."

            
        },
        {
            id: 3,
            name: 'Аспірин',
            price: 101,
            img: 'аспірин.jfif',
            description: "В одного зі співробітників фірми «Байєр» на ім'я Фелікс Гофман, який займався аніліновими барвниками, батько страждав артритом, але мав непереносність саліцилатів натрію через хронічне подразнення шлунку. Гофман розшукував в хімічній літературі відомості про похідні саліцилату натрію з меншою кислотністю і наткнувся на дані про ацетилсаліцилову кислоту"
        },
        {
            id: 4,
            name: 'Аскорбінова кислота',
            price: 15,
            img: 'аскорбінка.jfif',
            description: "Не синтезується в організмі людини і надходить лише з продуктами харчування. Розчиняється у воді й руйнується при тривалому кип'ятінні, тому вимочування або переробка овочів знижує вміст у них вітаміну С. Велика кількість вітаміну C міститься в лимонах (38-60 мг/100 г), плодах шипшини (650 мг/100 г), солодкого перцю (250 мг/100 г), смородини (200 мг/100 г), зеленої цибулі."
        },
        {
            id: 5,
            name: 'Супрастин',
            price: 123,
            img: 'супрастин.jpg',
            description: "Хлоропірамін, хлорований аналог трипеленаміну (пірибензаміну) є антигістамінним засобом першого покоління, що належить до групи етилендіамінів. У доклінічних і клінічних дослідженнях — як і при застосуванні трипеленаміну — була виявлена ефективність хлоропіраміну при лікуванні сінної гарячки та інших алергічних захворювань."
        }
        // ,
        // {
        //     id: 6,
        //     name: 'Мовіназа',
        //     price: 300,
        //     img: 'мовіназа.jfif',
        //     description: "Хлоропірамін, хлорований аналог трипеленаміну (пірибензаміну) є антигістамінним засобом першого покоління, що належить до групи етилендіамінів. У доклінічних і клінічних дослідженнях — як і при застосуванні трипеленаміну — була виявлена ефективність хлоропіраміну при лікуванні сінної гарячки та інших алергічних захворювань."
        // }
    ])

    const sortByPrice = (arr) => {
        const sorted = arr.sort((a, b) =>
            a.price > b.price ? 1 : -1
        )
        return sorted;
    };

    const handleSortByPrice = () => {
        setItems(prevItems => sortByPrice([...prevItems])
        )
    };


    const sortByName = (arr) => {
        const sorted = arr.sort((a, b) =>
            a.name > b.name ? 1 : -1
        )
        return sorted;
    };

    const handleSortByName = () => {
        setItems(prevItems => sortByName([...prevItems])
    )};
    

    // const arr = items.map(el => {
    //     return <Item key={el.id} item={el} />
    // });

    const [value, setValue] = useState('')

    const filteredItems = items.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase())
    })


    return (
        <main-content>
            <aside>
                <div className="searchSec">
                    <input type="text" id="search" placeholder="Search..." onChange={(event) => setValue(event.target.value)}/> 
                </div>
                <h2>Sort by:</h2>
                <div className="sortCat">
                    <input type="checkbox" id="name" onClick={handleSortByName} />
                    <label htmlFor="name">name</label>
                </div>
                <div className="sortCat">
                    <input type="checkbox" id="price" onClick={handleSortByPrice} />
                    <label htmlFor="price">price</label>
                </div>
            </aside>
            <div className="main-chapter">
                {
                    filteredItems.map((item, index) =>{
                        return (
                            <Item item={item} key={index} />
                        )
                    })
                }
                
            </div>
        </main-content>
    )
}

export default Catalog;
