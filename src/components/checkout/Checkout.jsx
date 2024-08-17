import OrderSummaryWithoutUser from '../cart/OrderSummaryWithoutUser'
import { useSelector } from 'react-redux'
import OrderSummary from '../cart/OrderSummary'
import SignupForm from './SignupForm'
import { useGetCartQuery } from '../../redux/apiSlices/cartApiSlice'
import CartFooter from '../cart/mobile/CartFooter'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

//imports................................................................

function Checkout() {
	const user = useSelector(state => state.auth.user)
	const cart = useSelector(state => state.cart.cart)
	const navigate = useNavigate()

	const { data } = useGetCartQuery(user?.id)
	useEffect(() => {
		if (!user && cart.length == 0) {
			navigate('/')
			toast.error('Please add items to cart')
		}
	}, [user])

	return (
		<div className='flex flex-col md:px-[80px]'>
			<h1 className='text-center font-bold text-xl md:text-3xl md:py-4'>
				Checkout Page
			</h1>
			<div className=' flex flex-col p-4 items-center justify-center md:border md:gap-6 rounded-xl py-5 md:flex-row gap-2'>
				{!user && <SignupForm />}
				{user ? (
					<>
						<OrderSummary cartDetails={data} />
					</>
				) : (
					<OrderSummaryWithoutUser />
				)}
			</div>
			{user && (
				<CartFooter
					items={data?.cartProducts.data}
					total={data?.cartProducts.data
						.reduce((acc, cur) => (acc += cur.quantity * cur.price), 0)
						.toFixed(2)}
				/>
			)}
		</div>
	)
}

export default Checkout
