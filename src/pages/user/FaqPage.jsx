import Navbar from '../../components/navbar/Navbar'
import DrawTimer from '../../components/timer/DrawTimer'
import Footer from '../../components/footer/Footer'
import WebFooter from '../../components/footer/WebFooter'
import Faq from '../../components/FAQ/Faq'

//imports................................................................................................

function FaqPage() {
	return (
		<>
			<Navbar />
			<DrawTimer />
			<Faq />
			<Footer />
			<WebFooter />
		</>
	)
}

export default FaqPage
