import React, { useContext, useState } from 'react'
import CartContext from './cart-context'
import MedicineContext from './addmedicine-context';
import axios from 'axios';
const API_KEY ='https://crudcrud.com/api/14cab97d56e74c63994aae48724a0fda/cart'

const CartProvider = (props) => {
const [cartItem, setCartItem] = useState([]);
const [countQuntity, setCountQuantity] = useState(0);
const medCtx = useContext(MedicineContext)

const addToCart = async(id) => {

    const findItem = medCtx.medicine.find((item, index) => item._id == id)
    setCartItem([...cartItem, findItem])
    

   
}

console.log(cartItem)





//console.log(cartItem)

// const removeFormCart = () => {
    
// }

// const handleChangeQuantity = () => {
    
// }

    const cartData = {
        cart:cartItem,
        addToCart,
        
        

    }


  return (
    <CartContext.Provider value={cartData}>
        {props.children}
        </CartContext.Provider>
  )
}

export default CartProvider