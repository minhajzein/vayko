import { useState } from 'react'
import { CgSpinner } from 'react-icons/cg'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
	useCreateOrderMutation,
	useVerifyPaymentMutation,
} from '../../../redux/apiSlices/orderApiSlice'
import { toast } from 'react-toastify'

//imports................................................................

function CartFooter({ total, shippingAddressId, items }) {
	const user = useSelector(state => state.auth.user)
	const cart = useSelector(state => state.cart.cart)
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()
	const [createOrder, { isLoading }] = useCreateOrderMutation()
	const [verifyPayment, { isLoading: verifying }] = useVerifyPaymentMutation()
	const handleCheckout = async e => {
		try {
			if (!user) return navigate('/checkout')
			if (!shippingAddressId)
				return toast.error('please select a shipping address')
			if (user) {
				const response = await createOrder({
					userId: user?.id,
					credentials: {
						total_amount: user
							? items
									.reduce((acc, cur) => (acc += Number(cur.total)), 0)
									.toFixed()
							: cart.reduce((acc, cur) => (acc += cur.price), 0),
						shipping_address_id: shippingAddressId,
						items: items.map(x => x.id),
					},
				})
				if (response.data.success) {
					var options = {
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
								navigate('/orders')
								setLoading(false)
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
				}
			}
		} catch (error) {
			setLoading(false)
			console.error(error)
		}
	}
	return (
		<div className='w-full sticky bottom-[90px] hidden bg-[#F5F5F5] justify-between items-center p-3'>
			<h1 className='font-bold'>
				Total ₹{user ? total : cart.reduce((acc, cur) => (acc += cur.price), 0)}
			</h1>
			<button
				disabled={verifying || loading || isLoading}
				onClick={handleCheckout}
				className='bg-[#FF2A3E] py-2 px-4 capitalize rounded-lg text-white'
			>
				{isLoading ? (
					<CgSpinner className='animate-spin m-auto' />
				) : (
					'check out'
				)}
			</button>
		</div>
	)
}

export default CartFooter
