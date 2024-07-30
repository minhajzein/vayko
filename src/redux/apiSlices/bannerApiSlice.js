import apiSlice from "../../apis/apiSlice";

const bannerApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllBanners: builder.query({
            query: () => ({
                url: '/banners',
                validateStatus: (response, result) => {
                    return response.status === 200
                }
            }),
            keepUnusedDataFor: 5,
            providesTags: ['Banners']
        }),

    })
})



export const { useGetAllBannersQuery } = bannerApiSlice