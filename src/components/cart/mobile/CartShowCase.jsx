import CartItemTile from './CartItemTile'
import { useGetCartQuery } from '../../../redux/apiSlices/cartApiSlice'
import { useSelector } from 'react-redux'
import CartFooter from './CartFooter'
import ShippingAddress from '../ShippingAddress'
import OrderSummary from '../OrderSummary'
import { useState } from 'react'
import OrderSummaryWithoutUser from '../OrderSummaryWithoutUser'
import { Link } from 'react-router-dom'
import { useGetAllAddressesQuery } from '../../../redux/apiSlices/addressApiSlice'
import AddressForm from '../../checkout/AddressForm'

//imports................................................................

function CartShowCase() {
	const [shippingAddressId, setShippingAddressId] = useState(null)
	const user = useSelector(state => state.auth.user)
	const cart = useSelector(state => state.cart.cart)
	const { data: cartDetails, isSuccess } = useGetCartQuery(user?.id)

	return (
		<div className='flex flex-col gap-5 w-full'>
			{!user && cart.length === 0 && (
				<h1 className='text-center'>
					Your Cart is Empty{' '}
					<Link to='/products'>
						<span className='capitalize text-blue-500 underline'>
							browse products
						</span>
					</Link>
				</h1>
			)}
			<div className='w-full flex flex-col gap-4 md:p-4'>
				{user && isSuccess
					? cartDetails?.cartProducts.data.map(product => (
							<CartItemTile key={product.id} product={product} />
					  ))
					: cart.map(item => <CartItemTile key={item.slug} product={item} />)}
			</div>
			<CartFooter
				total={cartDetails?.cartProducts.data
					.reduce((acc, cur) => (acc += cur.quantity * cur.price), 0)
					.toFixed(2)}
				shippingAddressId={shippingAddressId}
				items={cartDetails?.cartProducts.data}
			/>
		</div>
	)
}

export default CartShowCase
