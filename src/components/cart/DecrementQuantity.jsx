import { CgSpinner } from 'react-icons/cg'
import { useDecrementQuantityMutation } from '../../redux/apiSlices/cartApiSlice'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

//imports................................................................................................

function DecrementQuantity({ userId, cartId, quantity }) {
	const [decrement, { isLoading, isError, error }] =
        useDecrementQuantityMutation()
    
	useEffect(() => {
		if (isError) toast.error(error.data.err_msg)
    }, [error])
    
	return (
		<button
			onClick={() => decrement({ userId, cartId })}
			className='opacity-50'
			disabled={isLoading || quantity <= 1}
		>
			{isLoading ? <CgSpinner className='animate-spin' /> : '-'}
		</button>
	)
}

export default DecrementQuantity
