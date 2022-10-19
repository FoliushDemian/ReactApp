import { Link } from "react-router-dom";
import "./../../components/medicine/items.css";

export function Item(props) {
    return (
        <div className="item">
            <img src={"./img/" + props.item.img}/>
            <h2>{props.item.name}</h2>
            <div className="info">
                <b>price: {props.item.price}$</b>
                <Link className="link-button" to='/drug' state={{img:"./img/"+ props.item.img, name: props.item.name,
                price: props.item.price, description: props.item.description}}><button className="button-medicine">View more</button></Link>
            </div>
        </div>
    )
}

export default Item;
