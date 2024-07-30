function PoductCardSkelton() {
	return (
		<div className='flex flex-col gap-2 animate-pulse'>
			<div className='size-full overflow-hidden rounded-lg relative'>
				<img
					src='/images/dummy-image-square.jpg'
					className='w-full md:h-64 cursor-pointer hover:scale-150 duration-300 rounded-lg bg-white shadow-lg shadow-gray-300 object-cover'
					alt='product'
				/>
			</div>
			<h1 className='font-semibold capitalize w-full py-2 md:py-4 bg-gray-300 rounded-xl'></h1>
			<h2 className='text-sm opacity-50 capitalize w-[50%] py-1 md:py-2 bg-gray-300 rounded-xl'></h2>
			<div className='flex gap-1 text-lg w-full'>
				<>
					<h1 className='font-bold '></h1>
					<del className='opacity-50'></del>
				</>
			</div>
			<div className='top-4 flex flex-col w-full items-center justify-center gap-2 right-4'>
				<div className='w-full py-2 md:py-4 bg-gray-300 rounded-xl'></div>
				<div className='w-full py-2 md:py-4 bg-gray-300 rounded-xl'></div>
			</div>
		</div>
	)
}

export default PoductCardSkelton
