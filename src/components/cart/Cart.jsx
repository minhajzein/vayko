import CartShowCase from './mobile/CartShowCase'
import CartTable from './CartTable'
import ShippingAddress from './ShippingAddress'

//imports................................................................

function Cart() {
	return (
		<div className='w-full flex flex-col md:px-[80px] md:gap-4'>
			<h1 className='md:text-3xl text-xl font-semibold md:pb-4 md:py-4 py-2 text-center'>
				My Cart
			</h1>
			<div className='md:hidden'>
				<CartShowCase />
			</div>
			<CartTable />
		</div>
	)
}

export default Cart
