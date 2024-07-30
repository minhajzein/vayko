import CreateOrder from './CreateOrder'

//imports................................................................................................

function OrderSummary({ cartDetails, shippingAddressId }) {
	return (
		<div className='rounded-xl border w-full p-10 flex flex-col gap-5'>
			<h1 className='capitalize text-2xl opacity-60 font-semibold'>
				order summary
			</h1>
			<hr />
			<div className='flex justify-between text-xl'>
				<h1 className='opacity-50 capitalize tex'>items</h1>
				<h1 className='capitalize'>
					{cartDetails?.cartProducts.data.reduce(
						(acc, cur) => (acc += Number(cur.quantity)),
						0
					)}
				</h1>
			</div>
			<div className='flex justify-between text-xl'>
				<h1 className='opacity-50 capitalize tex'>subtotal</h1>
				<h1 className='capitalize'>
					₹
					{cartDetails?.cartProducts.data
						.reduce((acc, cur) => (acc += Number(cur.total)), 0)
						.toFixed(2)}
				</h1>
			</div>
			<div className='flex justify-between text-xl'>
				<h1 className='opacity-50 capitalize tex'>shipping</h1>
				<h1 className='capitalize text-green-600'>free</h1>
			</div>
			<hr />
			<div className='flex justify-between text-2xl font-bold'>
				<h1 className='capitalize'>grand total</h1>
				<h1 className='capitalize truncate'>
					₹
					{cartDetails?.cartProducts.data
						.reduce((acc, cur) => (acc += Number(cur.total)), 0)
						.toFixed(2)}
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
