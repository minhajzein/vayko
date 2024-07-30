import { Link, useNavigate } from 'react-router-dom'
import AddProductToCart from './AddProductToCart'
import AddProductToWishlist from './AddProductToWishlist'
import FastCheckout from '../single-product/FastCheckout'

//imports................................................................

function ProductCard({ wishlist, product }) {
	const navigate = useNavigate()
	return (
		<div className='flex flex-col gap-1 my-1 md:gap-2'>
			<div className='w-full overflow-hidden rounded-lg relative'>
				<img
					src={product?.photos[0]}
					onClick={() => navigate(`/product/${product.slug}`)}
					className='md:h-64 cursor-pointer md:hover:scale-150 duration-300 rounded-lg bg-white shadow-lg shadow-gray-300 object-cover'
					alt='product'
				/>
				<div className='absolute top-4 flex flex-col items-center justify-center gap-2 right-4'>
					<AddProductToWishlist
						slug={product.slug}
						title={product.title}
						wishlist={wishlist}
					/>
				</div>
			</div>
			<div className='flex flex-col md:gap-1'>
				<Link to={`/product/${product.slug}`}>
					<h1 className='font-semibold truncate capitalize'>
						{product?.title}
					</h1>
				</Link>
				<h2 className='text-sm opacity-50 capitalize'>
					{product?.cat_info?.title}
				</h2>
			</div>

			<div className='flex gap-2 md:text-lg items-center'>
				{product?.discount ? (
					<>
						<h1 className='font-bold text-[#FE2B3E]'>
							₹
							{(
								Number(product.price) -
								(Number(product.price) * Number(product.discount)) / 100
							).toFixed()}
						</h1>
						<del className='opacity-50'>₹{Number(product.price).toFixed()}</del>
					</>
				) : (
					<h1 className='font-bold text-[#FE2B3E]'>₹{product.price}</h1>
				)}
			</div>
			<div className='top-4 flex items-center justify-center gap-[6px] right-4'>
				<FastCheckout product={product} />
				<AddProductToCart
					slug={product.slug}
					title={product.title}
					variantId={product.is_variable !== '0' ? product.variants : null}
				/>
			</div>
		</div>
	)
}

export default ProductCard
