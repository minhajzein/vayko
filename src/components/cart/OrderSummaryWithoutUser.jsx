import { FaShippingFast } from 'react-icons/fa'
import { GiPartyPopper } from 'react-icons/gi'
import { useSelector } from 'react-redux'
import CreateOrder from './CreateOrder'
import { useLocation } from 'react-router-dom'

//imports................................................................

function OrderSummaryWithoutUser() {
	const { pathname } = useLocation()
	const cart = useSelector(state => state.cart.cart)

	return (
		<div className='rounded-xl md:border mb-24 md:mb-0 w-full md:p-5 flex flex-col gap-4'>
			<h1 className='capitalize text-2xl opacity-60 font-semibold'>
				order summary
			</h1>
			<hr />
			<div className='flex justify-between text-lg'>
				<h1 className='opacity-50 capitalize tex'>items</h1>
				<h1 className='capitalize'>
					{cart.reduce((acc, cur) => (acc += Number(cur.quantity)), 0)}
				</h1>
			</div>
			<div className='flex justify-between text-lg'>
				<h1 className='opacity-50 capitalize tex'>
					subtotal <span className='text-xs'>Incl. 18% GST</span>
				</h1>
				<h1 className='capitalize'>
					₹
					{cart
						.reduce((acc, cur) => (acc += Number(cur.price) * cur.quantity), 0)
						.toFixed()}
					/-
				</h1>
			</div>

			<div className='flex justify-between text-lg'>
				<h1 className='opacity-50 capitalize flex items-center gap-1'>
					<FaShippingFast />
					shipping
				</h1>
				<h1 className='capitalize text-green-600 flex items-center justify-center font-bold gap-1'>
					<GiPartyPopper className='animate-bounce-shake text-[#FF2A3E]' />
					free
				</h1>
			</div>
			<h1 className='text-[#FF2A3E] text-xs text-center'>
				Delivery within 15 to 20 days
			</h1>
			<hr />
			<div className='flex justify-between text-xl font-bold'>
				<h1 className='capitalize'>grand total</h1>
				<h1 className='capitalize truncate'>
					₹
					{cart
						.reduce((acc, cur) => (acc += Number(cur.price) * cur.quantity), 0)
						.toFixed()}{' '}
					/-
				</h1>
			</div>
			{pathname !== '/checkout' && <CreateOrder />}
		</div>
	)
}

export default OrderSummaryWithoutUser
