import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../mock/Products";
import ItemList from "../item/ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoryName} = useParams()

    useEffect(() => {
        const getProducts = () =>
        new Promise((res,rej) => {
            const prodFiltrados = products.filter((prod) => prod.categoria === categoryName);
            const query = categoryName ? prodFiltrados : products;
            setTimeout(() => {
                res(query);
            }, 500);
        });

        getProducts()
        .then((data) =>{
            setItems(data);
        })
        .catch((error) => {
            console.log(error)
        });
    }, [categoryName]);

    return(
        <div className="container my-5">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;