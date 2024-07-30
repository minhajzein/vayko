import apiSlice from "../../apis/apiSlice";

// imports................................................................

const cartApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCart: builder.query({
            query: (userId) => ({
                url: `/cart/${userId}`,
                validateStatus: (response, result) => {
                    return response.status === 200 && result.success
                }
            }),
            keepUnusedDataFor: 5,
            providesTags: ['Cart', 'Products']
        }),
        addToCart: builder.mutation({
            query: (data) => ({
                url: `/cart/${data.userId}`,
                method: 'POST',
                body: { ...data.credentials }
            }),
            invalidatesTags: ['Cart', 'Products']
        }),
        removeFromCart: builder.mutation({
            query: (cartId) => ({
                url: `/cart/${cartId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Cart', 'Products']
        }),
        incrementQuantity: builder.mutation({
            query: (data) => ({
                url: `cart/increment/${data.userId}/${data.cartId}`,
                method: 'PUT'
            }),
            invalidatesTags: ['Cart', 'Products']
        }),
        decrementQuantity: builder.mutation({
            query: (data) => ({
                url: `cart/decrement/${data.userId}/${data.cartId}`,
                method: 'PUT'
            }),
            invalidatesTags: ['Cart', 'Products']
        })
    })
})


export const {
    useGetCartQuery,
    useAddToCartMutation,
    useRemoveFromCartMutation,
    useIncrementQuantityMutation,
    useDecrementQuantityMutation
} = cartApiSlice

