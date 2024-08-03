import apiSlice from "../../apis/apiSlice";

// imports................................................................................................

const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllOrders: builder.query({
            query: (userId, page = 1) => ({
                url: `/order/${userId}?page=${page}`,
                validateStatus: (response, result) => {
                    return response.status === 200 && result.success
                }
            }),
            keepUnusedDataFor: 5,
            providesTags: ['Orders']
        }),
        downloadInvoice: builder.query({
            query: (id) => ({
                url: `/invoice/${id}`,
                validateStatus: (response, result) => {
                    return response.status === 200, result.success
                },
                keepUnusedDataFor: 5
            })
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
    useVerifyPaymentMutation,
    useDownloadInvoiceQuery
} = orderApiSlice