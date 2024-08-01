import { useGetAllBannersQuery } from '../../redux/apiSlices/bannerApiSlice'

//imports................................................................................................

function MobileBanner() {
	const { data } = useGetAllBannersQuery()

	return (
		<div className='w-full md:hidden'>
			<img src={data?.banners[0].mob_banner} alt='banner' />
		</div>
	)
}

export default MobileBanner
