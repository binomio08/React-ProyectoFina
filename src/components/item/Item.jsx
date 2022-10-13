import React from "react";

const Item = ({id, nombre, imagen, precio}) => {
    return(
        <div className="card text-center">
            <h4 className="card-title">{nombre}</h4>
            <img src={imagen} className="card-img-top imagenes" alt={nombre}/>
            <div className="card-body">
                <p className="card-text text-center"><b>${precio}</b></p>    
                <a to={`/detail/${id}`}  className="btn btn-primary text-center">Detalles</a>
            </div>
        </div>
    )
}

export default Item;