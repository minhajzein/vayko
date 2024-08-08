import { useSelector } from 'react-redux'
import { useGetAllOrdersQuery } from '../../redux/apiSlices/orderApiSlice'
import SingleOrder from './SingleOrder'
import Pagination from '../products/Pagination'
import { useState } from 'react'

//imports........................................................................................

function Orders() {
	const user = useSelector(state => state.auth.user)
	const [page, setPage] = useState(1)

	const {
		data: orderDetails,
		isSuccess,
		error,
	} = useGetAllOrdersQuery(user?.id, page)

	return (
		<div className='p-8 md:mx-[150px] my-10 flex rounded-xl flex-col border gap-8'>
			<h1 className='text-3xl font-semibold text-center capitalize'>
				my orders
			</h1>
			<div className='w-full flex flex-col gap-6'>
				{orderDetails?.orders.data.map(order => (
					<SingleOrder key={order.id} order={order} />
				))}
			</div>
			<Pagination
				isSuccess={isSuccess}
				links={orderDetails?.orders.links}
				page={page}
				setPage={setPage}
				lastPage={orderDetails?.orders.last_page}
			/>
		</div>
	)
}

export default Orders
