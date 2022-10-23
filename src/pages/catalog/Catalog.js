import React, { useEffect, useState } from "react";
import "./catalog.css";
import Item from "../../components/medicine/item";
import axios from "axios";
import Loader from "../../components/loader/Loader";

function Catalog() {

    const [medicaments, setMedicaments] = useState([{ id: 1, name: 'Not found', price: 0, image: '', description: '' }])
    useEffect(() => { axios.get('http://localhost:8080/catalog').then(res => setMedicaments(res.data)) }, []);


    // const sortByPrice = (arr) => {
    //     const sorted = arr.sort((a, b) =>
    //         a.price > b.price ? 1 : -1
    //     )
    //     return sorted;
    // };

    // const handleSortByPrice = () => {
    //     document.querySelector('#name').checked = false;
    //     setMedicaments(prevMedicaments => sortByPrice([...prevMedicaments])
    //     )
    // };


    // const sortByName = (arr) => {
    //     const sorted = arr.sort((a, b) =>
    //         a.name > b.name ? 1 : -1
    //     )
    //     return sorted;
    // };

    // const handleSortByName = () => {
    //     document.querySelector('#price').checked = false;
    //     setMedicaments(prevMedicaments => sortByName([...prevMedicaments])
    //     )
    // };

    const [value, setValue] = useState('')

    const filteredItems = medicaments.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase())
    })

    const [loading, setloading] = useState(true)
    useEffect(() => {setTimeout(() => { setloading(false) }, 2000)}, [])


    return (
        <>
            {loading ?
                <Loader />
                :
                <main-content>
                    <aside>
                        <div className="searchSec">
                            <input type="text" id="search" placeholder="Search..." onChange={(event) => setValue(event.target.value)} />
                        </div>
                        <h2>Sort by:</h2>
                        <div className="sortCat">
                            <a href="/sortedCatalogByName">name</a>
                        </div>
                        <div className="sortCat">
                            <a href="/sortedCatalogByPrice">price</a>
                        </div>
                    </aside>
                    <div className="main-chapter">
                        {
                            filteredItems.map((item, index) => {
                                return (
                                    <Item item={item} key={index} />
                                )
                            })
                        }
                    </div>
                </main-content>
            }
        </>
    )
}

export default Catalog;
