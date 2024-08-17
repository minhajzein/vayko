import WinnerCard from './WinnerCard'
import { useGetAllWinnersQuery } from '../../redux/apiSlices/winnersApiSlice'

//imports................................................................................................

function WinnersShowcase() {
	const { data } = useGetAllWinnersQuery()

	return (
		<div className='w-full grid grid-cols-2 md:grid-cols-5 md:px-20 md:gap-4 gap-2 p-4'>
			{data?.winners.map(winner => (
				<WinnerCard key={winner.id} winner={winner} />
			))}

			<div className='bg-white w-full p-1 md:p-4 rounded-lg flex flex-col items-center'>
				<div className='relative w-full'>
					<img
						className='rounded-lg w-full  bg-[#FFD5DC] size-[160px]  md:h-52 object-cover'
						src='/images/who-is-next.png'
						alt='winner_pic'
					/>
				</div>
				<div className='flex items-center flex-col p-1'>
					<h1 className='text-[13px] md:text-xl font-bold capitalize'>
						next winner?
					</h1>
					<p className='text-[#FF3245] md:text-sm capitalize text-[8px]'>
						amazing prizes!
					</p>
				</div>
			</div>

			<div className='bg-white w-full p-1 md:p-4 hidden rounded-lg md:flex flex-col items-center'>
				<div className='relative w-full'>
					<img
						className='rounded-lg w-full  bg-[#FFD5DC] size-[160px]  md:h-52 object-cover'
						src='/images/who-is-next.png'
						alt='winner_pic'
					/>
				</div>
				<div className='flex items-center flex-col p-1'>
					<h1 className='text-[13px] md:text-xl font-bold capitalize'>
						next winner?
					</h1>
					<p className='text-[#FF3245] md:text-sm capitalize text-[8px]'>
						amazing prizes!
					</p>
				</div>
			</div>
		</div>
	)
}

export default WinnersShowcase
