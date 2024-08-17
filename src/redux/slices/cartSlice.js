import { createSlice } from "@reduxjs/toolkit";

// imports................................................................

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []
    },
    reducers: {
        addItemToCart: (state, action) => {
            state.cart.push({ ...action.payload, quantity: 1 })
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter(x => x.id !== action.payload.id)
        },
        incrementQuantity: (state, action) => {
            state.cart = state.cart.map(x => x.id === action.payload.id ? { ...x, quantity: x.quantity + 1 } : x)
        },
        decrementQuantity: (state, action) => {
            state.cart = state.cart.map(x => x.id === action.payload.id ? { ...x, quantity: x.quantity - 1 } : x)
        }
    }
})

export const { addItemToCart, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions

export default cartSlice.reducer