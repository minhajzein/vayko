import { useHorizontalScroll } from '../hooks/useHorizontalScroll'
import CategoryCardSkelton from './CategoryCardSkelton'

//imports................................................................................................

function CategorySkelton() {
	const scrollRef = useHorizontalScroll()
	return (
		<div
			ref={scrollRef}
			className='grid animate-pulse grid-flow-col hover:cursor-w-resize overflow-x-auto scrollbar-hidden px-3 md:gap-10 gap-3'
		>
			<CategoryCardSkelton />
			<CategoryCardSkelton />
			<CategoryCardSkelton />
			<CategoryCardSkelton />
			<CategoryCardSkelton />
			<CategoryCardSkelton />
			<CategoryCardSkelton />
			<CategoryCardSkelton />
			<CategoryCardSkelton />
			<CategoryCardSkelton />
		</div>
	)
}

export default CategorySkelton
