import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";


function CartWidget() {
    const {totalUnits} = useContext(CartContext)
    const units = totalUnits()
    return(
        <i className="bi bi-cart3">{units}</i>
    )
}

    export default CartWidget;