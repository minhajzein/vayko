import AddProductToWishlist from '../AddProductToWishlist'
import AddProductToCart from '../AddProductToCart'

//imports................................................................

function TrendingCard({ product }) {
	return (
		<div className='flex flex-col'>
			<div className='size-full relative'>
				<img
					src={product?.photos[0]}
					onClick={() => navigate(`/product/${product.slug}`)}
					className='w-full md:h-44  rounded-lg bg-white shadow-lg shadow-gray-300 object-cover'
					alt='product'
				/>
				<div className='absolute top-4 flex flex-col items-center justify-center gap-2 right-4'>
					<AddProductToWishlist
						slug={product.slug}
						title={product.title}
						wishlist={wishlist}
					/>
					<AddProductToCart
						slug={product.slug}
						title={product.title}
						variantId={product.is_variable !== '0' ? product.variants : null}
					/>
				</div>
			</div>
			<h2 className='text-sm opacity-50 capitalize'>
				{product?.cat_info?.title}
			</h2>
			<h1 className='font-semibold capitalize truncate'>{product?.title}</h1>
			<div className='flex gap-1 text-lg'>
				{product?.discount ? (
					<>
						<h1 className='font-bold text-[#FE2B3E]'>
							₹
							{Number(product.price) -
								(Number(product.price) * Number(product.discount)) / 100}
						</h1>
						<del className='opacity-50'>₹{product.price}</del>
					</>
				) : (
					<h1 className='font-bold text-[#FE2B3E]'>₹{product.price}</h1>
				)}
			</div>
		</div>
	)
}

export default TrendingCard
