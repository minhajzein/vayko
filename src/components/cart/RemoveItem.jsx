import { CgSpinner } from 'react-icons/cg'
import { useRemoveFromCartMutation } from '../../redux/apiSlices/cartApiSlice'

//imports................................................................................................................................

function RemoveItem({ id }) {
	const [removeFromCart, { isLoading: removing }] = useRemoveFromCartMutation()
	return removing ? (
		<CgSpinner className='animate-spin' />
	) : (
		<img
			src='/svgs/tag-cross-black.svg'
			className='size-3 cursor-pointer'
			alt='remove'
			onClick={() => removeFromCart(id)}
		/>
	)
}

export default RemoveItem
