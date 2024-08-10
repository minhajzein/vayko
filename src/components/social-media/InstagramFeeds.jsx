import InstaCard from './InstaCard'
import { useGetInstaLinksQuery } from '../../redux/apiSlices/socialApiSlices'

//imports..................................................................

function InstagramFeeds() {
	const { data: feeds } = useGetInstaLinksQuery()

	return (
		<div className='w-full grid grid-flow-col gap-2 md:gap-6 px-4 py-2 overflow-x-auto scrollbar-hidden'>
			{feeds?.links.map(feed => (
				<InstaCard key={feed.id} embed={feed.link} />
			))}
		</div>
	)
}

export default InstagramFeeds
