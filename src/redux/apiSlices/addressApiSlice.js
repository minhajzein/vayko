import apiSlice from "../../apis/apiSlice";

// imports................................................................................................

const addressApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllAddresses: builder.query({
            query: (userId) => ({
                url: `/address/${userId}`,
                validateStatus: (response, result) => {
                    return response.status === 200 && result.success
                }
            }),
            keepUnusedDataFor: 5,
            providesTags: ['Addresses']
        }),
        addAnAddress: builder.mutation({
            query: (data) => ({
                url: `/address/${data.userId}`,
                method: 'POST',
                body: { ...data.credentials }
            }),
            invalidatesTags: ['Addresses']
        }),
        editAddress: builder.mutation({
            query: (data) => ({
                url: `/address/update/${data.id}`,
                method: 'PUT',
                body: { ...data.credentials }
            }),
            invalidatesTags: ['Addresses']
        }),
        removeAddress: builder.mutation({
            query: (id) => ({
                url: `/address/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Addresses']
        }),
        getShippingCharge: builder.query({
            query: (id) => ({
                url: `/shipping-charge/${id}`,
                validateStatus: (response, result) => {
                    return response.status === 200 && result.success
                }
            }),
            keepUnusedDataFor: 5,
        })
    })
})

export const {
    useGetAllAddressesQuery,
    useAddAnAddressMutation,
    useEditAddressMutation,
    useRemoveAddressMutation,
    useGetShippingChargeQuery
} = addressApiSlice