import Categories from '../../components/categories/Categories'
import Footer from '../../components/footer/Footer'
import WebFooter from '../../components/footer/WebFooter'
import Navbar from '../../components/navbar/Navbar'
import NewsLetter from '../../components/news-letter/NewsLetter'
import ExcitingPrices from '../../components/shop-and-win/ExcitingPrices'
import SocialMedia from '../../components/social-media/SocialMedia'
import SocialMediaHappenings from '../../components/social-media/SocialMediaHappenings'
import DrawTimer from '../../components/timer/DrawTimer'
import Winners from '../../components/winners/Winners'
import OurProducts from '../../components/products/our-products/OurProducts'
import MobileBanner from '../../components/banners/MobileBanner'

//imports................................................................................................................................

function LandingPage() {
	return (
		<div className='w-full mb-20 md:mb-0'>
			<Navbar />
			<ExcitingPrices />
			<MobileBanner />
			<DrawTimer />
			<Categories title={true} />
			<OurProducts />
			<Winners />
			<SocialMediaHappenings />
			<SocialMedia />
			<NewsLetter />
			<WebFooter />
			<Footer />
		</div>
	)
}

export default LandingPage
