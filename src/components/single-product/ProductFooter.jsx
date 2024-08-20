import FastCheckout from './FastCheckout'
import AddProductToCart from '../../components/products/AddProductToCart'
import { useParams } from 'react-router-dom'
import { useGetSingleProductQuery } from '../../redux/apiSlices/productApiSlice'

//imports................................................................................................

function ProductFooter({ product }) {
	return (
		<div className='w-full flex gap-2  z-30 justify-around p-5 sticky bottom-0 bg-white shadow shadow-black'>
			<FastCheckout product={product} />
			<AddProductToCart
				product={product}
				title={product.title}
				variantId={product.is_variable !== '0' ? product.variants : null}
			/>
		</div>
	)
}

export default ProductFooter
