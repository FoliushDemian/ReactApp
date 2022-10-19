import { useLocation } from "react-router-dom"
import "./singlePage.css"

function SinglePage() {
    const location = useLocation();
    const state = location.state;
    console.log(state.img);
    return (
        <div className="drug">
            {state && (<><div className="page">
                <div className="image"><img src={state.img} /></div>
                <div className="content-drug">
                    <h1>{state.name}</h1>
                    <p>{state.description}</p>
                </div>
            </div>
            <div className="footer-page">
                    <h3>price: {state.price}$</h3>
                    <button >Go back</button>
                    <button className="add-to-cart">Add to cart</button>
                </div>
            </>
            )}
        </div>

    )
}

export default SinglePage;
