import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "../Reducer/cart-reducer"
import likeReducer from "../Reducer/like-reducer"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        like: likeReducer
    }
})