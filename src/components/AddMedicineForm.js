import React, { useContext, useState } from 'react'
import "./AddMedicineForm.css"
import MedicineContext from '../store/addmedicine-context';
import CartContext from '../store/cart-context';
import CartPage from './CartPage';
const AddMedicineForm = () => {
    const [medicineName, setMedicineName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [toggle, seToggle] = useState(false)
    const medCtx = useContext(MedicineContext);
    const cartCtx = useContext(CartContext);

    const handleNameChange = (event) => {
        setMedicineName(event.target.value)
    }

    const handleDescriptionChange = (event) =>{
        setDescription(event.target.value)
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleCartToggle = () => {
        seToggle((prev) => !prev)
    }


    const handleFormSubmit = (event) => {
        event.preventDefault();
        //console.log(medicineName, price, description,quantity)

        const medicineData = {
            name:medicineName,
            price,
            quantity,
            description,
        }

        medCtx.createMedicine(medicineData)

    }

  return (
    <React.Fragment>
        <div className='container'> 
            <form onSubmit={handleFormSubmit}>
                <div>
                <label htmlFor='medname'>Medicine Name :</label>
                <input 
                type='text' 
                id='medname'
                value={medicineName}
                onChange={handleNameChange}
                />
                </div>
                <div>
                <label htmlFor='description'>Description :</label>
                <input
                 type='text' 
                 id='description'
                 value={description}
                 onChange={handleDescriptionChange}
                />
                </div>
                <div>
                <label>Price :</label>
                <input
                 type='number' 
                 id='price'
                 value={price}
                 onChange={handlePriceChange}
                />
                </div>
                <div>
                <label>Quantity :</label>
                <input
                 type='number' 
                 id='quantity'
                 value={quantity}
                 onChange={handleQuantityChange}
                />
                </div>
                <button type='submit'>Add Medicine</button>
            </form>
            <div>
                <div className='badge'>{cartCtx.cart.length}</div>
                <button onClick={handleCartToggle} >Cart</button>
            </div>
          
        </div>
           <div className='cartpage'>
           {toggle && <CartPage  onToggle={handleCartToggle}/>}
           </div>
    </React.Fragment>
  )
}

export default AddMedicineForm