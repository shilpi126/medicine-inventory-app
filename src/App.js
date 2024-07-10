import AddMedicineForm from "./components/AddMedicineForm";
import MedicineList from "./components/MedicineList";
import CartProvider from "./store/CartProvider";
import MedicineProvider from "./store/MedicineProvider";


function App() {
  return (
      <MedicineProvider>
        <CartProvider>
        <AddMedicineForm/>
        <MedicineList/>
        </CartProvider>
      </MedicineProvider>
  );
}

export default App;
