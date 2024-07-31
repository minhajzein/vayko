import Footer from '../../components/footer/Footer'
import WebFooter from '../../components/footer/WebFooter'
import Navbar from '../../components/navbar/Navbar'
import RefundPolicy from '../../components/refund-policy/RefundPolicy'
import DrawTimer from '../../components/timer/DrawTimer'

//imports................................................................................................

function RefundPolicyPage() {
	return (
		<>
			<Navbar />
			<DrawTimer />
			<RefundPolicy />
			<Footer />
			<WebFooter />
		</>
	)
}

export default RefundPolicyPage
