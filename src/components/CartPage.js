import React, { useContext, useState } from 'react'
import CartContext from '../store/cart-context'
import "./CartPage.css"



const CartPage = (props) => {
  
    const cartCtx = useContext(CartContext);

    const handleToggle = () => {
      props.onToggle()
    }


  

    const handleDecreaseQuantity = (id) => {
      //console.log(id)
      cartCtx.decreaseItemQuantity(id);
    };


    const handleIncreaseQuantity = (id) => {
     // console.log(id)
        cartCtx.increaseQuantity(id)
    }

  

  return (
  <div >
    <div className='backdrop' onClick={handleToggle}></div>
  <div>
  <ul className='cart-modal'>
    
      {cartCtx.cart.map((item,index) => (
        <li key={index+1}>
          <p>{index+1}</p>
          <p>{item.name}</p>
          <p className='quantity' >x {item.quantity}</p>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <button className='action' onClick={() => handleDecreaseQuantity(item.id)}>-</button>
          <button className='action'   onClick={() => handleIncreaseQuantity(item.id)}>+</button>
        </li>
      ))}
      <button onClick={handleToggle}>Cancle</button>
    </ul>
    </div>
  </div>
  )
}

export default CartPage