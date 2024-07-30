import ContactUs from '../../components/contact-us/ContactUs'
import Footer from '../../components/footer/Footer'
import WebFooter from '../../components/footer/WebFooter'
import Navbar from '../../components/navbar/Navbar'
import DrawTimer from '../../components/timer/DrawTimer'

//imports........................................................................................

function ContactUsPage() {
	return (
		<>
			<Navbar />
			<DrawTimer />
			<ContactUs />
			<Footer />
			<WebFooter />
		</>
	)
}

export default ContactUsPage
