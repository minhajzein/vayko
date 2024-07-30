import { useState } from 'react'
import Edit from '/svgs/edit.svg'
import AddressForm from './AddressForm'
import { useRemoveAddressMutation } from '../../redux/apiSlices/addressApiSlice'
import { CgSpinner } from 'react-icons/cg'

//imports........................................................................................

function AddressTile({ address, setShippingAddressId }) {
	const [isShow, setIsShow] = useState(false)
	const [removeAddress, { isLoading }] = useRemoveAddressMutation()

	return (
		<div className='bg-[#F9F9F9] rounded-lg shadow-lg p-4 gap-3 flex justify-between'>
			{setShippingAddressId !== undefined && (
				<input
					type='radio'
					id={address.id}
					name='shipping_address_id'
					className='cursor-pointer'
					onChange={e => setShippingAddressId(e.target.value)}
					value={address.id}
				/>
			)}
			<div className='flex flex-col max-w-[80%]'>
				<p>
					{address.name}, {address.address}, {address.city}, {address.pin_code},{' '}
					{address.district}, {address.contact}
				</p>
			</div>
			<div className='flex flex-col items-center justify-between gap-2'>
				<button
					onClick={() => setIsShow(true)}
					className='bg-[#FF2A3E] size-7 flex items-center justify-center rounded-full'
				>
					<img src={Edit} className='size-4' alt='edit' />
				</button>
				<button
					disabled={isLoading}
					onClick={() => removeAddress(address.id)}
					className='border-[#FF2A3E] border  size-7 flex items-center justify-center rounded-xl'
				>
					{isLoading ? (
						<CgSpinner className='animate-spin' />
					) : (
						<img src='/svgs/Delete.svg' alt='delete' />
					)}
				</button>
			</div>
			{isShow && (
				<AddressForm isShow={isShow} setIsShow={setIsShow} address={address} />
			)}
		</div>
	)
}

export default AddressTile
