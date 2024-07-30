import Categories from '../../components/categories/Categories'
import Footer from '../../components/footer/Footer'
import WebFooter from '../../components/footer/WebFooter'
import FreeShipping from '../../components/free-shipping/FreeShipping'
import Navbar from '../../components/navbar/Navbar'
import Products from '../../components/products/Products'
import DrawTimer from '../../components/timer/DrawTimer'

//imports................................................................

function ProductsPage() {
	return (
		<>
			<Navbar />
			<DrawTimer />
			<Categories title={false} />
			<Products />
			<Footer />
			<WebFooter />
		</>
	)
}

export default ProductsPage
