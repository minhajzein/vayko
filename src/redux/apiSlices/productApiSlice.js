import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import apiSlice from "../../apis/apiSlice";

// imports................................................................................................


const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: (page) => ({
                url: `/products?page=${page}`,
                validateStatus: (response, result) => {
                    return response.status === 200 && result.success
                }
            }),
            keepUnusedDataFor: 5,
            providesTags: ['Products']
        }),
        getOurProducts: builder.query({
            query: () => ({
                url: '/most-purchased/products',
                validateStatus: (response, result) => {
                    return response.status === 200 && result.success
                }
            }),
            keepUnusedDataFor: 5,
            providesTags: ['Our-Products']
        }),
        trendingProducts: builder.query({
            query: () => ({
                url: '/trending/products',
                validateStatus: (response, result) => {
                    return response.status === 200 && result.success
                }
            }),
            keepUnusedDataFor: 5,
            providesTags: ['Trending-Products']
        }),
        getSingleProduct: builder.query({
            query: (slug) => ({
                url: `/products/${slug}`,
                validateStatus: (response, result) => {
                    return response.status === 200 && result.success
                }
            }),
            keepUnusedDataFor: 5,
            providesTags: ['Single-Product']
        })
    })
})



export const {
    useGetAllProductsQuery,
    useGetOurProductsQuery,
    useTrendingProductsQuery,
    useGetSingleProductQuery
} = productApiSlice





