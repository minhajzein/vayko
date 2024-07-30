import { Link } from 'react-router-dom'
import TrendingShowcase from './TrendingShowcase'
import RightArrowRed from '/svgs/arrow-right-red.svg'

// imports................................................................................................

function Trending() {
	return (
		<div className='w-full flex flex-col overflow-hidden'>
			<div className='flex md:hidden justify-between w-full p-3'>
				<h1 className='capitalize font-semibold'>trending</h1>
				<Link to='/products' className='flex gap-2 items-center'>
					<h1 className='capitalize text-[#FE2B3E]'>see all</h1>
					<img src={RightArrowRed} alt='arrow-right' />
				</Link>
			</div>
			<TrendingShowcase />
		</div>
	)
}

export default Trending
