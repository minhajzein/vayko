import { useDispatch, useSelector } from 'react-redux'
import { useAddToCartMutation } from '../../redux/apiSlices/cartApiSlice'
import { toast } from 'react-toastify'
import { CgSpinner } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'
import { addItemToCart, incrementQuantity } from '../../redux/slices/cartSlice'

//imports................................................................................................

function AddProductToCart({ product, variant }) {
	const user = useSelector(state => state.auth.user)
	const cart = useSelector(state => state.cart.cart)
	const [addToCart, { isLoading }] = useAddToCartMutation()
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const addProductToCart = async () => {
		try {
			if (user) {
				const response = await addToCart({
					userId: user.id,
					credentials: {
						slug: product.slug,
						quantity: 1,
						variant_id: variant ? variant.id : null,
					},
				})

				if (response.data?.success)
					return toast.success(`You have a chance to win a scooter`)
				if (response.error) return toast.error(response.error.message)
			} else {
				const itemIndex = cart.findIndex(x => x.id === product.id)

				if (itemIndex !== -1) {
					dispatch(incrementQuantity(product))
					toast.success(`You have a chance to win a scooter`)
				} else {
					console.log(product)

					dispatch(addItemToCart(product))
					toast.success(`You have a chance to win a scooter`)
					navigate('/cart')
				}
			}
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<button
			onClick={addProductToCart}
			disabled={isLoading}
			className='bg-[#FE2B3E] flex rounded-full w-full  text-xs md:text-sm hover:scale-105 items-center justify-center gap-2 duration-300  text-white border p-1 capitalize shadow'
		>
			{isLoading ? (
				<CgSpinner className='animate-spin m-auto' />
			) : (
				'add to cart'
			)}
		</button>
	)
}

export default AddProductToCart
