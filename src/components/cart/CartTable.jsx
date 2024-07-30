import { useSelector } from 'react-redux'
import { useGetCartQuery } from '../../redux/apiSlices/cartApiSlice'
import ShippingAddress from './ShippingAddress'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CartShowCase from './mobile/CartShowCase'
import OrderSummary from './OrderSummary'

//imports................................................................................................

function CartTable() {
	const [shippingAddressId, setShippingAddressId] = useState(null)
	const user = useSelector(state => state.auth.user)
	const { data: cartDetails, isLoading, isSuccess } = useGetCartQuery(user?.id)

	return cartDetails?.cartProducts.data.length !== 0 ? (
		<div className='hidden w-full md:flex gap-4 relative pb-8'>
			<div className='w-[30%] border rounded-xl px-4'>
				<ShippingAddress setShippingAddressId={setShippingAddressId} />
			</div>
			<div className='w-[40%] border rounded-xl p-2'>
				<h1 className='text-xl font-bold px-4'>items</h1>
				<CartShowCase />
			</div>
			<div className='w-[30%] flex flex-col gap-5'>
				<OrderSummary
					cartDetails={cartDetails}
					shippingAddressId={shippingAddressId}
				/>
			</div>
		</div>
	) : (
		<div className='hidden w-full md:flex justify-center flex-col items-center gap-4 px-8 pb-8'>
			<h1 className='text-3xl'>No items in cart</h1>
			<Link to='/products'>
				<p className='underline text-blue-600'>browse products</p>
			</Link>
		</div>
	)
}

export default CartTable
