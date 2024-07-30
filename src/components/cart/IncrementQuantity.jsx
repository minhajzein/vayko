import { CgSpinner } from 'react-icons/cg'
import { useIncrementQuantityMutation } from '../../redux/apiSlices/cartApiSlice'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

//imports................................................................................................

function IncrementQuantity({ userId, cartId }) {
	const [increment, { isLoading, isError, error }] =
		useIncrementQuantityMutation()

	useEffect(() => {
		if (isError) toast.error(error.data.err_msg)
    }, [error])
    
	return (
		<button
			onClick={() => increment({ userId: userId, cartId: cartId })}
			className='opacity-50'
			disabled={isLoading}
		>
			{isLoading ? <CgSpinner className='animate-spin' /> : '+'}
		</button>
	)
}

export default IncrementQuantity
