import React from 'react'
import { FaStarOfLife } from 'react-icons/fa'

//imports................................................................................................

function NextDraw() {
	return (
		<div className='md:px-[80px] pt-5 font-silkscreen text-xs md:text-3xl pb-2 overflow-hidden capitalize w-full'>
			<div className='w-auto grid grid-flow-col'>
				<div className='w-screen flex justify-evenly gap-5 animate-infinite-carousel'>
					<h1 className='w-full'>
						next draw date: <span className='text-red-500'>coming soon...</span>
					</h1>
				</div>
				<div className='w-screen  flex justify-evenly gap-5 animate-infinite-carousel'>
					<h1 className='w-full'>
						next draw date: <span className='text-red-500'>coming soon...</span>
					</h1>
				</div>
			</div>
		</div>
	)
}

export default NextDraw
