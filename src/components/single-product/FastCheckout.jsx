import { useState } from 'react'
import {
	useCreateSingleOrderMutation,
	useVerifyPaymentMutation,
} from '../../redux/apiSlices/orderApiSlice'
import { toast } from 'react-toastify'
import { CgSpinner } from 'react-icons/cg'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ShippingAddress from '../../components/cart/ShippingAddress'
import { IoFlashOutline } from 'react-icons/io5'
import { Modal } from 'antd'

//imports................................................................................................................................................................................................

function FastCheckout({ product }) {
	const [shippingAddressId, setShippingAddressId] = useState(null)
	const [isOpen, setIsOpen] = useState(false)
	const [loading, setLoading] = useState(false)
	const [createOrder, { isLoading }] = useCreateSingleOrderMutation()
	const [verifyPayment, { isLoading: verifying }] = useVerifyPaymentMutation()

	const user = useSelector(state => state.auth.user)
	const navigate = useNavigate()

	const handleCheckout = async e => {
		if (!user) return toast.error('Please login to buy products')
		setLoading(true)
		try {
			if (!shippingAddressId) {
				setLoading(false)
				return toast.error('please select a shipping address')
			}

			const response = await createOrder({
				userId: user?.id,
				credentials: {
					total_amount: Number(product?.price).toFixed(),
					shipping_address_id: shippingAddressId,
					product_id: product.id,
				},
			})

			if (response?.data?.success) {
				const options = {
					key: 'rzp_live_9dYBXfghmDqVZl',
					amount: response.data.total_amount * 100,
					currency: 'INR',
					name: 'Vayko',
					description: 'Buy Product',
					image: '/images/vayko-logo-rounded-2.png',
					order_id: response.data.razorpay_order_id,
					handler: async function (response) {
						const result = await verifyPayment({
							razorpay_order_id: response.razorpay_order_id,
							razorpay_payment_id: response.razorpay_payment_id,
							razorpay_signature: response.razorpay_signature,
						})
						if (result?.data?.success) {
							toast.success('Order placed successfully')
							setLoading(false)
							navigate('/orders')
						} else {
							toast.error(result.data.err_msg)
							setLoading(false)
						}
					},
					modal: {
						ondismiss: function () {
							setLoading(false)
						},
					},
					prefill: {
						name: user.name,
						email: user.email,
						contact: user.contact,
					},
					notes: {
						address: 'Razorpay Corporate Office',
					},
					theme: {
						color: '#3399cc',
					},
				}
				const rzp = new window.Razorpay(options)
				rzp.on('payment.failed', function (response) {
					setLoading(false)
					alert(response.error.code)
					alert(response.error.description)
					alert(response.error.source)
					alert(response.error.step)
					alert(response.error.reason)
					alert(response.error.metadata.order_id)
					alert(response.error.metadata.payment_id)
				})
				rzp.open()
				e.preventDefault()
			} else {
				toast.error('Order creation failed')
				setLoading(false)
			}
		} catch (error) {
			console.error(error)
			setLoading(false)
		}
	}

	const handleModal = () => {
		if (!user) return toast.error('Please login to buy products')
		if (Number(product.stock) <= 0)
			return toast.error('Product is out of stock')
		setIsOpen(true)
	}

	return (
		<>
			<button
				onClick={handleModal}
				disabled={isLoading}
				className='bg-[#FE2B3E] hidden relative rounded-full hover:scale-105 duration-300 w-full text-white border p-1 shadow'
			>
				{isLoading || loading ? (
					<CgSpinner className='animate-spin m-auto' />
				) : (
					<div className='m-auto flex items-center text-xs md:text-sm gap-2'>
						<IoFlashOutline className='animate-ping' />
						<h1>Buy Now</h1>
					</div>
				)}
			</button>
			<Modal
				className='w-full'
				open={isOpen}
				footer={[]}
				closeIcon={false}
				onClose={() => setIsOpen(false)}
			>
				<div className='m-auto flex flex-col w-full'>
					<div className='flex flex-col gap-3 relative'>
						<div className='flex py-2 justify-between gap-4 z-10 bg-white/50 backdrop-blur sticky top-0'>
							<h1 className='md:text-xl text-lg truncate'>{product?.title}</h1>
							<button
								className='text-[#FE2B3E]'
								onClick={() => setIsOpen(false)}
							>
								<img
									src='/svgs/tag-cross-black.svg'
									className='size-3 md:size-4'
									alt=''
								/>
							</button>
						</div>
						<div className='size-full overflow-hidden rounded-lg relative'>
							<img
								src={product?.photos[0]}
								className='w-full md:h-40 duration-300 rounded-lg bg-white shadow-lg shadow-gray-300 object-cover'
								alt='product'
							/>
						</div>
						<div className='flex gap-4 text-2xl'>
							<h1 className='font-bold text-[#FE2B3E]'>
								₹{Number(product.price).toFixed()}
							</h1>
							<del className='opacity-50'>
								₹{Number(product.original_price).toFixed()}
							</del>
						</div>
						<ShippingAddress setShippingAddressId={setShippingAddressId} />
						<button
							onClick={handleCheckout}
							className='capitalize bg-[#FE2B3E] sticky bottom-2 shadow-xl text-white p-2 rounded-full'
							disabled={verifying || loading || isLoading}
						>
							{loading ? (
								<CgSpinner className='animate-spin m-auto' />
							) : (
								`pay now ₹${Number(product?.price).toFixed()}`
							)}
						</button>
					</div>
				</div>
			</Modal>
		</>
	)
}

export default FastCheckout
