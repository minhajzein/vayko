import React from 'react'
import ReviewCard from './ReviewCard'

//imports................................................................................................

function Testimonial() {
	return (
		<div className='w-full hidden md:flex  flex-col p-10 gap-10'>
			<div className='flex flex-col items-center gap-2'>
				<h6 className='capitalize font-semibold text-[#FF2A3E]'>Testimonial</h6>
				<h1 className='capitalize text-4xl font-semibold'>
					Our Client Feedbacks
				</h1>
			</div>
			<div className='flex justify-center gap-10 p-10'>
				<ReviewCard />
				<ReviewCard />
			</div>
			<div className='w-full flex justify-center items-center gap-10'>
				<button>
					<img src='/svgs/arrow-square-left.svg' alt='button-left' />
				</button>
				<button>
					<img src='/svgs/arrow-square-right.svg' alt='button-right' />
				</button>
			</div>
		</div>
	)
}

export default Testimonial
