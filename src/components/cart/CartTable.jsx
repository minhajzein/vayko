import { useSelector } from 'react-redux'
import { useGetCartQuery } from '../../redux/apiSlices/cartApiSlice'
import ShippingAddress from './ShippingAddress'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CartShowCase from './mobile/CartShowCase'
import OrderSummary from './OrderSummary'
import OrderSummaryWithoutUser from './OrderSummaryWithoutUser'
import { useGetAllAddressesQuery } from '../../redux/apiSlices/addressApiSlice'
import AddressForm from '../../components/checkout/AddressForm'

//imports................................................................................................

function CartTable() {
	const [shippingAddressId, setShippingAddressId] = useState(null)
	const user = useSelector(state => state.auth.user)
	const { data: cartDetails } = useGetCartQuery(user?.id)
	const { data: address } = useGetAllAddressesQuery(user?.id)

	return cartDetails?.cartProducts.data.length !== 0 ? (
		<div className='hidden w-full md:flex gap-4 justify-center relative pb-8'>
			<div className='w-[40%] border rounded-xl p-2'>
				<h1 className='text-xl font-bold px-6'>items</h1>
				<CartShowCase />
			</div>
			{user && (
				<div className='w-[30%] border rounded-xl p-4'>
					{address?.addresses.length !== 0 ? (
						<ShippingAddress setShippingAddressId={setShippingAddressId} />
					) : (
						<AddressForm />
					)}
				</div>
			)}
			<div className='w-[30%] flex flex-col gap-5'>
				{user ? (
					<OrderSummary
						cartDetails={cartDetails}
						shippingAddressId={shippingAddressId}
					/>
				) : (
					<OrderSummaryWithoutUser />
				)}
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
