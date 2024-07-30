import ArrowRight from '/svgs/arrow-right.svg'
import ArrowRightYellow from '/svgs/arrow-right-yellow.svg'
import { useGetAllBannersQuery } from '../../redux/apiSlices/bannerApiSlice'

//imports................................................................................................................................................................................................................................................................

function LandingBanner() {
	const { data } = useGetAllBannersQuery()

	return (
		<div className='w-full md:px-4 flex'>
			<div className='bg-cover md:w-[70%] relative w-full m-4 bg-center rounded-lg p-5 md:px-8 flex flex-col gap-4 md:gap-16 overflow-hidden'>
				<img
					className='absolute w-full -z-10 left-0 top-0 h-full object-cover'
					src={data?.banners[0]?.photo}
					alt=''
				/>
				<div className='flex flex-col md:gap-8 text-white w-[60%] md:w-[50%]'>
					<button className='flex items-center gap-2'>
						<span className='uppercase text-xs md:text-xl'>mega week</span>
						<img src={ArrowRight} alt='right-arrow' />
					</button>
					<h1 className='capitalize leading-tight font-bold drop-shadow text-2xl md:text-6xl'>
						grand prices awaiting you!
					</h1>
					<p className='text-xs font-light capitalize md:text-2xl md:w-[80%]'>
						Shop and Win amazing prices on Weekly draws.
					</p>
				</div>
				<button
					type='button'
					className='flex items-center w-[35%] md:w-[25%] md:py-3 justify-center gap-2  bg-white py-1 px-2 rounded-full'
				>
					<span className='capitalize break-keep md:text-2xl text-nowrap text-[#CF950F] text-xs font-semibold'>
						shop now
					</span>
					<img
						src={ArrowRightYellow}
						className='md:size-8'
						alt='yellow-arrow'
					/>
				</button>
				<div className='flex bg-white rounded-lg border-2 border-[#9C7210] p-2 w-[70%] justify-center items-center md:gap-10 gap-4'>
					<img
						src='/images/smiley.png'
						className='object-contain md:hidden'
						alt='smiley'
					/>
					<img src='/images/gift-box.png' className='hidden md:block' alt='' />
					<span className='text-[#9C7210] capitalize text-2xl md:text-6xl font-bold'>
						win weekly
					</span>
				</div>
			</div>
			<div className=' hidden md:flex flex-col relative p-10 bg-[#FFEFCB] w-[30%] m-4 rounded-xl'>
				<div className='flex flex-col gap-2 z-10 max-w-[60%]'>
					<div className='border border-[#A29B1D] flex justify-center rounded-full px-4 py-2 text-[#A29B1D] capitalize font-bold text-xl'>
						big win monday
					</div>
					<h1 className='font-bold text-6xl capitalize text-[#A29B1D]'>
						win Effortlessly
					</h1>
					<h1>
						All new <span className='font-bold'>TATA Harrier</span>
					</h1>
					<button className='bg-[#A29B1D] py-2 flex items-center justify-center gap-2 text-white rounded-full w-[60%]'>
						<h1>shop now</h1>
						<img src='/svgs/Arrow.svg' alt='arrow' />
					</button>
				</div>
				<img
					src='/images/harrier.png'
					className='absolute -bottom-7 right-0'
					alt=''
				/>
			</div>
		</div>
	)
}

export default LandingBanner
