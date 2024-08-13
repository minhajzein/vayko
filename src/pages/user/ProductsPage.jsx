import Footer from '../../components/footer/Footer'
import WebFooter from '../../components/footer/WebFooter'
import Navbar from '../../components/navbar/Navbar'
import Products from '../../components/products/Products'
import DrawTimer from '../../components/timer/DrawTimer'

//imports................................................................

function ProductsPage() {
	return (
		<>
			<Navbar />
			<DrawTimer />
			<Products />
			<Footer />
			<WebFooter />
		</>
	)
}

export default ProductsPage
