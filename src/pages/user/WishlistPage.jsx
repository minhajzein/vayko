import Footer from '../../components/footer/Footer'
import WebFooter from '../../components/footer/WebFooter'
import FreeShipping from '../../components/free-shipping/FreeShipping'
import Navbar from '../../components/navbar/Navbar'
import DrawTimer from '../../components/timer/DrawTimer'
import Wishlist from '../../components/wishlist/Wishlist'

//imports................................................................

function WishlistPage() {
	return (
		<div className='min-h-screen'>
			<Navbar />
			<DrawTimer />
			<Wishlist />
			<FreeShipping />
			<WebFooter />
			<Footer />
		</div>
	)
}

export default WishlistPage
