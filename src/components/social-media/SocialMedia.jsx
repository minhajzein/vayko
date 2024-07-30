import InstagramFeeds from './InstagramFeeds'

//imports...............................................

function SocialMedia() {
	return (
		<div className='w-full flex md:hidden flex-col py-4'>
			<h1 className='capitalize font-semibold text-sm px-4'>social media</h1>
			<InstagramFeeds />
		</div>
	)
}

export default SocialMedia
