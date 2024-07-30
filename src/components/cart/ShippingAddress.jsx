import { useGetAllAddressesQuery } from '../../redux/apiSlices/addressApiSlice'
import { useSelector } from 'react-redux'
import AddressTile from './AddressTile'
import { useState } from 'react'
import AddressForm from './AddressForm'

//imports................................................................

function ShippingAddress({ setShippingAddressId }) {
	const [isShow, setIsShow] = useState(false)
	const user = useSelector(state => state.auth.user)
	const { data, isSuccess } = useGetAllAddressesQuery(user?.id)

	return (
		<div className='flex flex-col md:px-0 gap-2'>
			{setShippingAddressId !== undefined && (
				<h1 className='font-semibold text-lg p-2 capitalize'>address</h1>
			)}

			{isSuccess &&
				data.addresses.map(address => (
					<AddressTile
						key={address.id}
						address={address}
						setShippingAddressId={setShippingAddressId}
					/>
				))}
			<div className='w-full'>
				<button
					onClick={() => setIsShow(true)}
					className='w-full capitalize border border-[#FF2A3E] shadow text-[#FF2A3E] p-2 rounded-full'
				>
					add new address
				</button>
			</div>
			{isShow && <AddressForm isShow={isShow} setIsShow={setIsShow} />}
		</div>
	)
}

export default ShippingAddress
