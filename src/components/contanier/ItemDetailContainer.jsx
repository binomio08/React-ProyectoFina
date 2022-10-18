import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../mock/Products";
import ItemDetail from "../item/ItemDetail";
const ItemDetailContainer = () => {
    const {id} = useParams()
    const[item, setItem] = useState({})

    useEffect(() =>{
        const getProdut = () =>
            new Promise ((res, rej)=>{
                const product = products.find((prod)=> prod.id === id );
                setTimeout(()=> {                    
                    res(product)
                }, 500)
            });
        getProdut()
        .then((info) =>{
            setItem(info)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [id])
    return(
        <div className="container">
            <ItemDetail  item={item}/>
        </div>
    )
}

export default ItemDetailContainer;