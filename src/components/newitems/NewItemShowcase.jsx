import NewItemCard from './NewItemCard'

const newItems = [
	{
		image: '/images/products/product-4.png',
		title: 'Shoes',
		price: 6600,
		discountPrice: 5400,
		category: 'watches',
		id: 1,
	},
	{
		image: '/images/products/product-5.png',
		title: 'Shoes',
		price: 6600,
		discountPrice: 5400,
		category: 'electronics',
		id: 2,
	},
	{
		image: '/images/products/product-6.png',
		title: 'Shoes',
		price: 6600,
		discountPrice: 5400,
		category: 'bags',
		id: 3,
	},
	{
		image: '/images/products/product-7.png',
		title: 'Shoes',
		price: 6600,
		discountPrice: 5400,
		category: 'perfumes',
		id: 4,
	},
	{
		image: '/images/products/product-8.png',
		title: 'Shoes',
		price: 6600,
		discountPrice: 5400,
		category: 'Apparel',
		id: 5,
	},
	{
		image: '/images/products/product-9.png',
		title: 'Shoes',
		price: 6600,
		discountPrice: 5400,
		category: 'Apparel',
		id: 6,
	},
]

//imports................................................................

function NewItemShowcase() {
	return (
		<div className='w-full md:w-auto md:overflow-x-auto scrollbar-hidden p-3 grid grid-cols-2 gap-1 md:gap-5'>
			{newItems.map(product => (
				<NewItemCard key={product.id} product={product} />
			))}
		</div>
	)
}

export default NewItemShowcase
