import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


function CartWidget() {
    const {totalUnits} = useContext(CartContext)
    return(
        <div>
            <Link to={"/cart"}>
                <i className="bi bi-cart3 position-relative"> <span className="position-absolute top-0 start-100 translate-middle badge rounted-pill bg-danger">{totalUnits() > 0 ? totalUnits():""}</span> </i>
            </Link>
                
        </div>
        
    )
}

    export default CartWidget;