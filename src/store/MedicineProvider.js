import React, { useEffect, useState } from 'react'
import MedicineContext from './addmedicine-context'
import axios from "axios";

const API_KEY ='https://crudcrud.com/api/6734188cfb534a099b373049b804830c/medicine'

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
            
        try{
            let finddata = medicine.find((item,index) => item._id == id)

            const response = await axios.put(`${API_KEY}/${id}`,{
                quantity: finddata.quantity - 1,
                name:finddata.name,
                price:finddata.price,
                description:finddata.description
                
            })


            const filteredData = medicine.map((item)=>{
                if(item._id == id){
                    return {...item, quantity: +item.quantity - 1} 
                }
                return item;
            })
    
            setMedicine(filteredData);
            
        
        }catch(err){
            console.log(err)
        }


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