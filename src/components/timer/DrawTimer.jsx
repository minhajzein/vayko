import { useState, useEffect } from 'react'
import { useGetDrawTimeQuery } from '../../redux/apiSlices/timerApiSlice'
import { CgSpinner } from 'react-icons/cg'

//imports................................................................................................

function DrawTimer() {
	const { data, isLoading, isSuccess } = useGetDrawTimeQuery()
	const [days, setDays] = useState(0)
	const [hours, setHours] = useState(0)
	const [minutes, setMinutes] = useState(0)
	const [seconds, setSeconds] = useState(0)

	const deadline = data?.nextDrawBanners[0]?.end_date

	const getTime = () => {
		const time = Date.parse(deadline) - Date.now()

		setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
		setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
		setMinutes(Math.floor((time / 1000 / 60) % 60))
		setSeconds(Math.floor((time / 1000) % 60))
	}

	useEffect(() => {
		let interval
		if (new Date(deadline).getTime() !== new Date().getTime() && isSuccess) {
			interval = setInterval(() => getTime(deadline), 1000)
		} else {
			setHours('0')
			setDays('0')
			setMinutes('0')
			setSeconds('0')
		}
		return () => clearInterval(interval)
	}, [isSuccess])

	return (
		<div className='md:px-[80px] p-4 md:p-0 w-full'>
			<div className='bg-[#FF2A3E] flex flex-col md:flex-row px-9 md:px-32 gap-2 md:gap-0 md:my-5 rounded-lg w-full py-4 md:py-5 overflow-hidden justify-between items-center relative'>
				<div className='text-white min-h-full z-20 flex flex-col md:gap-2 justify-between'>
					<h1 className='text-xl capitalize font-semibold text-center md:text-5xl'>
						vayko lucky gala
					</h1>
					<p className='md:text-2xl capitalize text-sm'>
						shop and win big with vayko.
					</p>
				</div>
				<div className='h-full flex gap-2 z-20'>
					<div className='bg-white rounded-lg p-1 flex w-[50px] md:w-[100px] relative flex-col justify-center px-4 items-center text-[#FF2A3E] md:p-1'>
						<h1 className='font-bold text-xl md:text-5xl'>
							{isLoading ? (
								<CgSpinner className='animate-spin' />
							) : days.toString() === 'NaN' ? (
								'00'
							) : days.toString().length === 1 ? (
								`0${days.toString()}`
							) : (
								days.toString()
							)}
						</h1>
						<p className='capitalize md:bottom-1 text-xs md:text-2xl font-semibold'>
							days
						</p>
					</div>
					<div className='bg-white rounded-lg flex w-[50px] md:w-[100px]  relative  flex-col justify-center px-4 items-center text-[#FF2A3E] md:py-2'>
						<h1 className='font-bold text-xl md:text-5xl'>
							{isLoading ? (
								<CgSpinner className='animate-spin' />
							) : hours.toString() === 'NaN' ? (
								'00'
							) : hours.toString().length === 1 ? (
								`0${hours.toString()}`
							) : (
								hours.toString()
							)}
						</h1>
						<p className='capitalize md:bottom-1 text-xs md:text-2xl font-semibold'>
							hrs
						</p>
					</div>
					<div className='bg-white rounded-lg flex w-[50px] md:w-[100px]  md:min-h-full relative flex-col items-center justify-center px-4 text-[#FF2A3E] md:py-2'>
						<h1 className='font-bold text-xl md:text-5xl'>
							{isLoading ? (
								<CgSpinner className='animate-spin' />
							) : minutes.toString() === 'NaN' ? (
								'00'
							) : minutes.toString().length === 1 ? (
								`0${minutes.toString()}`
							) : (
								minutes.toString()
							)}
						</h1>
						<p className='capitalize md:bottom-1 text-xs md:text-2xl font-semibold'>
							min.
						</p>
					</div>
					<div className='bg-white rounded-lg flex w-[50px] md:w-[100px]  md:min-h-full relative flex-col items-center justify-center px-4 text-[#FF2A3E] md:py-2'>
						<h1 className='font-bold text-xl md:text-5xl'>
							{isLoading ? (
								<CgSpinner className='animate-spin' />
							) : seconds.toString() === 'NaN' ? (
								'00'
							) : seconds.toString().length === 1 ? (
								`0${seconds.toString()}`
							) : (
								seconds.toString()
							)}
						</h1>
						<p className='capitalize md:bottom-1 text-xs md:text-2xl font-semibold'>
							sec.
						</p>
					</div>
				</div>
				<p className='md:text-2xl capitalize z-40 text-center text-white md:hidden'>
					shop and win big with vayko.
				</p>
				<img
					src='/images/md-gift-box.png'
					className='absolute animate-bounce z-10 left-0'
					alt='md-gift-box'
				/>
				<img
					src='/images/thunder.png'
					className='object-contain md:hidden h-[70%] z-10 animate-ping absolute top-0 right-3'
					alt='thunder'
				/>
				<img
					src='/images/md-thunder.png'
					className='absolute top-0 hidden animate-ping md:block right-0 z-10'
					alt='md-thunder'
				/>
				<img
					src='/images/md-eclipse.png'
					className='object-contain hidden md:block absolute top-0 right-0'
					alt='eclipse'
				/>
				<img
					src='/images/draw_eclipse.png'
					className='object-contain md:hidden h-[80%] absolute top-0 right-0'
					alt='eclipse'
				/>
			</div>
		</div>
	)
}

export default DrawTimer
