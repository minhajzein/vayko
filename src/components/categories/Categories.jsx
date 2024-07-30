import React from 'react'
import CategoryCard from './CategoryCard'
import { useGetAllCategoriesQuery } from '../../redux/apiSlices/categoriesApiSlice'
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll'
import CategorySkelton from '../../skeltons/CategorySkelton'
const cates = [
	{ title: 'bags', image: '/images/bag.png' },
	{ title: 'watches', image: '/images/watch.png' },
	{ title: 'apparels', image: '/images/apparels.png' },
	{ title: 'shoes', image: '/images/shoes.png' },
	{ title: 'clothes', image: '/images/clothes.png' },
	{ title: 'bags', image: '/images/bag.png' },
	{ title: 'watches', image: '/images/watch.png' },
	{ title: 'apparels', image: '/images/apparels.png' },
	{ title: 'shoes', image: '/images/shoes.png' },
	{ title: 'clothes', image: '/images/clothes.png' },
]

//imports................................................................................................

function Categories({ backgroundColor, title, titleColor }) {
	const { data, isSuccess, isLoading } = useGetAllCategoriesQuery()
	const scrollReff = useHorizontalScroll()

	return (
		<div className={`max-w-full flex flex-col gap-2 md:px-[80px] md:py-4`}>
			{isLoading ? (
				<CategorySkelton />
			) : (
				<div
					ref={scrollReff}
					className='grid grid-flow-col hover:cursor-w-resize overflow-x-auto px-2 scrollbar-hidden'
				>
					{isSuccess && data.ids.map(id => <CategoryCard key={id} id={id} />)}
				</div>
			)}
		</div>
	)
}

export default Categories
