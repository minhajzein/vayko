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

//imports................................................................................................................................................................................................

function FastCheckout({ product }) {
	const [shippingAddressId, setShippingAddressId] = useState(null)
	const [ordered, setOrdered] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [loading, setLoading] = useState(false)
	const [createOrder, { isLoading }] = useCreateSingleOrderMutation()
	const [verifyPayment, { isLoading: verifying }] = useVerifyPaymentMutation()

	const user = useSelector(state => state.auth.user)
	const navigate = useNavigate()

	const amount =
		Number(product?.price) -
		(Number(product?.price) * Number(product?.discount)) / 100

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
					total_amount: amount.toFixed(),
					shipping_address_id: shippingAddressId,
					product_id: product.id,
				},
			})
			if (response?.data?.success) {
				var options = {
					key: 'rzp_test_jk6BVykF0sfMd7',
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
				var rzp = new window.Razorpay(options)
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
				className='bg-[#FE2B3E] flex relative rounded-full hover:scale-105 duration-300 w-full text-white border p-1 shadow'
			>
				{isLoading || loading ? (
					<CgSpinner className='animate-spin m-auto' />
				) : (
					<div className='m-auto flex items-center gap-2'>
						<IoFlashOutline className='animate-ping' />
						<h1>Buy Now</h1>
					</div>
				)}
			</button>
			{isOpen && (
				<div className='fixed top-0 left-0 z-30 w-screen md:p-10 flex h-dvh bg-white/70'>
					<div className='m-auto flex flex-col h-[80%] hover:overflow-y-auto overflow-hidden scrollbar-hidden bg-white shadow-xl rounded-xl p-5'>
						<div className='flex backdrop-blur-sm bg-white/50 w-full sticky top-0 z-10 justify-between gap-5 p-5'>
							<h1 className='font-semibold capitalize line-clamp-2'>
								{product?.title}
							</h1>
							<img
								onClick={() => setIsOpen(false)}
								src='/svgs/tag-cross-black.svg'
								className='cursor-pointer'
								alt='close'
							/>
						</div>
						<div className='flex flex-col gap-3'>
							<div className='size-full overflow-hidden rounded-lg relative'>
								<img
									src={product?.photos[0]}
									className='w-full md:h-64 duration-300 rounded-lg bg-white shadow-lg shadow-gray-300 object-cover'
									alt='product'
								/>
							</div>
							<div className='flex gap-4 text-2xl'>
								{product?.discount ? (
									<>
										<h1 className='font-bold text-[#FE2B3E]'>
											₹
											{Number(product.price) -
												(Number(product.price) * Number(product.discount)) /
													100}
										</h1>
										<del className='opacity-50'>₹{product.price}</del>
									</>
								) : (
									<h1 className='font-bold text-[#FE2B3E]'>₹{product.price}</h1>
								)}
							</div>
							<ShippingAddress setShippingAddressId={setShippingAddressId} />
							<button
								onClick={handleCheckout}
								className='capitalize bg-[#FE2B3E] text-white p-2 rounded-full'
								disabled={verifying || loading || isLoading}
							>
								{loading ? (
									<CgSpinner className='animate-spin m-auto' />
								) : (
									`pay now ₹${amount.toFixed()}`
								)}
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default FastCheckout
