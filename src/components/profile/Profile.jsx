import React from 'react'
import { useSelector } from 'react-redux'
import ShippingAddress from '../cart/ShippingAddress'

//imports................................................................................................

function Profile() {
	const user = useSelector(state => state.auth.user)

	return (
		<div className='md:px-[80px] p-10 flex-col items-center pb-24 md:pb-5'>
			<div className='grid md:grid-cols-2 grid-cols-1 gap-4 w-full'>
				<div className='flex flex-col w-full gap-4 items-center'>
					<div className='flex flex-col w-full gap-2'>
						<input
							className='w-full p-2 capitalize shadow font-bold text-xl'
							disabled
							value={user.name}
						/>
						<input
							className='w-full p-2 capitalize shadow font-bold text-xl'
							disabled
							value={user.contact}
						/>
						<input
							className='w-full p-2 shadow font-bold text-xl'
							disabled
							value={user.email}
						/>
					</div>
				</div>
				<ShippingAddress input={false} />
			</div>
		</div>
	)
}

export default Profile
