import WinnerGold from '/svgs/Gold_Star.svg'

//imports................................................................

function WinnerCard({ winner }) {
	return (
		<div className='bg-white p-1 md:p-4 w-full rounded-lg flex flex-col items-center'>
			<div className='relative w-full'>
				<img
					className='rounded-lg w-full md:h-52 size-[160px]  object-cover'
					src={winner.image}
					alt='winner_pic'
				/>
				{winner.prize === 'TVS NTORQ' && (
					<div className='absolute bottom-0 flex p-2 flex-col w-full left-0'>
						<img
							src='/images/ntorq-winner.png'
							className='size-[50%]'
							alt='prize'
						/>
						<h1 className='w-full p-1 italic rounded-full text-xs md:text-sm ring-2 font-extrabold ring-[#FE2B3E] text-center bg-[#F6D142]'>
							{winner.prize} WINNER
						</h1>
					</div>
				)}
			</div>
			<div className='flex items-center flex-col p-1'>
				<h1 className='text-[13px] md:text-xl font-bold'>{winner.name}</h1>
				<p className='text-[#FF3245] md:text-sm text-[8px]'>{winner.address}</p>
			</div>
			{}
		</div>
	)
}

export default WinnerCard
