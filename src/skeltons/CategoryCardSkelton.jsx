function CategoryCardSkelton() {
	return (
		<div className='flex flex-col gap-4 group items-center cursor-pointer w-[69px] md:w-[150px]'>
			<div className='rounded-full relative p-1 md:p-3 bg-white shadow-lg group-hover:shadow-white duration-300 size-[69px] md:size-[150px]'>
				<img
					className='rounded-full size-full object-cover'
					src='/images/dummy-image-square.jpg'
					alt='category'
				/>
			</div>
			<h1 className='text-white py-2 w-full rounded bg-gray-300 group-hover:scale-105 duration-300 md:text-xl max-w-full truncate capitalize'></h1>
		</div>
	)
}

export default CategoryCardSkelton
