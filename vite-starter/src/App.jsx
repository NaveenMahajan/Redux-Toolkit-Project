import { Store } from "./Store";
import Navbar from "./component/Navbar";
import { CartContainer } from './component/CartContainer'
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotals } from "./feature/cart/cartsSlice";
function App() {
const {cartItem}= useSelector((store)=>store.cart)
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(calculateTotals())

},[cartItem])
  return(
   <>
   <Navbar/>
   <CartContainer/>
   </>
  )
}
export default App;
