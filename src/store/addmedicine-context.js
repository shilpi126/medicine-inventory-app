import {createContext} from "react"

const MedicineContext = createContext({
    medicine:[],
    createMedicine : (item) => {},
    getMedicine : () => {},
    decreaseQuantity :(id) => {},
})



export default MedicineContext;
