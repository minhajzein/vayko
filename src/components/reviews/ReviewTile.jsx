import Rating from '/svgs/rating.svg'
import ReviewProfile from '/images/review-profile.png'

//imports................................................................

function ReviewTile() {
	return (
		<div className='w-full border-b py-2 border-black/50'>
			<div className='w-full flex justify-between items-start'>
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
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
				dolor sit amet, consectetur adipiscing elit.{' '}
			</p>
		</div>
	)
}

export default ReviewTile
