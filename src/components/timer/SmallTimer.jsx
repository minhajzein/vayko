import { useEffect, useState } from 'react'
import { useGetDrawTimeQuery } from '../../redux/apiSlices/timerApiSlice'
import { CgSpinner } from 'react-icons/cg'

//imports..................................

function SmallTimer() {
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
		if (deadline <= new Date().toLocaleTimeString) {
			interval = setInterval(() => getTime(deadline), 1000)
		}
		return () => clearInterval(interval)
	}, [isSuccess])
	return (
		<div className='border border-[#FF2A3E] gap-2 px-4 py-2 rounded-xl flex flex-col justify-center w-full md:w-auto items-center'>
			<h1 className='text-xl text-[#FF2A3E] capitalize font-semibold md:text-3xl'>
				offer ends in
			</h1>
			<div className='flex gap-2 w-full justify-center pb-2'>
				<div className='capitalize border p-2 rounded-xl flex flex-col justify-center items-center'>
					<div className='text-2xl'>
						{' '}
						{isLoading ? (
							<CgSpinner className='animate-spin' />
						) : days.toString() === 'NaN' ? (
							'00'
						) : days.toString().length === 1 ? (
							`0${days.toString()}`
						) : (
							days.toString()
						)}{' '}
					</div>
					<h1>days</h1>
				</div>
				<div className='capitalize border p-2 rounded-xl flex flex-col justify-center items-center'>
					<div className='text-2xl'>
						{isLoading ? (
							<CgSpinner className='animate-spin' />
						) : hours.toString() === 'NaN' ? (
							'00'
						) : hours.toString().length === 1 ? (
							`0${hours.toString()}`
						) : (
							hours.toString()
						)}{' '}
					</div>
					<h1>hrs</h1>
				</div>
				<div className='capitalize border p-2 rounded-xl flex flex-col justify-center items-center'>
					<div className='text-2xl'>
						{isLoading ? (
							<CgSpinner className='animate-spin' />
						) : minutes.toString() === 'NaN' ? (
							'00'
						) : minutes.toString().length === 1 ? (
							`0${minutes.toString()}`
						) : (
							minutes.toString()
						)}{' '}
					</div>
					<h1>min.</h1>
				</div>
				<div className='capitalize border p-2 rounded-xl flex flex-col justify-center items-center'>
					<div className='text-2xl'>
						{isLoading ? (
							<CgSpinner className='animate-spin' />
						) : seconds.toString() === 'NaN' ? (
							'00'
						) : seconds.toString().length === 1 ? (
							`0${seconds.toString()}`
						) : (
							seconds.toString()
						)}{' '}
					</div>
					<h1>sec.</h1>
				</div>
			</div>
		</div>
	)
}

export default SmallTimer
