import {createContext} from "react"

const CartContext = createContext({
    cart:[],
    addToCart : (item) => {},
    increaseQuantity:(id)=>{},
    decreaseItemQuantity:(id)=>{},
    
})

export default CartContext;