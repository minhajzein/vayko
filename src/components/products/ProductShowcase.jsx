import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useGetAllProductsQuery } from '../../redux/apiSlices/productApiSlice'
import { useGetWishlistQuery } from '../../redux/apiSlices/wishlistApiSlice'
import ProductCard from './ProductCard'
import Pagination from './Pagination'
import ProductsPageSkelton from '../../skeltons/ProductsPageSkelton'

//imports................................................................

function ProductShowcase() {
	const [page, setPage] = useState(1)
	const user = useSelector(state => state.auth.user)
	const {
		data: productsDetails,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetAllProductsQuery(page)
	const { data } = useGetWishlistQuery(user?.id)
	const wishlist = data?.wishlists.data

	let content

	return (
		<div className='w-full flex md:py-10'>
			<div className='w-[20%] hidden md:flex flex-col pr-4 gap-4'>
				<h1 className='font-bold text-xl'>Filter option</h1>
				<hr className='w-[70%]' />
				<div className='py-1'>
					<h1 className='font-semibold'>Category</h1>
					<ul className='py-3 flex flex-col gap-5'>
						<li className='flex gap-2 items-center'>
							<input type='checkbox' defaultChecked />
							<h1>Watches</h1>
						</li>
					</ul>
					<hr className='w-[70%]' />
				</div>
				<div className='w-full'>
					<img src='/images/Announcement.png' alt='' />
				</div>
			</div>
			<div className='w-full md:w-[80%] flex flex-col gap-2'>
				<div className='px-3 grid w-full grid-cols-2 md:grid-cols-5 gap-5'>
					{isLoading ? (
						<ProductsPageSkelton />
					) : (
						isSuccess &&
						productsDetails?.products?.data?.map(product => (
							<ProductCard
								key={product.id}
								product={product}
								wishlist={wishlist}
							/>
						))
					)}
				</div>
				{/* <Pagination
						isSuccess={isSuccess}
						links={productsDetails.products.links}
						lastPage={productsDetails.products.last_page}
						setPage={setPage}
						page={page}
					/> */}
			</div>
		</div>
	)
}

export default ProductShowcase
