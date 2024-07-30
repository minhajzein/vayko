import Navbar from '../../components/navbar/Navbar'
import DrawTimer from '../../components/timer/DrawTimer'
import Footer from '../../components/footer/Footer'
import WebFooter from '../../components/footer/WebFooter'
import AboutUs from '../../components/about-us/AboutUs'

//imports................................................................................................

function AboutUsPage() {
	return (
		<>
			<Navbar />
			<DrawTimer />
			<AboutUs />
			<Footer />
			<WebFooter />
		</>
	)
}

export default AboutUsPage
