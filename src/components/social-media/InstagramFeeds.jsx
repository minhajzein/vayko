import React from 'react'
import InstaCard from './InstaCard'
const data = [
	{ url: 'https://www.instagram.com/reel/C9zrkExyqQ7/', id: 2 },
	{ url: 'https://www.instagram.com/reel/C9xIRWyyZXQ/', id: 3 },
	{ url: 'https://www.instagram.com/reel/C9unQwiyUOF/', id: 4 },
	{ url: 'https://www.instagram.com/reel/C9j_nSiouG4/', id: 5 },
	{ url: 'https://www.instagram.com/reel/C9zrkExyqQ7/', id: 2 },
	{ url: 'https://www.instagram.com/reel/C9xIRWyyZXQ/', id: 3 },
	{ url: 'https://www.instagram.com/reel/C9unQwiyUOF/', id: 4 },
	{ url: 'https://www.instagram.com/reel/C9j_nSiouG4/', id: 5 },
]

//imports..................................................................

function InstagramFeeds() {
	return (
		<div className='w-full grid grid-flow-col gap-2 md:gap-6 px-4 py-2 overflow-x-auto scrollbar-hidden'>
			{data.map((feed, i) => (
				<InstaCard key={i} url={feed.url} />
			))}
		</div>
	)
}

export default InstagramFeeds
