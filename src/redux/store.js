import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import apiSlice from "../apis/apiSlice";


// imports................................................................

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice
    },
    middleware: (getDefaultMiddleware) => {
        const allMiddleware = [
            apiSlice.middleware,
        ];
        return getDefaultMiddleware({ serializableCheck: false }).concat(...allMiddleware)
    }
})


export default store