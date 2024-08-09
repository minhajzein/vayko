import { useGetAllBannersQuery } from '../../redux/apiSlices/bannerApiSlice'

//imports................................................................................................

function MobileBanner() {
	const { data, isLoading } = useGetAllBannersQuery()

	return (
		<div className='w-full md:hidden'>
			{isLoading ? (
				<img
					src='/images/dummy-image-square.jpg'
					className='animate-pulse w-full'
				/>
			) : (
				<img src={data?.banners[0].mob_banner} alt='banner' />
			)}
		</div>
	)
}

export default MobileBanner
