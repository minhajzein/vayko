import React from 'react'

//imports................................................................................................

function OrderTile({ order }) {
	return (
		<div className='w-full p-4 bg-gray-100 shadow rounded-xl justify-between md:flex-row flex-col flex'>
			<div className='flex'>
				<img
					src={order.product.image[0]}
					className='size-24 object-contain rounded-xl'
					alt='photo'
				/>
				<div className='flex px-4 flex-col justify-between'>
					<h1 className='line-clamp-1 font-semibold'>{order.product.title}</h1>
					<h1>Category : {order.product.category}</h1>
					<h1>SKU : {order.product.sku}</h1>{' '}
					<h1>Amount : {order.product.price}</h1>
				</div>
			</div>
		</div>
	)
}

export default OrderTile
