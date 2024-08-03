import { IoGift } from 'react-icons/io5'
import CreateOrder from './CreateOrder'
import { GiPartyPopper } from 'react-icons/gi'
import { FaShippingFast } from 'react-icons/fa'

//imports................................................................................................

function OrderSummary({ cartDetails, shippingAddressId }) {
	return (
		<div className='rounded-xl border w-full p-5 flex flex-col gap-4'>
			<h1 className='capitalize text-2xl opacity-60 font-semibold'>
				order summary
			</h1>
			<hr />
			<div className='flex justify-between text-lg'>
				<h1 className='opacity-50 capitalize tex'>items</h1>
				<h1 className='capitalize'>
					{cartDetails?.cartProducts.data.reduce(
						(acc, cur) => (acc += Number(cur.quantity)),
						0
					)}
				</h1>
			</div>
			<div className='flex justify-between text-lg'>
				<h1 className='opacity-50 capitalize tex'>
					subtotal <span className='text-xs'>Incl. 18% GST</span>
				</h1>
				<h1 className='capitalize'>
					₹
					{cartDetails?.cartProducts.data
						.reduce((acc, cur) => (acc += Number(cur.total)), 0)
						.toFixed(2)}
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
			<hr />
			<div className='flex justify-between text-xl font-bold'>
				<h1 className='capitalize'>grand total</h1>
				<h1 className='capitalize truncate'>
					₹
					{cartDetails?.cartProducts.data
						.reduce((acc, cur) => (acc += Number(cur.total)), 0)
						.toFixed()}{' '}
					/-
				</h1>
			</div>

			<CreateOrder
				shippingAddressId={shippingAddressId}
				items={cartDetails?.cartProducts.data}
			/>
		</div>
	)
}

export default OrderSummary
