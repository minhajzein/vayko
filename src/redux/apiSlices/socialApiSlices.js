import apiSlice from "../../apis/apiSlice";

// imports........................................................................................

const socialApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getInstaLinks: builder.query({
            query: () => ({
                url: '/links',
                validateStatus: (response, result) => {
                    return response.status === 200 && result.success
                }
            }),
            keepUnusedDataFor: 5
        })
    })
})


export const { useGetInstaLinksQuery } = socialApiSlice