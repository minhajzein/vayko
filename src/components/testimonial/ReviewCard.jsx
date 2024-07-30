import Rating from '/svgs/rating.svg'
import ReviewProfile from '/images/review-profile.png'

//imports................................................................................................

function ReviewCard() {
	return (
		<div className='w-full bg-[#F5F5F5] p-16 rounded-lg'>
			<div className='w-full flex justify-between items-center'>
				<div className='flex gap-2 items-center'>
					<img
						src={ReviewProfile}
						className='h-full object-contain'
						alt='profile'
					/>
					<div>
						<h1 className='font-bold text-xl'>Rahul Ravi</h1>
						<p className='opacity-50'>kozhikode</p>
					</div>
				</div>
				<img src={Rating} alt='rating' />
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur. Euismod fermentum nisi congue
				commodo et varius tempor arcu. Fermentum nisi congue commodo et euismod
				fermentum nisi congue commodo et varius
			</p>
		</div>
	)
}

export default ReviewCard
