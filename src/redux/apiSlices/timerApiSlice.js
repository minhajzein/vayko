import apiSlice from "../../apis/apiSlice";

// imports................................................................................................

const timerApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getDrawTime: builder.query({
            query: () => ({
                url: '/next-draws',
                validateStatus: (response, result) => {
                    return response.status === 200 && result.success
                },
            }),
            providesTags: ['Next-Draw'],
            keepUnusedDataFor: 5
        })
    })
})


export const { useGetDrawTimeQuery } = timerApiSlice