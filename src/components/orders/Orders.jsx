import { useSelector } from 'react-redux'
import { useGetAllOrdersQuery } from '../../redux/apiSlices/orderApiSlice'
import SingleOrder from './SingleOrder'

//imports........................................................................................

function Orders() {
	const user = useSelector(state => state.auth.user)
	const { data: orderDetails } = useGetAllOrdersQuery(user?.id)
	console.log(orderDetails)
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
		</div>
	)
}

export default Orders
