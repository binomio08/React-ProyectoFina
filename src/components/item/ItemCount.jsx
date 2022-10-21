import React, { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(0)

    const sumar = () => {
        count < stock && setCount(count + 1)
    }

    const restar = () => {
        count > initial && setCount(count - 1)
    }

    const agregar = () => {
        onAdd(count)
    }
    return(

        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="input-group">
              <input type="button" className="btn btn-primary" value="-" onClick={restar}/>
              <p className="estadoContador ">{count}</p>
              <input type="button" className="btn btn-primary" value="+" onClick={sumar}/>
            </div>
                <div className="d-grid gap-2 pt-2">
                    <input className="btn btn-primary" type="button"  value="Agregar al Carrito" disabled={count === 0} onClick={agregar}/>
                </div>
          </div>
        </div>
    )
}

export default ItemCount;