import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({item}) => {
  const [cantidad, setCantidad] = useState(0);
  const {addCart} = useContext(CartContext);

  const onAdd = (cantidad) => {
    setCantidad(cantidad)
    addCart(item, cantidad)
  }
    return(
        <div className="row mt-3">
        <div className="col-md-4 py-4">
      <div className="card cardImg">
        <img src={item.imagen} className="card-img-top"  alt={item.nombre} />
        <div className="card-body">
          <h5 className="card-title text-center">
            <b>{item.nombre}</b>
          </h5>
          <p className="card-text text-center">U${item.precio}</p>
        </div>
        {cantidad ===0 ?(
          <ItemCount stock={item.stock} initial={1}  onAdd={onAdd} /> 
        ): (
          <Link to= "/cart" className="text-center"> <bottom className="btn btn-primary">Ir Al Carrito</bottom></Link>
        )}
      </div>
      </div>
    </div>
)}

export default ItemDetail;