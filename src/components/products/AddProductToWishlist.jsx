import { CgSpinner } from 'react-icons/cg'
import {
	useAddToWishlistMutation,
	useRemoveFromWishlistMutation,
} from '../../redux/apiSlices/wishlistApiSlice'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

//imports................................................................................................

function AddProductToWishlist({ slug, wishlist }) {
	const user = useSelector(state => state.auth.user)
	const listed = wishlist?.findIndex(x => x.product.slug === slug)
	const [addToWishlist, { isLoading, error, isError }] =
		useAddToWishlistMutation()
	const [remove, { isLoading: removing }] = useRemoveFromWishlistMutation()

	const addProductToWishlist = async () => {
		try {
			if (!user) return toast.error('please login to use wishlist')
			const response = await addToWishlist({
				userId: user?.id,
				slug: slug,
			})
			if (response?.error) toast.error(response.error.data.err_msg)
		} catch (error) {
			console.error(error)
		}
	}

	const removeFromWishlist = async () => {
		if (!user) return toast.error('please login to use wishlist')
		try {
			if (listed !== undefined && listed !== -1) {
				const wishlistId = wishlist[listed].id
				await remove(wishlistId)
			}
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<button
			onClick={listed !== -1 ? removeFromWishlist : addProductToWishlist}
			className='bg-white hover:scale-105 duration-300 rounded-full p-2 shadow'
			disabled={isLoading || removing}
		>
			{isLoading || removing ? (
				<CgSpinner className='animate-spin' />
			) : listed !== undefined && listed !== -1 ? (
				<img src='/svgs/heart-listed.svg' alt='wishlisted' />
			) : (
				<img src='/svgs/Add-to-wishlist.svg' alt='wishlist' />
			)}
		</button>
	)
}

export default AddProductToWishlist
