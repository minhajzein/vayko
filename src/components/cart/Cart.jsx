import { useSelector } from 'react-redux'
import OrderSummaryWithoutUser from './OrderSummaryWithoutUser'
import CartItemTile from './mobile/CartItemTile'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FaShippingFast } from 'react-icons/fa'
import { GiPartyPopper } from 'react-icons/gi'
import { CgSpinner } from 'react-icons/cg'
import {
	useCreateOrderMutation,
	useVerifyPaymentMutation,
} from '../../redux/apiSlices/orderApiSlice'
import { toast } from 'react-toastify'
import { useState } from 'react'
//imports................................................................

function Cart() {
	const [loading, setLoading] = useState(false)
	const cart = useSelector(state => state.cart.cart)
	const [createOrder, { isLoading }] = useCreateOrderMutation()
	const [verifyPayment, { isLoading: verifying }] = useVerifyPaymentMutation()
	const formik = useFormik({
		initialValues: {
			name: '',
			contact: '',
			city: '',
			pin_code: '',
			address: '',
			district: '',
		},
		enableReinitialize: true,
		validationSchema: Yup.object({
			name: Yup.string().required(),
			contact: Yup.string()
				.required()
				.matches(/^[6789]\d{9}$/, 'please enter a valid mobile number'),
			city: Yup.string().required(),
			pin_code: Yup.string()
				.required()
				.matches(/^[1-9][0-9]{5}$/, 'please enter a valid pin code'),
			address: Yup.string().required(),
			district: Yup.string().required(),
		}),
		onSubmit: async values => {
			setLoading(true)
			try {
				const response = await createOrder({ address: values, items: cart })
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
					setLoading(false)
				}
			} catch (error) {
				console.error(error)
				setLoading(false)
			}
		},
	})
	return (
		<div className='w-full flex flex-col md:px-[80px] py-5 md:gap-4'>
			<h1 className='md:text-3xl text-xl font-semibold md:pb-4 md:py-4 py-2 text-center'>
				My Cart
			</h1>
			<div className='w-full p-5 border rounded-lg flex flex-col md:flex-row gap-4'>
				<div className='md:w-1/3 w-full md:border flex flex-col gap-4 rounded-lg md:p-4'>
					{cart.map(item => (
						<CartItemTile key={item.id} product={item} />
					))}
				</div>
				<form
					onSubmit={formik.handleSubmit}
					className='flex md:w-2/3 w-full flex-col md:flex-row gap-4'
				>
					<div className='flex flex-col w-1/2 gap-2'>
						<h1 className='text-center italic text-[#FF2A3E]'>
							Please provide a shipping address
						</h1>
						<div className='flex flex-col md:text-xs'>
							<label htmlFor='name'>Fullname</label>
							<input
								type='text'
								value={formik.values.name}
								name='name'
								onChange={formik.handleChange}
								className='p-2 border rounded'
								placeholder='Enter your name'
							/>
							<p className='text-red-600 text-xs'>{formik.errors.name}</p>
						</div>
						<div className='flex flex-col md:text-xs'>
							<label htmlFor='address'>Address</label>
							<input
								type='text'
								name='address'
								value={formik.values.address}
								onChange={formik.handleChange}
								className='p-2 border rounded'
								placeholder='Enter your address'
							/>
							<p className='text-red-600 text-xs'>{formik.errors.address}</p>
						</div>
						<div className='flex flex-col md:text-xs'>
							<label htmlFor='city'>City/Town</label>
							<input
								type='text'
								name='city'
								value={formik.values.city}
								onChange={formik.handleChange}
								className='p-2 border rounded'
								placeholder='Enter your name'
							/>
							<p className='text-red-600 text-xs'>{formik.errors.city}</p>
						</div>
						<div className='flex flex-col md:text-xs'>
							<label htmlFor='pincode'>Pincode</label>
							<input
								type='text'
								name='pin_code'
								value={formik.values.pin_code}
								onChange={formik.handleChange}
								className='p-2 border  rounded'
								placeholder='Enter your name'
							/>
							<p className='text-red-600 text-xs'>{formik.errors.pin_code}</p>
						</div>
						<div className='flex flex-col md:text-xs'>
							<label htmlFor='district'>District</label>
							<input
								type='text'
								name='district'
								value={formik.values.district}
								onChange={formik.handleChange}
								className='p-2 border  rounded'
								placeholder='Enter your district name'
							/>
							<p className='text-red-600 text-xs'>{formik.errors.district}</p>
						</div>
						<div className='flex flex-col md:text-xs'>
							<label htmlFor='phone number'>Phone Number</label>
							<input
								type='text'
								name='contact'
								value={formik.values.contact}
								onChange={formik.handleChange}
								className='p-2 border rounded'
								placeholder='Enter your number'
							/>
							<p className='text-red-600 text-xs'>{formik.errors.contact}</p>
						</div>
					</div>
					<div className='rounded-xl md:border mb-24 md:mb-0 w-full md:w-1/2 md:p-5 flex flex-col gap-4'>
						<h1 className='capitalize text-2xl opacity-60 font-semibold'>
							order summary
						</h1>
						<hr />
						<div className='flex justify-between text-lg'>
							<h1 className='opacity-50 capitalize tex'>items</h1>
							<h1 className='capitalize'>
								{cart.reduce((acc, cur) => (acc += Number(cur.quantity)), 0)}
							</h1>
						</div>
						<div className='flex justify-between text-lg'>
							<h1 className='opacity-50 capitalize tex'>
								subtotal <span className='text-xs'>Incl. 18% GST</span>
							</h1>
							<h1 className='capitalize'>
								₹
								{cart
									.reduce(
										(acc, cur) => (acc += Number(cur.price) * cur.quantity),
										0
									)
									.toFixed()}
								/-
							</h1>
						</div>

						<div className='flex justify-between text-lg'>
							<h1 className='opacity-50 capitalize flex items-center gap-1'>
								<FaShippingFast />
								shipping
							</h1>
							<h1 className='capitalize text-green-600 flex items-center justify-center font-bold gap-1'>
								<GiPartyPopper className='animate-bounce-shake text-[#FF2A3E]' />
								free
							</h1>
						</div>
						<h1 className='text-[#FF2A3E] text-center'>
							Delivery within 15 to 20 days
						</h1>
						<hr />
						<div className='flex justify-between text-xl font-bold'>
							<h1 className='capitalize'>grand total</h1>
							<h1 className='capitalize truncate'>
								₹
								{cart
									.reduce(
										(acc, cur) => (acc += Number(cur.price) * cur.quantity),
										0
									)
									.toFixed()}{' '}
								/-
							</h1>
						</div>
						<button
							disabled={isLoading || verifying || loading}
							type='submit'
							className='p-4 text-lg capitalize bg-[#FE2B3E] hidden md:flex justify-center text-white rounded-xl'
						>
							{isLoading || verifying || loading ? (
								<CgSpinner className='animate-spin m-auto' />
							) : (
								'proceed to checkout'
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Cart
