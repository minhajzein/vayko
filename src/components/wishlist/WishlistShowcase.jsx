import { useSelector } from 'react-redux'
import { useGetWishlistQuery } from '../../redux/apiSlices/wishlistApiSlice'
import WishlistTile from './WishlistTile'
const products = [
	{
		image: '/images/products/product-4.png',
		title: 'Shoes',
		price: 6600,
		discountPrice: 5400,
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		category: 'watches',
		id: 1,
	},
	{
		image: '/images/products/product-5.png',
		title: 'Shoes',
		price: 6600,
		discountPrice: 5400,
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		category: 'electronics',
		id: 2,
	},
	{
		image: '/images/products/product-6.png',
		title: 'Shoes',
		price: 6600,
		discountPrice: 5400,
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		category: 'bags',
		id: 3,
	},
	{
		image: '/images/products/product-7.png',
		title: 'Shoes',
		price: 6600,
		discountPrice: 5400,
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		category: 'perfumes',
		id: 4,
	},
	{
		image: '/images/products/product-8.png',
		title: 'Shoes',
		price: 6600,
		discountPrice: 5400,
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		category: 'Apparel',
		id: 5,
	},
	{
		image: '/images/products/product-9.png',
		title: 'Shoes',
		price: 6600,
		discountPrice: 5400,
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		category: 'Apparel',
		id: 6,
	},
	{
		image: '/images/products/product-4.png',
		title: 'Shoes',
		price: 6600,
		discountPrice: 5400,
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		category: 'watches',
		id: 7,
	},
	{
		image: '/images/products/product-5.png',
		title: 'Shoes',
		price: 6600,
		discountPrice: 5400,
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		category: 'electronics',
		id: 8,
	},
	{
		image: '/images/products/product-6.png',
		title: 'Shoes',
		price: 6600,
		discountPrice: 5400,
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		category: 'bags',
		id: 9,
	},
	{
		image: '/images/products/product-7.png',
		title: 'Shoes',
		price: 6600,
		discountPrice: 5400,
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		category: 'perfumes',
		id: 10,
	},
	{
		image: '/images/products/product-8.png',
		title: 'Shoes',
		price: 6600,
		discountPrice: 5400,
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		category: 'Apparel',
		id: 11,
	},
	{
		image: '/images/products/product-9.png',
		title: 'Shoes',
		price: 6600,
		discountPrice: 5400,
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		category: 'Apparel',
		id: 12,
	},
]

//imports................................................................

function WishlistShowcase() {
	const user = useSelector(state => state.auth.user)
	const { data: wishlist, isLoading } = useGetWishlistQuery(user?.id)
	console.log(wishlist)

	return (
		<div className='flex flex-col gap-2 py-2 pl-2 min-h-dvh'>
			{products.map(prod => (
				<WishlistTile product={prod} key={prod.id} />
			))}
		</div>
	)
}

export default WishlistShowcase
