import React, { useContext } from 'react'
import CartContext from '../store/cart-context'

const CartPage = () => {

    const cartCtx = useContext(CartContext);
    
  return (
    <div>CartPage</div>
  )
}

export default CartPage