import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleProductQuery } from '../../redux/apiSlices/productApiSlice'
import AddProductToCart from '../products/AddProductToCart'
import FastCheckout from './FastCheckout'
import SmallTimer from '../timer/SmallTimer'
import ProductFooter from './ProductFooter'
import SingleProductSkelton from '../../skeltons/SingleProductSkelton'

//imports................................................................

function SingleProduct() {
	const [activeImageIndex, setActiveImageIndex] = useState(0)
	const { slug } = useParams()
	const { data, isLoading } = useGetSingleProductQuery(slug)

	return isLoading ? (
		<SingleProductSkelton />
	) : (
		<>
			<div className='px-4 md:py-10 py-4  w-full flex flex-col gap-5 md:gap-10 md:px-[150px]'>
				<div className='flex flex-col md:flex-row w-full md:gap-5 gap-3'>
					<div className='flex flex-col md:flex-row-reverse md:w-[55%] gap-5 overflow-hidden'>
						<img
							src={data?.product.photos[activeImageIndex]}
							className='md:size-[500px] h-[350px] w-full object-cover md:object-center rounded-xl shadow'
							alt='product'
						/>
						<div className='grid grid-flow-col md:grid-flow-row md:gap-3 md:h-[500px] md:overflow-x-auto overflow-y-auto w-auto scrollbar-hidden'>
							{data?.product.photos.map((img, i) => (
								<img
									src={img}
									onMouseOver={() => setActiveImageIndex(i)}
									key={i}
									alt='product'
									className={`md:w-20 md:h-20 size-10 object-cover rounded-xl ${
										i === activeImageIndex && 'border border-red-500'
									} shadow`}
								/>
							))}
						</div>
					</div>
					<div className='flex flex-col md:gap-5 gap-2 md:w-[45%]'>
						<div className='flex flex-col gap-1'>
							{' '}
							<h1 className='text-md font-semibold uppercase md:text-3xl  '>
								{data.product.title}
							</h1>
							<p
								dangerouslySetInnerHTML={{
									__html: data.product.summary,
								}}
								className='text-xs text-black/50 line-clamp-2 font-sans md:text-xl'
							></p>
							<h1 className='text-black/50 text-sm font-semibold'>
								SKU : {data.product.sku}
							</h1>
						</div>
						<SmallTimer />
						<div>
							<div className='flex items-end md:gap-3 gap-2'>
								<h1 className='text-[#FE2B3E] text-2xl font-bold'>
									₹{Number(data.product.price).toFixed()}
								</h1>
								<del className='text-black opacity-50 text-xl font-bold'>
									₹{Number(data?.product.original_price).toFixed()}
								</del>
								<span className='text-green-600 font-semibold rounded-xl text-lg'>
									{Number(data?.product.discount).toFixed()}% Off
								</span>
							</div>
							<p className='text-xs'>(Price inclusive of all taxes)</p>
							<h1
								className={`${
									Number(data?.product.stock) <= 0
										? 'text-red-600'
										: 'text-green-600'
								} font-semibold capitalize`}
							>
								{Number(data?.product.stock) <= 0 ? 'out of stock' : 'in stock'}
							</h1>
						</div>

						<div className='gap-3 hidden md:block md:flex'>
							<AddProductToCart
								product={data?.product}
								variant={
									data.product.is_variable === '0'
										? null
										: data.product.variants[0]
								}
							/>
						</div>
					</div>
				</div>
				<div className='md:px-[60px] flex flex-col gap-5'>
					<hr />
					<h1 className='font-semibold'>Description</h1>
					<div
						dangerouslySetInnerHTML={{ __html: data.product.description }}
					></div>
				</div>
			</div>
			<ProductFooter product={data?.product} />
		</>
	)
}

export default SingleProduct
