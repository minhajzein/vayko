import Footer from '../../components/footer/Footer'
import WebFooter from '../../components/footer/WebFooter'
import Navbar from '../../components/navbar/Navbar'
import PrivacyPolicy from '../../components/privacy-policy/PrivacyPolicy'
import DrawTimer from '../../components/timer/DrawTimer'

//imports................................................................................................

function PricacyPolicyPage() {
	return (
		<>
			<Navbar />
			<DrawTimer />
			<PrivacyPolicy />
			<Footer />
			<WebFooter />
		</>
	)
}

export default PricacyPolicyPage
