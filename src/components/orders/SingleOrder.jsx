import { CgSpinner } from 'react-icons/cg'
import { useDownloadInvoiceQuery } from '../../redux/apiSlices/orderApiSlice'
import downloadPDF from '../../utils/downloadPDF'
import OrderTile from './OrderTile'
import { PiPrinter } from 'react-icons/pi'

//imports................................................................................................

function SingleOrder({ order }) {
	const { data, isLoading } = useDownloadInvoiceQuery(order.id)
	console.log(order)

	return (
		<div className='w-full flex flex-col  gap-4 shadow-lg p-6 rounded-xl'>
			<div className='flex md:flex-row flex-col gap-2 justify-between items-center'>
				<div className='l'>
					<h1 className='font-semibold uppercase text-xs md:text-sm'>
						Order#: {order.order_number}
					</h1>
				</div>
				<div className='flex  md:text-sm text-xs gap-1 items-center'>
					<h1 className='uppercase'>placed on:</h1>
					<h1>{new Date(order.updated_at).toLocaleDateString()}</h1>
				</div>
				<h1 className='uppercase md:text-sm text-xs'>
					total amount: ₹{order.total_amount}
				</h1>

				{order.status === 'new' ? (
					<div className='p-2 text-white rounded-full flex md:text-sm text-xs bg-green-500'>
						<p className='m-auto capitalize'>order placed</p>
					</div>
				) : order.status === 'process' ? (
					<div className='p-2 text-white rounded-full flex md:text-sm text-xs bg-yellow-500'>
						<p className='m-auto capitalize'>processing</p>
					</div>
				) : order.status === 'delivered' ? (
					<div className='p-2 text-white rounded-full flex md:text-sm text-xs bg-green-500'>
						<p className='m-auto capitalize'>delivered</p>
					</div>
				) : (
					<div className='p-2 text-white rounded-full flex md:text-sm text-xs bg-red-500'>
						<p className='m-auto capitalize'>canceled</p>
					</div>
				)}
				<button
					disabled={isLoading}
					onClick={() => downloadPDF(data?.pdf, order.order_number)}
					className='flex border p-2 rounded-full md:text-sm text-xs border-[#FF2A3E] text-[#FF2A3E] justify-center gap-2 items-center'
				>
					{isLoading ? (
						<CgSpinner className='animate-spin m-auto' />
					) : (
						<>
							<PiPrinter className='text-xl' />
							<h1>Print Invoice</h1>
						</>
					)}
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
