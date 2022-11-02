import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
    const {cart, addCart, deleteAll, totalUnits, totalPrice, deleteOne} = useContext(CartContext);
    return(
        <div className="container">
            {totalUnits() > 0 ?
            <table className="table">
                <tbody>
                    <tr>
                        <td colSpan={'5'} className="text-end">
                            <Link onClick={() =>{deleteAll()}}>
                                <button className="btn " title="Vaciar Carrito">Vaciar Carrito<i className="bi bi-trash3"></i></button>
                            </Link>
                        </td>
                    </tr>
                    {cart.map(item => (
                        <tr key={item.id}>
                            <td className="text-start"> <img src={item.imagen} alt={item.nombre} width="120" /> </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        : <div className="alert alert-danger text-center" role="alert">No se encontraron productos</div>}
        </div>
    )
}

export default Cart;