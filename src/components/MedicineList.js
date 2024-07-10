import React, { useContext } from 'react'
import "./MedicineList.css"
import MedicineContext from '../store/addmedicine-context'
import CartContext from '../store/cart-context';

const MedicineList = () => {
    const medCtx = useContext(MedicineContext);
     const cartCtx = useContext(CartContext)
     
    const addToCartData = (event) => {
        cartCtx.addToCart(event.target.id);
        medCtx.decreaseQuantity(event.target.id)
    }
    
  return (
    
        <ul >
           {medCtx.medicine.map((item, index) => {
            return(
                <li key={item._id}>
                <p>{index+1}</p>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.description}</p>
                <p>{item.quantity > 0 ? item.quantity : <p>Out of Stock</p>}</p>
                {item.quantity > 0 ?  <button id={item._id} onClick={addToCartData}>Add To cart</button> :  <button disabled>Add To cart</button>}
            </li>
            )
           })}
           
        </ul>
    
  )
}

export default MedicineList