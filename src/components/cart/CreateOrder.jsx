import { useSelector } from 'react-redux'
import {
	useCreateOrderMutation,
	useVerifyPaymentMutation,
} from '../../redux/apiSlices/orderApiSlice'
import { toast } from 'react-toastify'
import { CgSpinner } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

//imports........................................................................................

function CreateOrder({ shippingAddressId, items }) {
	const user = useSelector(state => state.auth.user)
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()
	const [createOrder, { isLoading }] = useCreateOrderMutation()
	const [verifyPayment, { isLoading: verifying }] = useVerifyPaymentMutation()
	const handleCheckout = async e => {
		try {
			if (!shippingAddressId)
				return toast.error('please select a shipping address')
			if (user) {
				const response = await createOrder({
					userId: user?.id,
					credentials: {
						total_amount: items
							.reduce((acc, cur) => (acc += Number(cur.total)), 0)
							.toFixed(),
						shipping_address_id: shippingAddressId,
						items: items.map(x => x.id),
					},
				})
				console.log(response)

				if (response?.data?.success) {
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
				} else {
					toast.error(response?.error.data.err_msg)
				}
			}
		} catch (error) {
			setLoading(false)
			console.error(error)
		}
	}
	return (
		<button
			onClick={handleCheckout}
			disabled={verifying || loading || isLoading}
			className='p-4 text-lg capitalize bg-[#FE2B3E] flex justify-center text-white rounded-xl'
		>
			{isLoading ? (
				<CgSpinner className='animate-spin m-auto' />
			) : (
				'proceed to checkout'
			)}
		</button>
	)
}

export default CreateOrder
