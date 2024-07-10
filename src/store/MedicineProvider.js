import React, { useEffect, useState } from 'react'
import MedicineContext from './addmedicine-context'

import axios from "axios";


 const API_KEY ='https://crudcrud.com/api/14cab97d56e74c63994aae48724a0fda/medicine'

const MedicineProvider = (props) => {
    const [medicine, setMedicine] = useState([])
    
    const createMedicine = async(item) => {
         try{
            const response = await axios.post(API_KEY,item)
            const data = response.data;
            setMedicine([...medicine, data]);

         }catch(err){
            console.log(err.message)
         }
    }

    const getMedicine = async() => {
        try{
            const response = await axios.get(API_KEY)
            const data = response.data;
            setMedicine(data)
         }catch(err){
            console.log(err)
         }
    }


    useEffect(()=>{
        getMedicine();
    },[])


    const decreaseQuantity = async(id) => {
        
        const filteredData = medicine.map((item)=>{
            if(item._id == id){
                
            return {...item, quantity: +item.quantity - 1} 
            }
            return item;
          })

          
          setMedicine(filteredData);
         
       
    
    }




    const medicineValue = {
        medicine,
        createMedicine,
        getMedicine,
        decreaseQuantity,
    }



  return (
    <MedicineContext.Provider value={medicineValue}>
        {props.children}
    </MedicineContext.Provider>
  )
}

export default MedicineProvider