import Footer from '../../components/footer/Footer'
import WebFooter from '../../components/footer/WebFooter'
import Navbar from '../../components/navbar/Navbar'
import Profile from '../../components/profile/Profile'
import DrawTimer from '../../components/timer/DrawTimer'

//imports................................................................

function ProfilePage() {
	return (
		<>
			<Navbar />
			<DrawTimer />
			<Profile />
			<Footer />
			<WebFooter />
		</>
	)
}

export default ProfilePage
