import Flash from '/images/flash.png'
import WinnersShowcase from './WinnersShowcase'

//imports................................................................................................

function Winners() {
	return (
		<div className='bg-gradient-to-t from-[#FF3245] to-[#CE048C]'>
			<img
				src='/images/border-top.png'
				className='hidden md:block w-full'
				alt='top'
			/>
			<div className='py-4 flex flex-col gap-3'>
				<div className='flex justify-between'>
					<div className='text-white md:px-20 px-4 pt-3'>
						<h1 className='font-bold text-xl md:text-5xl'>Winners!</h1>
						<p className='capitalize md:text-2xl'>lucky gala winners</p>
					</div>
					<img
						src={Flash}
						className='object-contain mr-10 h-24 hidden md:block'
						alt='flash'
					/>
				</div>
				<WinnersShowcase />
			</div>
			<img
				src='/images/border-bottom.png'
				className='w-full md:block hidden'
				alt='bottom'
			/>
		</div>
	)
}

export default Winners
