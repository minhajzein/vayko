import ReviewTile from './ReviewTile'

//imports................................................................

function Reviews() {
	return (
		<div className='flex flex-col p-4 gap-4'>
			<h1 className='text-3xl font-semibold'>Reviews</h1>
			<ReviewTile />
			<ReviewTile />
			<ReviewTile />
			<ReviewTile />
		</div>
	)
}

export default Reviews
