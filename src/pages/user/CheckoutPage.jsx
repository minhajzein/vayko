import Checkout from '../../components/checkout/Checkout'
import Footer from '../../components/footer/Footer'
import WebFooter from '../../components/footer/WebFooter'
import Navbar from '../../components/navbar/Navbar'

//imports................................................................

function CheckoutPage() {
	return (
		<>
            <Navbar />
            <Checkout />
			<Footer />
			<WebFooter />
		</>
	)
}

export default CheckoutPage
