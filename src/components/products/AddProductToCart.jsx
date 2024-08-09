import { useSelector } from 'react-redux'
import { useAddToCartMutation } from '../../redux/apiSlices/cartApiSlice'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { CgSpinner } from 'react-icons/cg'

//imports................................................................................................

function AddProductToCart({ slug, variant, title }) {
	const user = useSelector(state => state.auth.user)
	const [addToCart, { isLoading, error, isError }] = useAddToCartMutation()

	const addProductToCart = async () => {
		try {
			if (user) {
				const response = await addToCart({
					userId: user.id,
					credentials: {
						slug: slug,
						variant_id: variant ? variant.id : null,
					},
				})
				if (response.data?.success)
					return toast.success(`You have a chance to win a scooter`)
				if (response.error) return toast.error(response.error.message)
			} else toast.error('Please login to use cart')
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		if (isError) toast.error(error.data.err_msg)
	}, [error])

	return (
		<button
			onClick={addProductToCart}
			disabled={isLoading}
			className='bg-[#FE2B3E] rounded-full w-full flex text-xs md:text-sm hover:scale-105 items-center justify-center gap-2 duration-300  text-white border p-1 capitalize shadow'
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
