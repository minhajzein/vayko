import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "../config/baseUrl";

const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    credentials: "same-origin",
    timeout: 15000,
    prepareHeaders: (headers, { getState }) => {
        headers.set('Accept', 'application/json');
        headers.set('Cache-Control', 'no-cache');
        headers.set('Pragma', 'no-cache');
        headers.set('Expires', '0');
        headers.set('Access-Control-Allow-Origin', 'http://vayko.grohance.co.in')
        const token = getState().auth.token
        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
        }
        return headers
    }
})


const apiSlice = createApi({
    reducerPath: 'userApiService',
    baseQuery: baseQuery,
    tagTypes: [
        'User',
        'Products',
        'Wishlist',
        'Cart',
        'Next-Draw',
        'Banners',
        'Categories',
        'Our-Products',
        'Addresses',
        'Orders',
        'Trending-Products',
        'Second-Banner',
        'Third-Banner',
        'Fourth-Banner',
        'Winners',
        'Single-Product'
    ],
    endpoints: builder => ({})
})

export default apiSlice