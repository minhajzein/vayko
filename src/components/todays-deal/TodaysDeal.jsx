import React from 'react'

//imports................................................................

function TodaysDeal() {
	return (
		<div className='p-10 w-full hidden md:block'>
			<div className='w-full flex shadow-md rounded-xl shadow-black/50 p-5'>
				<div className='w-[50%] flex flex-col items-center gap-16 py-16'>
					<h1 className='text-[#FF2A3E] font-bold text-5xl'>Today's Deal</h1>
					<p className='text-2xl'>
						Grab the chance,
						<span className='text-[#FF2A3E]'>Get 50% OFF.</span>
					</p>
					<div className='flex items-center gap-8 text-[#FF2A3E]'>
						<div>
							<h1 className='text-3xl font-bold'>12</h1>
							<p>Hours</p>
						</div>
						<span className='font-bold text-3xl'>:</span>
						<div>
							<h1 className='text-3xl font-bold'>02</h1>
							<p>Minutes</p>
						</div>
						<span className='font-bold text-3xl'>:</span>
						<div>
							<h1 className='text-3xl font-bold'>32</h1>
							<p>Seconds</p>
						</div>
					</div>
					<button className='bg-[#FF2A3E] text-white px-5 py-2 flex items-center gap-2 rounded-full'>
						<span className='capitalize'>shop now</span>
						<img src='/svgs/Arrow.svg' alt='' />
					</button>
				</div>
				<div className='w-[50%] flex gap-5'>
					<div className='h-full w-full relative'>
						<img
							src='/images/deal-1.png'
							className='h-full w-full object-cover rounded-lg'
							alt='deal-1'
						/>
						<button className='capitalize absolute bottom-5 underline text-white right-1/2 translate-x-1/2'>
							view product
						</button>
					</div>
					<div className='w-full relative'>
						<img
							src='/images/deal-2.png'
							className='h-full w-full object-cover rounded-lg'
							alt='deal-2'
						/>
						<button className='capitalize absolute bottom-5 underline text-white right-1/2 translate-x-1/2'>
							view product
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TodaysDeal
