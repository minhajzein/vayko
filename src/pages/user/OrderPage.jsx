import Footer from '../../components/footer/Footer'
import WebFooter from '../../components/footer/WebFooter'
import Navbar from '../../components/navbar/Navbar'
import Orders from '../../components/orders/Orders'

//imports................................................................................................

function OrderPage() {
	return (
		<>
			<Navbar />
			<Orders />
			<WebFooter />
			<Footer />
		</>
	)
}

export default OrderPage
