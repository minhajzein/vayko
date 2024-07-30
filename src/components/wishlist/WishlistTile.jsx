import AddFromWishlist from '/svgs/Add-from-wishlist.svg'
import Delete from '/svgs/Delete.svg'

//imports................................................................................................

function WishlistTile({ product }) {
	return (
		<div className='h-24 w-full flex gap-2'>
			<div className='h-full relative'>
				<img
					src={product.image}
					className='p-1 h-full rounded-lg bg-white shadow-lg shadow-gray-300 object-cover'
					alt='product'
				/>
				<button className='absolute bottom-2 left-2 bg-white p-2 shadow rounded-full'>
					<img src={Delete} alt='Delete' />
				</button>
			</div>
			<div className='max-w-[50%] flex flex-col'>
				<h1 className='capitalize font-semibold text-sm'>shoes</h1>
				<p className='text-[10px] line-clamp-2'>{product.description}</p>
				<div className='flex gap-2 text-lg'>
					<h1 className='font-bold text-sm text-[#FE2B3E]'>
						₹{product.discountPrice}
					</h1>
					<del className='opacity-50 text-sm'>₹{product.price}</del>
				</div>
				<div className='flex gap-1 justify-between items-center'>
					<div className='size-5 ring-1 p-1 rounded-full bg-blue-200'></div>
					<div className='h-full bg-black text-white px-3 rounded-lg'>M</div>
					<div className='flex gap-4 border  px-3 rounded-full'>
						<button className='opacity-50'>-</button>
						<p className='opacity-50'>2</p>
						<button className='opacity-50'>+</button>
					</div>
				</div>
			</div>
			<div className='h-full w-[20%] flex justify-end items-end p-1'>
				<button>
					<img src={AddFromWishlist} alt='add-to-cart' />
				</button>
			</div>
		</div>
	)
}

export default WishlistTile
