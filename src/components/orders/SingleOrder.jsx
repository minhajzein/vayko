import React from 'react'
import OrderTile from './OrderTile'
import { PiPrinter } from 'react-icons/pi'

//imports................................................................................................

function SingleOrder({ order }) {
	console.log(order)
	return (
		<div className='w-full flex flex-col gap-4 shadow-lg p-6 rounded-xl'>
			<div className='flex justify-between items-center'>
				<div className='l'>
					<h1 className='font-semibold uppercase text-lg'>
						Order#: {order.order_number}
					</h1>
				</div>
				<div className='flex flex-col'>
					<h1 className='uppercase'>order placed on</h1>
					<h1>{new Date(order.updated_at).toLocaleDateString()}</h1>
				</div>
				<h1 className='uppercase text-lg'>
					total amount: ₹{order.total_amount}
				</h1>

				{order.status === 'new' ? (
					<div className='p-2 text-white rounded-full flex bg-green-500'>
						<p className='m-auto capitalize'>order placed</p>
					</div>
				) : (
					''
				)}
				<button className='flex border p-2 rounded-full border-[#FF2A3E] text-[#FF2A3E] justify-center gap-2 items-center'>
					<PiPrinter className='text-2xl' />
					<h1>Print Invoice</h1>
				</button>
			</div>
			<hr />
			<div className='w-full grid md:grid-cols-2 grid-cols-1 flex-col gap-4'>
				{order.order_items.map(ord => (
					<OrderTile key={ord.id} order={ord} />
				))}
			</div>
		</div>
	)
}

export default SingleOrder
