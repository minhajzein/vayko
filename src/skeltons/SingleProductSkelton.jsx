import React from 'react'
import SmallTimer from '../components/timer/SmallTimer'

function SingleProductSkelton() {
	return (
		<div className='px-4 md:py-10 py-4 animate-pulse w-full flex flex-col gap-5 md:gap-10 md:px-[150px]'>
			<div className='flex flex-col md:flex-row w-full md:gap-5 gap-3'>
				<div className='flex flex-col md:flex-row-reverse md:w-[55%] gap-5 overflow-hidden'>
					<img
						src='/images/dummy-image-square.jpg'
						className='md:size-[500px] h-[350px] w-full object-cover md:object-center rounded-xl shadow'
						alt='product'
					/>
					<div className='grid grid-flow-col md:grid-flow-row md:gap-3 md:h-[500px] md:overflow-x-auto overflow-y-auto w-auto scrollbar-hidden'>
						<img
							src='/images/dummy-image-square.jpg'
							className='md:w-20 md:h-20 size-10 object-cover rounded-xl  shadow'
							alt='product'
						/>
						<img
							src='/images/dummy-image-square.jpg'
							className='md:w-20 md:h-20 size-10 object-cover rounded-xl  shadow'
							alt='product'
						/>
						<img
							src='/images/dummy-image-square.jpg'
							className='md:w-20 md:h-20 size-10 object-cover rounded-xl  shadow'
							alt='product'
						/>
						<img
							src='/images/dummy-image-square.jpg'
							className='md:w-20 md:h-20 size-10 object-cover rounded-xl  shadow'
							alt='product'
						/>
						<img
							src='/images/dummy-image-square.jpg'
							className='md:w-20 md:h-20 size-10 object-cover rounded-xl  shadow'
							alt='product'
						/>
						<img
							src='/images/dummy-image-square.jpg'
							className='md:w-20 md:h-20 size-10 object-cover rounded-xl  shadow'
							alt='product'
						/>
						<img
							src='/images/dummy-image-square.jpg'
							className='md:w-20 md:h-20 size-10 object-cover rounded-xl  shadow'
							alt='product'
						/>
					</div>
				</div>
				<div className='flex flex-col md:gap-5 gap-2 md:w-[45%]'>
					<div className='flex flex-col gap-1'>
						<h1 className='text-md font-semibold uppercase md:text-3xl p-4 bg-gray-300 rounded'></h1>
						<h1 className='text-md font-semibold uppercase md:text-3xl p-4 bg-gray-300 rounded'></h1>
						<p className='text-xs text-black/50 line-clamp-2 font-sans md:text-xl p-2 bg-gray-300 rounded'></p>
						<p className='text-xs text-black/50 line-clamp-2 font-sans md:text-xl p-2 bg-gray-300 rounded'></p>
						<p className='text-xs text-black/50 line-clamp-2 font-sans md:text-xl p-2 bg-gray-300 rounded'></p>
						<h1 className='text-black/50 text-sm font-semibold p-1 rounded bg-gray-300'></h1>
					</div>
					<SmallTimer />
					<div>
						<div className='flex items-end md:gap-3 gap-2'>
							<h1 className='text-[#FE2B3E] text-2xl font-bold w-12 p-2 bg-gray-300 rounded'></h1>
							<del className='text-black opacity-50 text-xl font-bold p-1 w-12 bg-gray-300 rounded'></del>
							<span className='text-green-600 font-semibold rounded-xl text-lg p-6 bg-gray-300'></span>
						</div>
						<p className='text-xs p-1 text-gray-300 rounded'>
							(Price inclusive of all taxes)
						</p>
						<h1 className='font-semibold capitalize p-1 rounded bg-gray-300'></h1>
					</div>
					<div className='gap-3 hidden md:flex'></div>
				</div>
			</div>
			<div className='md:px-[60px] flex flex-col gap-5'>
				<hr />
				<h1 className='text-md font-semibold uppercase md:text-3xl p-4 bg-gray-300 rounded'></h1>
				<h1 className='text-md font-semibold uppercase md:text-3xl p-2 bg-gray-300 rounded'></h1>
				<h1 className='text-md font-semibold uppercase md:text-3xl p-2 bg-gray-300 rounded'></h1>
				<h1 className='text-md font-semibold uppercase md:text-3xl p-2 bg-gray-300 rounded'></h1>
				<h1 className='text-md font-semibold uppercase md:text-3xl p-2 bg-gray-300 rounded'></h1>
				<h1 className='text-md font-semibold uppercase md:text-3xl p-2 bg-gray-300 rounded'></h1>
				<h1 className='text-md font-semibold uppercase md:text-3xl p-2 bg-gray-300 rounded'></h1>
				<h1 className='text-md font-semibold uppercase md:text-3xl p-2 bg-gray-300 rounded'></h1>
				<h1 className='text-md font-semibold uppercase md:text-3xl p-2 bg-gray-300 rounded'></h1>
				<h1 className='text-md font-semibold uppercase md:text-3xl p-2 bg-gray-300 rounded'></h1>
				<h1 className='text-md font-semibold uppercase md:text-3xl p-2 bg-gray-300 rounded'></h1>
				<h1 className='text-md font-semibold uppercase md:text-3xl p-2 bg-gray-300 rounded'></h1>
				<h1 className='text-md font-semibold uppercase md:text-3xl p-2 bg-gray-300 rounded'></h1>
				<h1 className='text-md font-semibold uppercase md:text-3xl p-2 bg-gray-300 rounded'></h1>
				<h1 className='text-md font-semibold uppercase md:text-3xl p-2 bg-gray-300 rounded'></h1>
				<h1 className='text-md font-semibold uppercase md:text-3xl p-2 bg-gray-300 rounded'></h1>
			</div>
		</div>
	)
}

export default SingleProductSkelton
