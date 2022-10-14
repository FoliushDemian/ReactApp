import "./../../components/medicine/items.css";

export function Item(props) {
    return (
        <div className="item">
            <img src={"./img/" + props.item.img}/>
            <h2>{props.item.name}</h2>
            <div className="info">
                <b>price: {props.item.price}$</b>
                <button className="button-medicine">View more</button>
            </div>
        </div>
    )
}

export default Item;
