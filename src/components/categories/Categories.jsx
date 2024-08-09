import CategoryCard from './CategoryCard'
import { useGetAllCategoriesQuery } from '../../redux/apiSlices/categoriesApiSlice'
import CategorySkelton from '../../skeltons/CategorySkelton'

//imports................................................................................................

function Categories() {
	const { data, isSuccess, isLoading } = useGetAllCategoriesQuery()

	return (
		<div className={`max-w-full flex flex-col gap-2 md:px-[80px] px-4 md:py-4`}>
			{isLoading ? (
				<CategorySkelton />
			) : (
				<div className='grid grid-flow-col hover:cursor-w-resize gap-4 overflow-x-auto px-2 scrollbar-hidden'>
					{isSuccess && data.ids.map(id => <CategoryCard key={id} id={id} />)}
				</div>
			)}
		</div>
	)
}

export default Categories
