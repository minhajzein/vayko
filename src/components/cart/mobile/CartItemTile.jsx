import { useDispatch, useSelector } from 'react-redux'
import DecrementQuantity from '../DecrementQuantity'
import Delete from '/svgs/Delete.svg'
import IncrementQuantity from '../IncrementQuantity'
import { useRemoveFromCartMutation } from '../../../redux/apiSlices/cartApiSlice'
import { CgSpinner } from 'react-icons/cg'
import { toast } from 'react-toastify'
import {
	decrementQuantity,
	incrementQuantity,
	removeItem,
} from '../../../redux/slices/cartSlice'

//imports................................................................

function CartItemTile({ product }) {
	const user = useSelector(state => state.auth.user)
	const dispatch = useDispatch()

	const [removeFromCart, { isLoading: removing }] = useRemoveFromCartMutation()

	const incrementQuant = () => {
		if (product.stock > 0) {
			dispatch(incrementQuantity(product))
		} else {
			toast.error('Insufficient stock')
		}
	}

	const decrementQuant = () => {
		if (product.quantity > 1) dispatch(decrementQuantity(product))
	}
	console.log(product)

	return (
		<div className='h-24 w-full flex gap-2'>
			<div className='h-full w-[40%] relative'>
				<img
					src={
						product?.product ? product?.product?.photos[0] : product.photos[0]
					}
					className='p-1 size-24 rounded-lg bg-white shadow-lg shadow-gray-300 object-cover'
					alt='product'
				/>
				<button
					onClick={() =>
						user ? removeFromCart(product?.id) : dispatch(removeItem(product))
					}
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
			<div className='flex flex-col h-full w-full  justify-between'>
				<h1 className='capitalize font-semibold line-clamp-1'>
					{product.product ? product?.product?.title : product.title}
				</h1>
				<div className='flex flex-col gap-1 w-full'>
					<h1 className='font-bold text-sm md:text-lg text-[#FE2B3E]'>
						₹{Number(product?.price).toFixed()}
					</h1>
					<div className='w-full flex justify-between items-center'>
						<div className='flex gap-4 border py-1 px-3 rounded-full'>
							{user ? (
								<DecrementQuantity
									userId={user?.id}
									cartId={product.id}
									quantity={product.quantity}
								/>
							) : (
								<button onClick={decrementQuant} className='opacity-50'>
									-
								</button>
							)}
							<p className='opacity-50'>{product.quantity}</p>
							{user ? (
								<IncrementQuantity userId={user?.id} cartId={product.id} />
							) : (
								<button onClick={incrementQuant} className='opacity-50'>
									+
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartItemTile
