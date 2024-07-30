import { useTrendingProductsQuery } from '../../../redux/apiSlices/productApiSlice'
import TrendingCard from './TrendingCard'

//imports................................................................................................

function TrendingShowcase() {
	const { data, isSuccess } = useTrendingProductsQuery()

	return (
		<div className='w-full overflow-x-auto scrollbar-hidden px-2 md:p-10'>
			<div className='grid grid-flow-col gap-2'>
				{isSuccess &&
					data?.trendingProducts.map(product => (
						<TrendingCard key={product.id} product={product} />
					))}
			</div>
		</div>
	)
}

export default TrendingShowcase
