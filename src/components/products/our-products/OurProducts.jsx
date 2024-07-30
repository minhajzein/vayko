import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard'
import { useGetOurProductsQuery } from '../../../redux/apiSlices/productApiSlice'
import { useGetWishlistQuery } from '../../../redux/apiSlices/wishlistApiSlice'
import { useSelector } from 'react-redux'
import NowSellingProductSkelton from '../../../skeltons/NowSellingProductSkelton'

//imports................................................................................................

function OurProducts() {
	const user = useSelector(state => state.auth.user)
	const { data: ourProducts, isLoading } = useGetOurProductsQuery()
	const { data } = useGetWishlistQuery(user?.id)
	const wishlist = data?.wishlists.data

	return (
		<div className='flex w-full md:px-[80px] px-4 mb-4 md:mb-0 pt-5'>
			<div className='w-full flex flex-col'>
				<div className='w-full flex justify-between'>
					<h1 className='capitalize font-bold text-sm md:text-2xl text-[#FF2A3E]'>
						Win a Scooter 🛵 with Your Purchase!
					</h1>
					<Link
						to='/products'
						className='flex justify-center items-center md:text-xl text-xs gap-2 capitalize text-[#FF2A3E]'
					>
						view all <img src='/svgs/arrow-right-red.svg' className='' alt='' />
					</Link>
				</div>
				{isLoading ? (
					<NowSellingProductSkelton />
				) : (
					<div className='grid md:grid-cols-5 grid-cols-2 md:gap-6 gap-3 pt-4 w-full'>
						{ourProducts?.mostPurchasedProducts.map(product => (
							<ProductCard
								key={product.id}
								product={product}
								wishlist={wishlist}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default OurProducts
