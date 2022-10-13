import React from "react";
import Item from "../item/Item";

const ItemList = ({items}) => {
    return(
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {items.map(item => (
                <div key={item.id} className="col">
                    <Item nombre={item.nombre} imagen={item.imagen} precio={item.precio} id={item.id} />
                </div>)
            )}
        </div>
    )
}

export default ItemList;