import React, { useEffect, useState } from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {
  const data = JSON.parse(localStorage.getItem('cartData')) || [];
const [cartItem, setCartItem] = useState(data);
const [totalQuanity, setTotalQuantity] = useState(null)



const addToCart = async (item) => {
  //console.log(item)
  try {

    const existingItem = cartItem?.find((product) => product.id === item._id);
//console.log(cartItem)
    if (!existingItem) {
      const updatedCart = [
        ...cartItem,
        {
          id: item._id,
          price: item.price,
          name: item.name,
          description: item.description,
          quantity: 1,
        },
      ];
      
      
      setCartItem(updatedCart); 
      localStorage.setItem('cartData', JSON.stringify(updatedCart));
    } else {
      const updatedCart = cartItem.map((product) =>
        product.id === item._id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      console.log(updatedCart)
      setCartItem(updatedCart); 
      localStorage.setItem('cartData', JSON.stringify(updatedCart));
    }
  } catch (err) {
    console.log(err.message);
  }
};



const decreaseItemQuantity = (id) => {
  //console.log(id)
  let existingItem = cartItem.find((product) => product.id === id);
  //console.log(existingItem)
  if (existingItem && existingItem.quantity > 1) {
    
    const updatedCart = cartItem.map((product) =>
      product.id === id ? { ...product, quantity: product.quantity - 1 } : product
    );
    setCartItem(updatedCart);
    localStorage.setItem('cartData', JSON.stringify(updatedCart));
  } else {
    
    const updatedCart = cartItem.filter((product) => product.id !== id);
    setCartItem(updatedCart); 
    localStorage.setItem('cartData', JSON.stringify(updatedCart));
  }
};


const increaseQuantity = (id) => {
  let existingItem = cartItem.find((product) => product.id === id);
  if (existingItem) {
    
    const updatedCart = cartItem.map((product) =>
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    );
    setCartItem(updatedCart); 
    localStorage.setItem('cartData', JSON.stringify(updatedCart)); 


















  }

}



const getCartData = () => {
const data = JSON.parse(localStorage.getItem('cartData'))
if(data){
  setCartItem(data)
}

}


useEffect(() => {
  getCartData();

},[])





    const cartData = {
        cart:cartItem,
        addToCart,
        getCartData,
        decreaseItemQuantity,
        increaseQuantity,
      

    }


  return (
    <CartContext.Provider value={cartData}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider