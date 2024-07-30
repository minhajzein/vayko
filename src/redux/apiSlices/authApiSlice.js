import apiSlice from "../../apis/apiSlice";

// imports.................................................................

const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getOtp: builder.mutation({
            query: (credentials) => ({
                url: '/user/request-otp',
                method: 'POST',
                body: { ...credentials }
            }),
            invalidatesTags: ['User']
        }),
        verifyOtp: builder.mutation({
            query: (credentials) => ({
                url: '/user/verify-otp',
                method: 'POST',
                body: { ...credentials }
            }),
            invalidatesTags: ['User']
        }),
        signup: builder.mutation({
            query: (credentials) => ({
                url: '/user/sign-up',
                method: 'POST',
                body: { ...credentials }
            }),
            invalidatesTags: ['User']
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: '/user/login',
                method: 'POST',
                body: { ...credentials }
            }),
            invalidatesTags: ['User']
        })
    })
})

export const { useGetOtpMutation, useVerifyOtpMutation, useLoginMutation, useSignupMutation } = authApiSlice