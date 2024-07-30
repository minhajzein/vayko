import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleProductQuery } from '../../redux/apiSlices/productApiSlice'
import AddProductToCart from '../products/AddProductToCart'
import FastCheckout from './FastCheckout'
import SmallTimer from '../timer/SmallTimer'
import ProductFooter from './ProductFooter'

//imports................................................................

function SingleProduct() {
	const [activeImageIndex, setActiveImageIndex] = useState(0)
	const { slug } = useParams()
	const { data, isSuccess } = useGetSingleProductQuery(slug)

	return (
		isSuccess && (
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
							{data.product?.discount ? (
								<div>
									<div className='flex items-end md:gap-3 gap-2'>
										<h1 className='text-[#FE2B3E] text-2xl font-bold'>
											₹
											{(
												Number(data.product.price) -
												(Number(data.product.price) *
													Number(data.product.discount)) /
													100
											).toFixed(2)}
										</h1>
										<del className='text-black opacity-50 text-xl font-bold'>
											₹{data.product.price}
										</del>
										<span className='text-green-600 font-semibold rounded-xl text-lg'>
											{Number(data.product.discount).toFixed()}% Off
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
										{Number(data?.product.stock) <= 0
											? 'out of stock'
											: 'in stock'}
									</h1>
								</div>
							) : (
								<div>
									<h1 className='text-[#FE2B3E] text-4xl font-bold'>
										₹{data.product.price}
									</h1>
								</div>
							)}

							{data.product.is_variable !== '0' && (
								<div className='hidden md:flex flex-col gap-5'>
									<div className='flex gap-5'>
										<h1 className='text-4xl'>Size :</h1>
										<select
											name='size'
											className='outline rounded-2xl px-2 py-1'
											id='size'
										>
											<option className='' value='M'>
												M
											</option>
											<option className='' value='M'>
												S
											</option>
											<option className='' value='M'>
												L
											</option>
											<option className='' value='M'>
												XL
											</option>
										</select>
									</div>
									<div className='flex gap-5 items-end'>
										<h1 className='text-4xl'>Colour :</h1>
										<div className='flex'>
											<div className='bg-[#CFC829] size-9 rounded-full border-2 border-white'></div>
											<div className='bg-[#CF2929] size-9 rounded-full -translate-x-3 border-2 border-white'></div>
											<div className='bg-[#86CF29] size-9 rounded-full -translate-x-6 border-2 border-white'></div>
											<div className='bg-[#29A7CF] size-9 rounded-full -translate-x-9 border-2 border-white'></div>
										</div>
									</div>
								</div>
							)}
							<div className='gap-3 hidden md:flex'>
								<FastCheckout product={data.product} />
								<AddProductToCart
									slug={data.product.slug}
									title={data.product.title}
									variant={
										data.product.is_variable === '0' ? null : variants[0]
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
	)
}

export default SingleProduct
