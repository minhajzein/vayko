import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import apiSlice from "../apis/apiSlice";
import cartSlice from "./slices/cartSlice";


// imports................................................................

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice,
        cart: cartSlice
    },
    middleware: (getDefaultMiddleware) => {
        const allMiddleware = [
            apiSlice.middleware,
        ];
        return getDefaultMiddleware({ serializableCheck: false }).concat(...allMiddleware)
    }
})


export default store