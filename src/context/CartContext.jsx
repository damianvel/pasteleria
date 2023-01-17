import { createContext } from "react";
import { useState } from "react";


export const CartContext = createContext()


const CartContextProvider = ({ children }) => {

    const getQuantityById = (id) => {
        const product = cart.find(elemento => elemento.id === +id)
        return product?.quantity
    }



    const [cart, setCart] = useState([])

    const isInCart = (x) => {

        return (cart.some(element => element.id === x.id))
    }



    const addToCart = (element) => {

        if (isInCart(element)) {
            let newCart = cart.map(product => {

                if (product.id === element.id) {
                    let newQuantity = {
                        ...product,
                        quantity: element.quantity
                    }
                    return newQuantity
                } else { return product }
            }
            )
            setCart(newCart)
        }



        else {
            setCart([...cart, element])

        }
    }

    const clear = () => setCart([])



    const getTotalPrice = () => {
        const total = cart.reduce((acc, element) => {
            return acc + (element.price * element.quantity)
        }, 0
        )
        return total

    }




    const data = {
        cart,
        clear,
        addToCart,
        getQuantityById,
        getTotalPrice
    }
    return (
        <CartContext.Provider value={data}>
            {children}

        </CartContext.Provider>

    )
}


export default CartContextProvider
