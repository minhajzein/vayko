import { useNavigate } from 'react-router-dom'
import AddToCart from '/svgs/Add-to-cart.svg'
import AddToWishlist from '/svgs/Add-to-wishlist.svg'

//imports................................................................................................

function NewItemCard({ product }) {
	const navigate = useNavigate()

	return (
		<div className='flex flex-col'>
			<div className='size-full relative'>
				<img
					src={product.image}
					className='p-1 rounded-lg bg-white shadow-lg shadow-gray-300 size-full object-cover'
					alt='product'
					onClick={() => navigate('/product')}
				/>
				<div className='absolute top-4 flex flex-col items-center justify-center gap-2 right-4'>
					<button className='bg-white rounded-full p-2 shadow'>
						<img src={AddToWishlist} alt='' />
					</button>
					<button className='bg-white rounded-full p-2 shadow'>
						<img src={AddToCart} alt='add-to-cart' />
					</button>
				</div>
			</div>
			<h2 className='text-sm opacity-50 capitalize'>{product.category}</h2>
			<h1 className='font-semibold capitalize'>{product.title}</h1>
			<div className='flex gap-1 text-lg'>
				<h1 className='font-bold text-[#FE2B3E]'>₹{product.discountPrice}</h1>
				<del className='opacity-50'>₹{product.price}</del>
			</div>
		</div>
	)
}

export default NewItemCard
