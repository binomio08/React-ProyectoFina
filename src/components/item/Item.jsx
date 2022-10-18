import React from "react";
import { Link } from "react-router-dom";

const Item = ({id, nombre, imagen, precio}) => {
    return(
        <div className="card text-center">
            <h4 className="card-title">{nombre}</h4>
            <img src={imagen} className="card-img-top imagenes" alt={nombre}/>
            <div className="card-body">
                <p className="card-text text-center"><b>US${precio}</b></p>    
                <Link to={`/category/${id}`}  className="btn btn-primary text-center">Detalles</Link>
            </div>
        </div>
    )
}

export default Item;