import CartItem from "./CartItem"
import {  useDispatch,useSelector } from 'react-redux'
import { clearCart } from "../feature/cart/cartsSlice"
export const CartContainer = () => {

    const dispatch = useDispatch()
   
    const {cartItem,total,amount}=useSelector((state)=>state.cart)

    if(amount<1){
        return<section className="cart">
            <header>
           <h2>your bag</h2>
           <h4 className="empty-cart">is current empty</h4>
            </header>
        </section>
    }


  return <section className="cart">
  <header>
    <h2>your bag</h2>
  </header>
  <div>
    {cartItem.map((item)=>{
        return <CartItem key={item.id} {...item}/>
    })}
  </div>
  <footer>
    <hr/>
    <div className="cart-total">
   <h4>
    total <span>${total}</span>
   </h4>
    </div>
    <button className="btn clear-btn" onClick={()=>dispatch(clearCart())}>clear cart</button>
  </footer>
  </section>
}
