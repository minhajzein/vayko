import Instagram from '/svgs/instagram.svg'

//imports................................................................

function InstaCard({ url }) {
	return (
		<div className='relative shadow-lg w-[104px] md:w-[204px] md:h-[350px] h-[175px] flex justify-center items-center rounded-lg overflow-hidden'>
			<img
				src={Instagram}
				className='bg-[#FF2A3E] z-10 absolute top-2 left-2 p-[3px] rounded-lg'
				alt='insta-icon'
			/>

			<video src='https://vayko.in/vid1.mp4' loop controls muted></video>
		</div>
	)
}

export default InstaCard
