import React from 'react'
import InstagramFeeds from './InstagramFeeds'

//imports.................................................................

function SocialMediaHappenings() {
	return (
		<div className='hidden md:flex flex-col px-10 gap-1 bg-[#F5F5F5] pb-5'>
			<div className='flex flex-col items-center gap-1'>
				<h6 className='capitalize font-semibold text-xl text-[#FF2A3E]'>
					social media
				</h6>
				<h1 className='capitalize text-3xl font-semibold'>
					Our Social Media Happenings
				</h1>
				<InstagramFeeds />
			</div>
		</div>
	)
}

export default SocialMediaHappenings
