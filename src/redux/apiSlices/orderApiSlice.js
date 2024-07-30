import apiSlice from "../../apis/apiSlice";

// imports................................................................................................

const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllOrders: builder.query({
            query: (userId) => ({
                url: `/order/${userId}`,
                validateStatus: (response, result) => {
                    return response.status === 200 && result.success
                }
            }),
            keepUnusedDataFor: 5,
            providesTags: ['Orders']
        }),
        createOrder: builder.mutation({
            query: (data) => ({
                url: `/order/${data.userId}`,
                method: 'POST',
                body: { ...data.credentials }
            }),
            invalidatesTags: ['Orders', 'Cart']
        }),
        createSingleOrder: builder.mutation({
            query: (data) => ({
                url: `/order/single/${data.userId}`,
                method: 'POST',
                body: { ...data.credentials }
            }),
            invalidatesTags: ['Orders']
        }),
        verifyPayment: builder.mutation({
            query: (credentials) => ({
                url: '/verify-payment',
                method: 'POST',
                body: { ...credentials }
            }),
            invalidatesTags: ['Orders', 'Cart']
        })
    })
})


export const {
    useGetAllOrdersQuery,
    useCreateOrderMutation,
    useCreateSingleOrderMutation,
    useVerifyPaymentMutation
} = orderApiSlice