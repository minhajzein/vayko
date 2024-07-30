import FastCheckout from './FastCheckout'
import AddProductToCart from '../../components/products/AddProductToCart'
import { useParams } from 'react-router-dom'
import { useGetSingleProductQuery } from '../../redux/apiSlices/productApiSlice'

//imports................................................................................................

function ProductFooter({ product }) {
	return (
		<div className='w-full md:hidden gap-2 flex z-30 justify-around p-5 sticky bottom-0 bg-white shadow shadow-black'>
			<FastCheckout product={product} />
			<AddProductToCart
				slug={product.slug}
				title={product.title}
				variantId={product.is_variable !== '0' ? product.variants : null}
			/>
		</div>
	)
}

export default ProductFooter
