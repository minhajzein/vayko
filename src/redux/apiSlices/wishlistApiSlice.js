import apiSlice from "../../apis/apiSlice";

// imports................................................................................................

const wishlistApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getWishlist: builder.query({
            query: (userId) => ({
                url: `/wishlist/${userId}`,
                validateStatus: (response, result) => {
                    return response.status === 200 && result.success
                }
            }),
            keepUnusedDataFor: 5,
            providesTags: ['Wishlist']
        }),
        addToWishlist: builder.mutation({
            query: (data) => ({
                url: `/wishlist/${data.userId}`,
                method: 'POST',
                body: { slug: data.slug }
            }),
            invalidatesTags: ['Wishlist']
        }),
        removeFromWishlist: builder.mutation({
            query: (id) => ({
                url: `/wishlist/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Wishlist']
        })
    })
})


export const { useGetWishlistQuery, useAddToWishlistMutation, useRemoveFromWishlistMutation } = wishlistApiSlice