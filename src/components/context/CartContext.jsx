import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addCart = (item, cantidad) => {
        const product = {...item, cantidad};
        isInCart(product.id)
        ? addCantidad(product)
        : setCart([...cart, product])
    };

    const isInCart = (id) =>{
        return cart.some((prod) => prod.id === id)
    };

    const addCantidad = (product) => {
        const cartUpdate = cart.map((productInCart) => {
            if (product.id === productInCart.id){
                const productUpdate = {
                    ...productInCart,
                    catidad: product.cantidad,
                };
                return productUpdate;
            } else {
                return productInCart
            }
        });
        setCart(cartUpdate)
    }

    const deleteAll = () => {
        setCart([])
    };

    const totalUnits = () => {
        const copy = [...cart]
        let count = 0
        copy.forEach((product) => {
            count = count + product.cantidad 
        });
        return count;
    };

    const totalPrice = () => {
        const copy = [...cart]
        let count = 0
        copy.forEach((product) => {
            count = count + product.cantidad * product.precio; 
        });
        return count;
    };

    const deleteOne = (id) => {
        const produtcFilter = cart.filter((prod) => prod.id !== id)
        setCart(produtcFilter);
    };

    return(
        <CartContext.Provider value= {{cart, addCart, deleteAll, totalUnits, totalPrice, deleteOne }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;