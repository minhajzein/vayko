import Cart from '../../components/cart/Cart'
import Footer from '../../components/footer/Footer'
import WebFooter from '../../components/footer/WebFooter'
import FreeShipping from '../../components/free-shipping/FreeShipping'
import Navbar from '../../components/navbar/Navbar'
import DrawTimer from '../../components/timer/DrawTimer'

//imports................................................................

function CartPage() {
	return (
		<>
			<Navbar />
			<DrawTimer />
			<Cart />
			<Footer />
			<WebFooter />
		</>
	)
}

export default CartPage
