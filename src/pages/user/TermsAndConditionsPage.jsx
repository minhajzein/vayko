import Footer from '../../components/footer/Footer'
import WebFooter from '../../components/footer/WebFooter'
import Navbar from '../../components/navbar/Navbar'
import TermsAndConditions from '../../components/terms-and-conditions/TermsAndConditions'
import DrawTimer from '../../components/timer/DrawTimer'

//imports..........................................................................................

function TermsAndConditionsPage() {
	return (
		<>
			<Navbar />
			<DrawTimer />
			<TermsAndConditions />
			<Footer />
			<WebFooter />
		</>
	)
}

export default TermsAndConditionsPage
