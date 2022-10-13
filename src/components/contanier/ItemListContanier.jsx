import React, { useEffect, useState } from "react";
import products from "../../mock/Products";
import ItemList from "../item/ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getProducts = () =>
        new Promise((res,rej) => {
            setTimeout(() => {
                res(products);
            }, 500);
        });

        getProducts()
        .then((data) =>{
            setItems(data);
        })
        .catch((error) => {
            console.log(error)
        });
    }, []);
    console.log(items);
    return(
        <div className="container my-5">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;