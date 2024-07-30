import React from 'react'
import { useGetAllBannersQuery } from '../../redux/apiSlices/bannerApiSlice'

//imports................................................................

function ExcitingPrices() {
	const { data, isLoading } = useGetAllBannersQuery()

	return (
		<div className='w-full hidden md:block'>
			{isLoading ? (
				<img
					src='/images/banner-main-placeholder.jpg'
					className='animate-pulse w-full'
					alt='placeholder'
				/>
			) : (
				<img
					src={data?.banners[0].first_banner}
					className='w-full hidden md:block'
					alt='banner'
				/>
			)}
		</div>
	)
}

export default ExcitingPrices
