import CartItemTile from './CartItemTile'
import { useGetCartQuery } from '../../../redux/apiSlices/cartApiSlice'
import { useSelector } from 'react-redux'
import CartFooter from './CartFooter'
import ShippingAddress from '../ShippingAddress'
import OrderSummary from '../OrderSummary'
import { useState } from 'react'

//imports................................................................

function CartShowCase() {
	const [shippingAddressId, setShippingAddressId] = useState(null)
	const user = useSelector(state => state.auth.user)

	const { data: cartDetails, isLoading } = useGetCartQuery(user?.id)

	return (
		<div className='flex flex-col gap-5 w-full pb-24'>
			<div className='w-full flex flex-col gap-4 p-4'>
				{cartDetails?.cartProducts.data.map(product => (
					<CartItemTile key={product.id} product={product} />
				))}
			</div>
			<div className='md:hidden flex flex-col gap-4 px-4'>
				<ShippingAddress setShippingAddressId={setShippingAddressId} />
				<OrderSummary
					cartDetails={cartDetails}
					shippingAddressId={shippingAddressId}
				/>
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
