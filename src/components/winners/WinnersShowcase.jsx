import WinnerCard from './WinnerCard'
import WinnerGold from '/svgs/Gold_Star.svg'
import { useGetAllWinnersQuery } from '../../redux/apiSlices/winnersApiSlice'

//imports................................................................................................

function WinnersShowcase() {
	const { data, error } = useGetAllWinnersQuery()

	return (
		<div className='w-full grid grid-cols-2 md:grid-cols-5 md:px-20 md:gap-2 gap-4 px-2 py-4'>
			{data?.winners.map(winner => (
				<WinnerCard key={winner.id} winner={winner} />
			))}
			<div className='flex-row-reverse flex'>
				<div className='bg-white p-1 md:p-4 w-[90%] rounded-lg flex flex-col items-center'>
					<div className='relative w-full'>
						<img
							className='absolute top-0 md:size-16 left-0 -translate-x-1/2 -translate-y-1/2'
							src={WinnerGold}
							alt='medal'
						/>
						<img
							className='rounded-lg w-full  bg-slate-400 h-52 object-contain'
							src='/images/who-is-next.png'
							alt='winner_pic'
						/>
					</div>
					<div className='flex items-center flex-col p-1'>
						<h1 className='text-[13px] md:text-xl font-bold capitalize'>
							next winner?
						</h1>
						<p className='text-[#FF3245] md:text-lg capitalize text-[8px]'>
							amazing prizes!
						</p>
					</div>
				</div>
			</div>
			<div className='flex-row-reverse flex'>
				<div className='bg-white p-1 md:p-4 w-[90%] rounded-lg flex flex-col items-center'>
					<div className='relative w-full'>
						<img
							className='absolute top-0 md:size-16 left-0 -translate-x-1/2 -translate-y-1/2'
							src={WinnerGold}
							alt='medal'
						/>
						<img
							className='rounded-lg w-full bg-slate-400 h-52 object-contain'
							src='/images/who-is-next.png'
							alt='winner_pic'
						/>
					</div>
					<div className='flex items-center flex-col p-1'>
						<h1 className='text-[13px] md:text-xl font-bold capitalize'>
							next winner?
						</h1>
						<p className='text-[#FF3245] md:text-lg capitalize text-[8px]'>
							amazing prizes!
						</p>
					</div>
				</div>
			</div>

			<div className='flex-row-reverse  hidden md:flex'>
				<div className='bg-white p-1 md:p-4 w-[90%] rounded-lg flex flex-col items-center'>
					<div className='relative w-full'>
						<img
							className='absolute top-0 md:size-16 left-0 -translate-x-1/2 -translate-y-1/2'
							src={WinnerGold}
							alt='medal'
						/>
						<img
							className='rounded-lg w-full bg-slate-400 h-52 object-contain'
							src='/images/who-is-next.png'
							alt='winner_pic'
						/>
					</div>
					<div className='flex items-center flex-col p-1'>
						<h1 className='text-[13px] md:text-xl font-bold capitalize'>
							next winner?
						</h1>
						<p className='text-[#FF3245] md:text-lg capitalize text-[8px]'>
							amazing prizes!
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WinnersShowcase
