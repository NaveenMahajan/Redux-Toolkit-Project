import {configureStore} from '@reduxjs/toolkit'
import cartReducer from'./feature/cart/cartsSlice'
export const Store = configureStore({
    reducer:{ 
        cart:cartReducer,
    },
})
