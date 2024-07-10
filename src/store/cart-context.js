import {createContext} from "react"

const CartContext = createContext({
    cart:[],
    addToCart : (id) => {},
    
    
})

export default CartContext;