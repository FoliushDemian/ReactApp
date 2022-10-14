import Item from "./item";

export function Items(props) {
    return (
        <div className="main-chapter">
            {props.items.map(el => (
                <Item key={el.id} item={el}/>
            ))}
        </div>
    )
}

export default Items;
