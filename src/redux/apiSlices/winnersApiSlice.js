import apiSlice from "../../apis/apiSlice";

const winnersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllWinners: builder.query({
            query: () => ({
                url: '/winner-list',
                validateStatus: (response, result) => {
                    return response.status === 200 && result.success
                }
            }),
            keepUnusedDataFor: 5
        })
    })
})


export const { useGetAllWinnersQuery } = winnersApiSlice