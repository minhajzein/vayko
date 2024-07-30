import WinnerGold from '/svgs/Gold_Star.svg'

//imports................................................................

function WinnerCard({ winner }) {
	return (
		<div className='flex-row-reverse flex'>
			<div className='bg-white p-1 md:p-4 w-[90%] rounded-lg flex flex-col items-center'>
				<div className='relative w-full'>
					<img
						className='absolute top-0 md:size-16 left-0 -translate-x-1/2 -translate-y-1/2'
						src={WinnerGold}
						alt='medal'
					/>
					<img
						className='rounded-lg w-full h-52 object-cover'
						src={winner.image}
						alt='winner_pic'
					/>
				</div>
				<div className='flex items-center flex-col p-1'>
					<h1 className='text-[13px] md:text-xl font-bold'>{winner.name}</h1>
					<p className='text-[#FF3245] md:text-lg text-[8px]'>
						{winner.address}
					</p>
				</div>
			</div>
		</div>
	)
}

export default WinnerCard
