import ProductShowcase from './ProductShowcase'
import FilterIcon from '/svgs/filter-icon.svg'

//imports................................................................

function Products() {
	return (
		<div className='md:px-[80px] pb-24 md-pb-0'>
			<div className='flex md:hidden justify-between px-4 w-full py-3'>
				<h1 className='capitalize font-bold text-sm md:text-2xl text-[#FF2A3E]'>
					Win a Scooter 🛵 with Your Purchase!
				</h1>
				<button className=' gap-2 items-center hidden'>
					<img src={FilterIcon} alt='arrow-right' />
				</button>
			</div>
			{/* <div className='w-full md:flex p-5 hidden justify-center items-center gap-3'>
				<h1>Active Filter : </h1>

				<div className='bg-black/70 flex items-center justify-center text-white px-3 py-1 rounded-full'>
					<h1>Watches</h1>
					<img src='/svgs/tag-cross.svg' alt='' />
				</div>
				<button className='underline opacity-70'>Clear all</button>
			</div> */}
			<ProductShowcase />
		</div>
	)
}

export default Products
