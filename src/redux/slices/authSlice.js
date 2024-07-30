import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        user: null
    },
    reducers: {
        setCredentials: (state, action) => {
            state.token = action.payload.token
            state.user = action.payload.user
        },
        sendLogout: (state) => {
            state.token = null
            state.user = null
        }
    }
})

export const { setCredentials, sendLogout } = authSlice.actions

export default authSlice.reducer