import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import apiSlice from "../../apis/apiSlice";

// imports................................................................

const categoryAdapter = createEntityAdapter({})

const initialState = categoryAdapter.getInitialState()

const categoriesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllCategories: builder.query({
            query: () => ({
                url: '/categories',
                validateStatus: (response, result) => {
                    return response.status === 200 && result.success
                }
            }),
            keepUnusedDataFor: 5,
            transformResponse: async (responseData) => {
                const loadedData = await responseData.categories
                return categoryAdapter.setAll(initialState, loadedData)
            },
            providesTags: (result) => {
                if (result?.ids) {
                    return [
                        { type: 'Categories', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Categories', id }))
                    ]
                } else return [{
                    type: 'Categories', id: 'LIST'
                }]
            }
        })
    })
})


export const { useGetAllCategoriesQuery } = categoriesApiSlice




export const selectCategoriesResult = categoriesApiSlice.endpoints.getAllCategories.select()
const selectCategoryData = createSelector(selectCategoriesResult, categoryResult => categoryResult.data)


export const {
    selectAll: selectAllCategories,
    selectById: selectCategoryById,
    selectIds: selectCategoryIds
} = categoryAdapter.getSelectors(state => selectCategoryData(state) ?? initialState)