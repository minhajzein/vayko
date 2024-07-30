import React from 'react'

//imports................................................................................................

function MegaDraw() {
	return (
		<div className='w-full flex relative md:hidden'>
			<div className='w-full p-4'>
				<p className='uppercase text-xs'>DRAW OF THE MONTH!</p>
				<h1 className='uppercase font-raleway text-[#FF2A3E] font-bold text-2xl'>
					MEGA DRAW
				</h1>
				<p className='capitalize text-[#FF2A3E] text-sm'>
					Hurry Up your Shopping!
				</p>
				<div className='flex gap-2 py-4'>
					<div className='bg-[#FF2A3E] rounded-lg flex w-[40px] h-[49px] relative flex-col items-center text-white p-1'>
						<h1 className='font-bold text-xl'>04</h1>
						<p className='capitalize absolute bottom-1 text-xs font-semibold'>
							days
						</p>
					</div>
					<div className='bg-[#FF2A3E] rounded-lg flex w-[40px] relative h-[49px] flex-col items-center text-white p-1'>
						<h1 className='font-bold text-xl'>10</h1>
						<p className='capitalize absolute bottom-1 text-xs font-semibold'>
							hrs
						</p>
					</div>
					<div className='bg-[#FF2A3E] rounded-lg flex w-[40px] relative h-[49px] flex-col items-center text-white p-1'>
						<h1 className='font-bold text-xl'>23</h1>
						<p className='capitalize absolute bottom-1 text-xs font-semibold'>
							min.
						</p>
					</div>
				</div>
			</div>
			<div className='relative w-full'>
				<img
					className='absolute right-0  object-contain'
					src='/images/mega_draw.png'
					alt='megadraw'
				/>
			</div>
			<hr className='boder absolute bottom-0 -translate-y-4 border-[#FF2A3E] w-full -z-10' />
		</div>
	)
}

export default MegaDraw
