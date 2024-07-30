import { useSelector } from 'react-redux'
import DecrementQuantity from '../DecrementQuantity'
import Delete from '/svgs/Delete.svg'
import IncrementQuantity from '../IncrementQuantity'
import { useRemoveFromCartMutation } from '../../../redux/apiSlices/cartApiSlice'
import { CgSpinner } from 'react-icons/cg'

//imports................................................................

function CartItemTile({ product }) {
	const user = useSelector(state => state.auth.user)
	const [removeFromCart, { isLoading: removing }] = useRemoveFromCartMutation()

	return (
		<div className='h-24 w-full flex gap-2'>
			<div className='h-full relative'>
				<img
					src={product.product.photos[0]}
					className='p-1 size-24 rounded-lg bg-white shadow-lg shadow-gray-300 object-cover'
					alt='product'
				/>
				<button
					onClick={() => removeFromCart(product.id)}
					disabled={removing}
					className='absolute bottom-2 left-2 bg-white p-2 shadow rounded-full'
				>
					{removing ? (
						<CgSpinner className='animate-spin' />
					) : (
						<img src={Delete} alt='Delete' />
					)}
				</button>
			</div>
			<div className='flex flex-col h-full  justify-between'>
				<h1 className='capitalize font-semibold line-clamp-1'>
					{product.product.title}
				</h1>
				<div className='flex flex-col gap-1 w-full'>
					<h1 className='font-bold text-sm md:text-lg text-[#FE2B3E]'>
						₹{product.price}
					</h1>
					<div className='w-full flex justify-between items-center'>
						<div className='flex gap-4 border py-1 px-3 rounded-full'>
							<DecrementQuantity
								userId={user?.id}
								cartId={product.id}
								quantity={product.quantity}
							/>
							<p className='opacity-50'>{product.quantity}</p>
							<IncrementQuantity userId={user?.id} cartId={product.id} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartItemTile
